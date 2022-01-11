<template src="./template.html" />

<script>
export default {
  name: 'Toggler',
  methods: {
    changedValue(e) {
      const value = e.target.value
      this.$store.commit('goods/changeFilter', value)
      this.$emit('togglerChanged', value)
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
