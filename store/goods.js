export const state = () => ({
  items: [],
  filter: 'default'
})

export const mutations = {
  loadGoods (state, payload) {
    state.items = payload
  },
  addGoods (state, payload) {
    state.items.push({
      ...payload
    })
  },
  deleteGoods (state, payload) {
    state.items = state.items.filter(goods => goods.date !== payload)
  },
  changeFilter (state, payload) {
    state.filter = payload
  },
  defaultList: (state) => {
    state.items.sort((a, b) => a.date - b.date)
  },
  cheapFirst: (state) => {
    state.items.sort((a, b) => a.cost - b.cost)
  },
  dearFirst: (state) => {
    state.items.sort((a, b) => b.cost - a.cost)
  },
  byName: (state) => {
    state.items.sort((a, b) => a.name.localeCompare(b.name))
  }
}

export const getters = {
  // dearFirst: state => {
  //   return state.items.sort((a,b) => b.cost - a.cost)
  // },
  // byName: state => {
  //   return state.items.sort((a,b) => a.name)
  // }
}
