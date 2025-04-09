import { defineStore } from 'pinia'
export const useLocationsStore = defineStore('locations', {
  state: () => ({
    message: 'Message loading from location Module!'
  }),
  actions: {
    updateMessage(message) {
      this.message = message
    }
  }
})
