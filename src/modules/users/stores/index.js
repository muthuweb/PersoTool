import { defineStore } from 'pinia'
export const useUsersStore = defineStore('users', {
  state: () => ({
    message: 'Message loading from users Module!'
  }),
  actions: {
    updateMessage(message) {
      this.message = message
    }
  }
})
