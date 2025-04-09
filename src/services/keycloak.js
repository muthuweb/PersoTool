// Ref - https://www.keycloak.org/docs/latest/securing_apps/#_javascript_adapter
// Ref - https://medium.com/js-dojo/authentication-made-easy-in-vue-js-with-keycloak-c03c7fff67bb
import Keycloak from 'keycloak-js'
import { useProfileStore } from '@/stores/profile'
import { useAuthStore } from '@/stores/auth'

const keycloak = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID
})

async function init(onInitCallback) {
  keycloak.onAuthSuccess = () => {
    if (import.meta.env.DEV) {
      console.log(keycloak)
    }
  }

  keycloak.onTokenExpired = async () => {
    try {
      await keycloak.updateToken(60) // Try to refresh the token with 60 seconds buffer
      console.log('Token refreshed after expiration')
    } catch (error) {
      console.error('Token refresh failed, logging out...', error)
      logout()
    }
  }

  try {
    const authenticated = await keycloak.init({
      onLoad: 'check-sso',
      checkLoginIframe: false // Reduces unnecessary re-checks
    })
    if (authenticated) {
      onInitCallback()

      const store = useAuthStore()
      store.initAuth(keycloak)

      if (!store.hasValidRole) {
        setTimeout(() => keycloak.logout(), 5000)
        return
      }
      await useProfileStore().loadProfile()
    } else {
      login()
    }
  } catch (error) {
    console.error('Keycloak initialization failed:', error)
  }
}

async function login() {
  await keycloak.login({
    idpHint: 'oidc',
    redirectUri: import.meta.env.VITE_KEYCLOAK_REDIRECT_URL
  })
}

async function logout(redirectUri) {
  try {
    await keycloak.logout({ redirectUri })
  } catch (error) {
    console.error('Logout failed:', error)
  }
}

function accessToken() {
  return keycloak.token
}

const KeycloakService = {
  init,
  login,
  logout,
  accessToken
}

export default KeycloakService
