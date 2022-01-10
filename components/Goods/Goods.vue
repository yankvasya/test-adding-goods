<template src="./template.html" />

<script>
export default {
  name: 'Goods',
  props: {
    name: String,
    desc: String,
    url: String,
    cost: Number,
    date: Number
  }
  ,
  methods: {
    getCost() {
      return `${this.cost.toLocaleString('ru')} руб.`
    },
    deleteGoods() {
      this.changeLocalStorage()
      this.$store.commit('goods/deleteGoods', this.date)
      this.$emit('deleteGoods')
    },
    changeLocalStorage() {
      const changeData = JSON.stringify(JSON.parse(localStorage.getItem('goods'))?.filter(({date}) => date !== this.date))
      localStorage.setItem('goods', changeData)
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
