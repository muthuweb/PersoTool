import axios from 'axios'

export default {
  install: (app) => {
    const auth = app.config.globalProperties.$auth
    const store = app.config.globalProperties.$store

    axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`

    axios.interceptors.request.use(async (config) => {
      config.headers.Authorization = `Bearer ${auth.accessToken}`
      return config
    })

    axios.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        const { response } = error
        if (response.status === 401) {
          window.location.reload()
        } else if (response.status === 400) {
          return Promise.resolve(response)
        } else if (response.status >= 500) {
          store.addMessage({ messageKey: 'responseMessages.error.unknown' })
        }
        return Promise.reject(error)
      }
    )

    app.config.globalProperties.$axios = axios
  }
}
