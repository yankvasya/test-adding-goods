<template>
  <div class="wrapper">
    <TopLine />
    <main class="main">
      <AddingGoods />
      <GoodsList>
        <Goods v-for="n in 30" :key="n" />
      </GoodsList>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style lang="scss" src="./style.scss" scoped />
