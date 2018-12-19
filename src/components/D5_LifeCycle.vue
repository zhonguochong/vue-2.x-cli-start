<template>
  <h1>Life Cycle Methods</h1>
</template>

<script>
export default {
  name: 'D5LifeCycle',
  data () {
    return {
      msg: 'It is startup.'
    }
  },
  created: function () {
    console.log('msg = ' + this.msg)
  }
}
</script>

<style scoped>

</style>
