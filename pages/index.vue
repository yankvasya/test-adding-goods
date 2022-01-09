<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <h1 class="header__title">Добавление товара</h1>
        <Toggler />
      </div>
    </header>

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

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 32px 0 32px;

  width: 100%;
  height: 83px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    max-width: 100%;
  }

  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    color: #3F3F3F;
  }
}

.wrapper {
  max-width: 1367px;
  padding: 0 0 10px 0;
  background: rgba(255, 254, 251, 0.8);
}

.main {
  padding-top: 83px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
}

.adding-goods {
  left: 32px;
  top: 83px;
  position: fixed;
  z-index: 3;
}
</style>
