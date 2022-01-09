export const state = () => ({
  items: []
})

export const mutations = {
  loadGoods(state, payload) {
    state.items = payload
  },
  addGoods(state, payload) {
    state.items.push({
      ...payload
    })
  }
}
