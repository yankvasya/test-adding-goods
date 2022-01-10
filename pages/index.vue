<template>
  <div class="wrapper">
    <TopLine />
    <main class="main">
      <AddingGoods />
      <GoodsList>
        <Goods
          v-for="({name,cost,desc,url}, npx) in this.goods"
          :key="npx"
          :name="name"
          :desc="desc"
          :cost="cost"
          :url="url"
        />
      </GoodsList>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Main',
  computed: {
    goods () {
      return this.$store.state.goods.items
    }
  },
  methods: {
    checkLocalStorage() {
      return JSON.parse(localStorage.getItem('goods'));
    },
    getTestData() {
      return [
        {
          name: 'Наименование товара',
          desc: 'Довольно-таки интересное описание товара в несколько строк.' +
          ' Довольно-таки интересное описание товара в несколько строк',
          cost: 10000, url: 'https://i.ibb.co/0sMgSmv/test.jpg'
        }
      ]
    }
  },
  created() {
    const data = this.checkLocalStorage() || this.getTestData()
    this.$store.commit('goods/loadGoods', data)
  },
  updated() {
    const data = JSON.stringify(this.goods)
    localStorage.setItem('goods', data)
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
