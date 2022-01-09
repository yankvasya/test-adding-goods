<template src="./template.html" />

<script>
export default {
  name: 'Goods',
  props: {
    name: String,
    desc: String,
    url: String,
    cost: Number
  }
  ,
  methods: {
    getCost() {
      return `${this.cost.toLocaleString('ru')} руб.`
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
