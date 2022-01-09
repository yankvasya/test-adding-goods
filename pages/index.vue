<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <h1 class="header__title">Добавление товара</h1>
        <Toggler />
      </div>
    </header>

    <main class="main">
      <form class="adding-goods">
        <div :class="['adding-goods__field', 'field', {'required': true}]">
          <h3 class="field__name">Наименование товара</h3>
          <label class="field__label">
            <input :class="['field__input', {'required': false}]" type="text" placeholder="Введите название товара">
          </label>
          <div class="field__error" v-if="false">Поле является обязательным</div>
        </div>
        <div class="adding-goods__field field">
          <h3 class="field__name">Описание товара</h3>
          <label class="field__label">
            <textarea class="field__textarea" type="text" placeholder="Введите описание товара"></textarea>
          </label>
        </div>
        <div :class="['adding-goods__field', 'field', {'required': true}]">
          <h3 class="field__name">Ссылка на изображение товара</h3>
          <label class="field__label">
            <input :class="['field__input', {'required': false}]" type="text" placeholder="Введите ссылку">
          </label>
          <div class="field__error" v-if="false">Поле является обязательным</div>
        </div>
        <div :class="['adding-goods__field', 'field', {'required': true}]">
          <h3 class="field__name">Цена товара</h3>
          <label class="field__label">
            <input :class="['field__input', {'required': false}]" type="text" placeholder="Введите цену">
          </label>
          <div class="field__error" v-if="false">Поле является обязательным</div>
        </div>
        <button :class="['adding-goods__submit', {'disabled': false}]" type="submit">Добавить товар</button>
      </form>

      <div class="goods-list">
        <div class="goods" v-for="n in 30" :key="n">
          <img src="../assets/img/test.jpg" alt="picture" class="goods__picture">
          <div class="goods__content">
            <h2 class="goods__name">Наименование товара</h2>
            <h3 class="goods__desc">
              Довольно-таки интересное описание товара в несколько строк.
              Довольно-таки интересное описание товара в несколько строк
            </h3>
            <h4 class="goods__price">10 000 руб.</h4>
          </div>
          <div class="goods__delete">
            <Delete />
          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script>
export default {
  name: 'Main',
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
  padding: 24px;
  z-index: 3;
  width: 332px;

  background: #FFFEFB;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;

  .field {
    position: relative;

    &__name {
      position: relative;
      display: inline-flex;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 13px;
      color: #49485E;
    }

    &__input, &__textarea {
      margin-top: 4px;
      padding: 10px 16px;
      width: 284px;
      background: #FFFEFB;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;

      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;
      color: #3F3F3F;

      &::placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        color: #B4B4B4;
      }
    }

    &__input {
      height: 36px;

      &.required {
        border: 1px solid #FF8484;
      }
    }

    &__textarea {
      resize: none;
      height: 108px;
    }

    &:not(:first-child) {
      margin-top: 16px;
    }

    &.required {
      .field__name:before {
        content: "";
        position: absolute;
        width: 4px;
        height: 4px;
        top: 1px;
        right: -5px;

        background: #FF8484;
        border-radius: 4px;
      }
    }

    &__error {
      position: absolute;
      left: 0;
      bottom: -12px;
      font-style: normal;
      font-weight: normal;
      font-size: 8px;
      line-height: 10px;
      letter-spacing: -0.02em;
      color: #FF8484;
    }
  }

  &__submit {
    margin-top: 24px;
    width: 284px;
    height: 36px;
    left: 56px;
    top: 463px;

    background: #7BAE73;
    border-radius: 10px;

    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.02em;
    color: #FFFFFF;

    &.disabled {
      background: #EEEEEE;
      color: #B4B4B4;
    }
  }
}

.goods {
  user-select: none;
  position: relative;
  width: 332px;
  height: 423px;

  background: #FFFEFB;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;

  &__delete {
    display: none;
    cursor: pointer;

    justify-content: center;
    align-items: center;


    position: absolute;
    width: 32px;
    height: 32px;
    right: -8px;
    top: -8px;

    background: #FF8484;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    &:active, &:focus {
      background: #ee5757;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }

  &:hover {
    .goods__delete {
      display: flex;
    }
  }

  &__picture {
    width: 332px;
    height: 200px;
  }

  &__content {
    padding: 16px 16px 24px;
  }

  &__name {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    color: #3F3F3F;
  }

  &__desc {
    height: 80px;
    overflow: auto;
    margin-top: 16px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;

    color: #3F3F3F;
  }

  &__price {
    margin-top: 32px;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;

    color: #3F3F3F;
  }
}

.goods-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
</style>
