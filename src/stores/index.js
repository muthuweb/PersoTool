import { defineStore } from 'pinia'
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useMainStore = defineStore('counter', {
  //like data
  state: () => ({
    alertCount: 5,
    errors: []
  }),

  //like computed
  getters: {},

  //like methods
  actions: {
    addMessage(item) {
      const error = { ...item, id: new Date().getTime(), show: true, timeout: 3000 }
      this.errors.push(error)
      setTimeout(() => {
        const index = this.errors.findIndex(({ id }) => id === error.id)
        if (index !== -1) {
          this.errors.splice(index, 1)
        }
      }, 3200)
    }
  }
})
