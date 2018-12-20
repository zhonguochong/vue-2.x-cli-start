<template>
  <div>
    <div class='ui centered card'>
      <div class='header'>
        Login
      </div>
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>Username</label>
            <input v-model="username" type='text' ref='username' defaultValue="">
          </div>
          <div class='field'>
            <label>Password</label>
            <input v-model="password" type='password' ref='password' defaultValue="">
          </div>
          <div class='ui two button attached buttons'>
            <button class='ui basic blue button' v-on:click="login">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
    {{ msg }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'D9AcessBackend',
  data () {
    return {
      username: '',
      password: '',
      msg: ''
    }
  },
  methods: {
    login () {
      console.log(this.username + this.password)
      this.validate(this.username, this.password, () => {
        this.msg = 'login success!'
        // this.$router.push({ name: 'TodoPage', params: { username: this.username } })
        console.log(this.$store.state.authInfo.username + ' ' + this.$store.state.authInfo.token)
      }, () => {
        this.msg = 'login fail!'
        console.log('login fail!')
      })
    },
    validate (username, pwd, success, failure) {
      axios.post('http://115.159.100.48:8080/api/login'
        , { userId: username, password: pwd }
        , { headers: { 'content-type': 'application/json' } })
        .then((result) => {
          if (result.data.succ) {
            console.log('login success ' + result.data.data)
            this.$store.commit('loginSuccess', {'username': username, 'token': result.data.data})
            success()
          } else {
            this.msg = 'login fail!'
            failure()
          }
        }, (error) => {
          console.error(error)
          failure()
        })
    }
  }
}
</script>

<style scoped>

</style>
