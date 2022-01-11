<template src="./template.html" />

<script>
export default {
  name: 'TopLine',
  emits: ['togglerChanged'],
  methods: {
    changedValue(name) {
      this.$emit('togglerChanged', name)
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
