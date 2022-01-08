<template>
  <div class="wrapper">
      <form class="adding-goods">
          <div class="adding-goods__field field">
            <h3 class="field__name">Наименование товара</h3>
            <label class="field__label">
              <input class="field__input" type="text" placeholder="Введите название товара">
            </label>
          </div>
          <div class="adding-goods__field field">
            <h3 class="field__name">Описание товара</h3>
            <label class="field__label">
              <input class="field__input" type="text" placeholder="Введите описание товара">
            </label>
          </div>
          <div class="adding-goods__field field">
            <h3 class="field__name">Цена товара</h3>
            <label class="field__label">
              <input class="field__input" type="text" placeholder="Введите цену">
            </label>
          </div>
          <button class="adding-goods__submit" type="submit">Добавить товар</button>
        </form>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style lang="scss" scoped></style>
