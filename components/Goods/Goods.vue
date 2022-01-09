<template src="./template.html" />

<script>
export default {
  name: 'Goods',
  props: {
    name: String,
    desc: String,
    url: String,
    cost: String
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
