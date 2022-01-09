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
      const { name, url, cost } = data
      this.checkFormValues({name,url,cost}) && this.createGoods(data)
    },
    checkFormValues(elements) {
      let isValuesFull = true
      for (const [_, input] of Object.entries(elements)) {
        if (!input.value) {
          isValuesFull = false
        }
      }

      return isValuesFull
    },
    createGoods({ name, desc, url, cost }) {
      const data = {
        name: name.value,
        cost: cost.value*1,
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
