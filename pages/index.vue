<template>
  <div class="wrapper">
    <TopLine @togglerChanged="listChanged" />
    <main class="main">
      <AddingGoods @addedGoods="listChanged" />
      <GoodsList>
        <Goods
          v-for="({name,cost,desc,url,date}, npx) in goods"
          :key="npx"
          :name="name"
          :desc="desc"
          :cost="cost"
          :url="url"
          :date="date"
          @deleteGoods="listChanged"
        />
      </GoodsList>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Main',
  emits: ['deleteGoods', 'togglerChanged', 'addedGoods'],
  data() {
    return {
      goods: []
    }
  },
  computed: {
    stateGoods () {
      return this.$store.state.goods.items
    },
    filter () {
      return this.$store.state.goods.filter
    }
  },
  methods: {
    checkLocalStorage() {
      return JSON.parse(localStorage.getItem('goods'))
    },
    getTestData() {
      const date = Date.parse(`${new Date()}`)
      return [
        {
          name: 'Наименование товара',
          desc: 'Довольно-таки интересное описание товара в несколько строк.' +
          ' Довольно-таки интересное описание товара в несколько строк',
          cost: 10000,
          url: 'https://i.ibb.co/0sMgSmv/test.jpg',
          date
        }
      ]
    },
    listChanged() {
      switch (this.filter) {
        case 'default':
          this.$store.commit('goods/defaultList')
          break
        case 'cheapFirst':
          this.$store.commit('goods/cheapFirst')
          break
        case 'dearFirst':
          this.$store.commit('goods/dearFirst')
          break
        case 'byName':
          this.$store.commit('goods/byName')
          break
        default:
          break
      }
      this.goods = this.stateGoods
    },
    updateLocalStorage() {
      localStorage.setItem('goods', JSON.stringify(this.stateGoods))
    }
  },
  created() {
    const data = this.checkLocalStorage() || this.getTestData()
    this.$store.commit('goods/loadGoods', data)
    this.$store.commit('goods/defaultList')
    this.goods = this.stateGoods
  },
  updated() {
    this.updateLocalStorage()
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
