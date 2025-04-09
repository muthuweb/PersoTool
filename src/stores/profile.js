import { defineStore } from 'pinia'
import axios from 'axios'
import { useI18n } from 'vue-i18n'

import { useAuthStore } from '@/stores/auth'
import { useMainStore } from '@/stores'

const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: {},
    theme: preferredTheme,
    lang: useI18n().locale
  }),
  getters: {
    isProfileComplete: (state) => state.profile.is_profile_complete
  },
  actions: {
    resetStore() {
      this.$reset()
    },
    setProfileData(data) {
      this.profile = {
        ...this.profile,
        ...data
      }
      this.theme = data.profile_settings?.theme ?? this.theme
      this.lang = data.profile_settings?.account_language ?? this.lang
    },
    updateUserRole(data) {
      const index = this.profile.users.findIndex((item) => item.id === data.user_id)
      if (index !== -1) {
        this.profile.users[index].role = data.role
      }
    },
    updateTheme(mode) {
      this.theme = mode
      this.saveSettings()
    },
    updateLocale(lang) {
      this.lang = lang
      this.saveSettings()
    },
    async saveProfile(form) {
      const params = new FormData()
      Object.keys(form).forEach((key) => {
        let val = form[key]
        if (val !== null && val !== undefined) {
          if (Array.isArray(val)) {
            val = val.filter(Boolean) // Filter out falsy values from the array
            params.append(key, JSON.stringify(val))
          } else {
            params.append(key, val)
          }
        }
      })

      try {
        const { data } = await axios.put('admin', params)
        if (data.status === 'success') {
          if (!useAuthStore().isAdmin) {
            this.setProfileData(data.data)
          }
        } else {
          throw new Error('Error saving profile')
        }
      } catch {
        throw new Error('Error saving profile')
      }
    },

    async loadProfile() {
      try {
        const { data } = await axios.get('profile')
        if (data.status === 'success') {
          this.setProfileData(data.data)
        } else {
          useMainStore().addMessage({ messageKey: 'responseMessages.error.unknown' })
        }
      } catch (error) {
        console.error('loadProfile error', error)
        if (error?.response?.status === 403) {
          useAuthStore.logout()
          useMainStore().addMessage({ messageKey: 'responseMessages.error.uninvited' })
        } else {
          useMainStore().addMessage({ messageKey: 'responseMessages.error.unknown' })
        }
      }
    },

    async saveSettings() {
      try {
        const isDark = this.theme === 'dark'
        const params = new FormData()
        params.append('user_id', this.profile.sub)
        params.append('theme', isDark ? 'dark' : 'light')
        params.append('account_language', this.lang)
        const { data } = await axios.post('settings', params)
        return data
      } catch (error) {
        return new Error('Error saving settings', error)
      }
    },
    async inviteUsers(form) {
      try {
        const params = new FormData()
        Object.keys(form).forEach((key) => {
          const val = form[key]
          params.append(key, Array.isArray(val) ? JSON.stringify(val) : val)
        })
        const { data } = await axios.post('invite-user', params)
        return data
      } catch (error) {
        console.error('Error inviting users:', error)
        return {}
      }
    }
  }
})
