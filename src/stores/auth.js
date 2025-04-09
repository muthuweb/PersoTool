import { defineStore } from 'pinia'
import keycloakService from '@/services/keycloak'
import router from '@/router'
import { roles } from '@/helpers/constants'
import getShortName from '@/helpers/shortName'
import getFullName from '@/helpers/fullName'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      isAuthenticated: false,
      user: {}
    }
  },
  persist: true,
  actions: {
    initAuth(keycloak) {
      this.isAuthenticated = keycloak.authenticated
      const {
        sub: id,
        name,
        family_name: lastName,
        given_name: firstName,
        email,
        roles
      } = keycloak.tokenParsed
      this.user = { id, name, firstName, lastName, email, roles }
    },
    async logout() {
      try {
        const redirectURL = import.meta.env.VITE_APP_URL
        await keycloakService.logout(redirectURL)
        this.$reset()
        router.push('/login')
      } catch (error) {
        console.error('Logout failed:', error)
      }
    },
    async login() {
      await keycloakService.login()
    }
  },
  getters: {
    accessToken: () => keycloakService.accessToken(),
    isLoggedIn: (state) => state.isAuthenticated,
    loggedInUserId: (state) => state.user?.id || null,
    loggedInUserShortName: (state) => {
      const { firstName = '', lastName = '' } = state.user || {}
      return getShortName(firstName, lastName)
    },
    loggedInUserFullName: (state) => {
      const { firstName, lastName } = state.user || {}
      return getFullName(firstName, lastName)
    },
    hasPermission: (state) => (permission) => {
      return (state.user.roles || []).includes(permission)
    },
    hasValidRole: (state) => {
      const userRoles = state.user.roles || []
      return userRoles.some((role) => Object.values(roles).includes(role))
    },
    currentRole: (state) => {
      let role
      if (state.user.roles) {
        for (const i in roles) {
          for (const j in state.user.roles) {
            if (roles[i] === state.user.roles[j]) {
              role = state.user.roles[j]
              break
            }
          }
        }
      }
      return role
    },
    currentRoleKey: (state) => {
      let role
      if (state.user.roles) {
        const keys = Object.keys(roles)
        for (const i in keys) {
          if ((state.user.roles || []).includes(roles[keys[i]])) {
            role = keys[i]
            break
          }
        }
      }
      return role
    },
    isAdmin: (state) => {
      return (state.user.roles || []).includes('perso-admin')
    },
    isManagingDirector: (state) => {
      return (state.user.roles || []).includes('agency')
    },
    isHR: (state) => {
      return (state.user.roles || []).includes('hr')
    }
    //...
  }
})
