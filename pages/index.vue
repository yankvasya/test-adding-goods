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
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
