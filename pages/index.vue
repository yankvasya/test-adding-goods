<template>
  <div class="wrapper">
    <div class="adding-goods">
      <h1 class="adding-good__title">
        <form accept-charset="UTF-8" class="form">
          <div class="form__field field">
            <h3 class="field__name">Наименование товара</h3>
            <label class="field__label">
              <input type="text" placeholder="Введите название товара">
            </label>
          </div>
          <div class="form__field field">
            <h3 class="field__name">Описание товара</h3>
            <label class="field__label">
              <input type="text" placeholder="Введите описание товара">
            </label>
          </div>
          <div class="form__field field">
            <h3 class="field__name">Цена товара</h3>
            <label class="field__label">
              <input type="text" placeholder="Введите цену">
            </label>
          </div>
          <button type="submit">Добавить товар</button>
        </form>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style lang="scss" scoped></style>
