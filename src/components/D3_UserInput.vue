<template>
  <div>
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">逆转消息</button>
    <p>{{ message }}</p>
    <input v-model="message">
  </div>
</template>

<script>
export default {
  name: 'D3UserInput',
  data () {
    return {
      message: 'Hello Vue.js!'
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>

<style scoped>

</style>
