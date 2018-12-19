<template>
  <div>
    <p v-if="seen">现在你看到我了</p>
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.text">
        {{index}} - {{ todo.text }}
      </li>
    </ul>
    <div>
      <h3>v-for渲染对象属性</h3>
      <ul>
        <li v-for="(value, key) in person" :key="value">
          {{ key }} : {{ value }}
        </li>
      </ul>
    </div>
    <div>
      <button v-on:click="hideOrShow">Hide or Show</button>
      <button @click="hideOrShow">显示或隐藏</button>
    </div>
    <div>
      <h3>条件渲染</h3>
      <div v-if="type === 'A'">
        A
      </div>
      <div v-else-if="type === 'B'">
        B
      </div>
      <div v-else-if="type === 'C'">
        C
      </div>
      <div v-else>
        Not A/B/C
      </div>
    </div>
    <div>
      <h3>v-Show</h3>
      <p v-show="seen">显示</p>
    </div>
    <div>
      <button v-on:click="addItem">Add Item</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'D2Ctrl',
  data () {
    return {
      seen: true,
      todos: [
        {text: '学习 JavaScript'},
        {text: '学习 Vue'},
        {text: '整个牛项目'}
      ],
      type: 'A',
      person: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      }
    }
  },
  methods: {
    hideOrShow: function () {
      this.seen = !this.seen
    },
    addItem: function () {
      this.todos.push({text: 'New Value'})
    }
  }
}
</script>

<style scoped>

</style>
