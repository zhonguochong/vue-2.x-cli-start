// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(Vuex)

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})

Vue.component('blog-post2', {
  props: ['post', 'title_size'],
  template: `
    <div>
      <span :style="{ fontSize: title_size + 'em' }">{{ post.title }}</span>
      <button v-on:click="$emit('change-size')">Change Size</button>
    </div>
  `
})

Vue.component('custom-input', {
  props: ['value'],
  template: `
    <div>
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
    <span> inter value = {{ value }}</span>
    </div>
  `
})

Vue.component('navigation-link', {
  props: ['url'],
  template: `
    <a v-bind:href="url" class="nav-link">
      <slot></slot>
    </a>
  `
})

Vue.component('base-layout', {
  template: `
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
  `
})

const store = new Vuex.Store({
  state: {
    authInfo: {
      username: '',
      token: ''
    }
  },
  mutations: {
    loginSuccess (state, payload) {
      state.authInfo.username = payload.username
      state.authInfo.token = payload.token
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
