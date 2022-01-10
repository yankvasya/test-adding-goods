export const state = () => ({
  items: [],
  filter: []
})

export const mutations = {
  loadGoods(state, payload) {
    state.items = payload
  },
  addGoods(state, payload) {
    state.items.push({
      ...payload
    })
  },
  deleteGoods(state, payload) {
    state.items = state.items.filter(goods => goods.date !== payload)
  }
}
