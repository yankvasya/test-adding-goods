<template src="./template.html" />

<script>
export default {
  name: 'AddingGoods',
  data() {
    return {
      values: {
        name: { warn: false },
        cost: { warn: false },
        url: { warn: false }
      },
      isValuesEmpty: true
    }
  },
  methods: {
    valueChanged(e) {
      switch (e.target.name) {
        case 'name':
          this.values.name.warn = !e.target.value
          break;
        case 'url':
          this.values.url.warn = !e.target.value
          break;
        case 'cost':
          this.values.cost.warn = !e.target.value
          break;
        default:
          break;
      }
    },
    submitForm(e) {
      e.preventDefault()

      const data = e.target.elements
      this.createGoods(data)
    },
    checkFormValues(e) {
      const { name, url, cost } = e.currentTarget.elements
      const elements = { name, url, cost }

      let isValuesEmpty = false
      for (const [_, input] of Object.entries(elements)) {
        if (!input.value) {
          isValuesEmpty = true
        }
      }

      this.isValuesEmpty = isValuesEmpty
    },
    createGoods({ name, desc, url, cost }) {
      const date = Date.parse(`${new Date()}`)

      const data = {
        name: name.value,
        cost: cost.value*1,
        desc: desc.value,
        url: url.value,
        date
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
