<template src="./template.html" />

<script>
export default {
  name: 'AddingGoods',
  methods: {
    createGoods(e) {
      e.preventDefault()
      const { name, desc, url, cost } = e.target.elements
      const data = {
        name: name.value,
        cost: cost.value,
        desc: desc.value,
        url: url.value
      }

      this.$store.commit('goods/addGoods', data)
     this.clearForm([name,desc,url,cost])
    },
    clearForm(elements) {
      for (let element of elements) {
        element.value = ''
      }
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
