<template>
  <div class="wrapper">
    <TopLine />
    <main class="main">
      <AddingGoods />
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
  emits: ['deleteGoods'],
  data() {
    return {
      goods: []
    }
  },
  computed: {
    defaultGoods () {
      return this.$store.state.goods.items
    }
  },
  methods: {
    checkLocalStorage() {
      return JSON.parse(localStorage.getItem('goods'));
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
      console.log(this.goods)
      this.goods = this.defaultGoods
    }
  },
  created() {
    const data = this.checkLocalStorage() || this.getTestData()
    this.goods = data
    this.$store.commit('goods/loadGoods', data)
  },
  updated() {
    const data = JSON.stringify(this.goods)
    this.listChanged()
    localStorage.setItem('goods', data)
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
