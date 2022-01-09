export const state = () => ({
  items: []
})

export const mutations = {
  addGoods (state, payload) {
    state.items.push({
      ...payload
    })
  }
}
