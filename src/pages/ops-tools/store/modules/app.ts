import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      collapse: false
    }
  },
  actions: {
    setCollapse(collapse: boolean) {
      this.collapse = collapse
    }
  }
})
