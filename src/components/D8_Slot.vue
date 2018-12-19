<template>
  <div>
    <navigation-link url="/profile">
      Your Profile
    </navigation-link>
    <navigation-link url="/Settings">
      <span style="font-size: 2em">Your Settings</span>
    </navigation-link>
    <br>
    <base-layout>
      <template slot="header">
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template slot="footer">
        <p>Here's some contact info</p>
      </template>
    </base-layout>
  </div>
</template>

<script>
export default {
  name: 'D8Slot'
}
</script>

<style scoped>

</style>
