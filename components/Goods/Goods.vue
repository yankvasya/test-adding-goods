<template src="./template.html" />

<script>
export default {
  name: 'GoodsItem',
  props: {
    name: {
      default: 'Название товара',
      type: String
    },
    desc: {
      default: 'Описание товара',
      type: String
    },
    url: {
      default: 'https://i.ibb.co/0sMgSmv/test.jpg',
      type: String
    },
    cost: {
      default: 10000,
      type: Number
    },
    date: {
      default: Date.parse(`${new Date()}`),
      type: Number
    }
  },
  data () {
    return {
      isImgLoaded: false
    }
  },
  methods: {
    getCost () {
      return `${this.cost.toLocaleString('ru')} руб.`
    },
    deleteGoods () {
      this.changeLocalStorage()
      this.$store.commit('goods/deleteGoods', this.date)
      this.$emit('deleteGoods')
    },
    changeLocalStorage () {
      const changeData = JSON.stringify(JSON.parse(localStorage.getItem('goods'))?.filter(({ date }) => date !== this.date))
      localStorage.setItem('goods', changeData)
    },
    changeImgLoaded () {
      this.isImgLoaded = true
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
