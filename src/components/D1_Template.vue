<template>
  <div class="hello">
    <h1 v-once>{{ msg }}</h1>
    <h2>{{ topic }}</h2>
    <h3>{{ desc }}</h3>
    <div v-html="rawHtml"></div>
    <div>Javascript 表达式 {{ counter + 1 }}</div>
    <div>
      <span v-bind:title="loadingTime">
        鼠标悬停几秒钟查看此处动态绑定的提示信息！
      </span>
    </div>
    <div>
      <span>如果需要使用HTML的属性，需要使用v-bind指令</span>
      <button v-bind:disabled="isDisabled">可以按吗？</button>
      <button :disabled="isDisabled">可以按吗 2？</button>
    </div>
    <div>
      <h3>计算属性</h3>
      <div>
        <p>Original message: "{{ msg }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
      </div>
    </div>
    <div>
      <ul>
        <li><router-link to="D2_Ctrl">指令控制</router-link></li>
        <li><router-link to="D3_UserInput">处理用户输入</router-link></li>
        <li><router-link to="D4_Component">组件</router-link></li>
        <li><router-link to="D5_LifeCycle">实例生命周期</router-link></li>
        <li><router-link to="D7_FormBinding">Form处理</router-link></li>
        <li><router-link to="D8_Slot">插槽(Slot)</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      topic: 'Vue 课堂',
      desc: '我们已经成功创建了第一个 Vue 应用！看起来这跟渲染一个字符串模板非常类似，但是 Vue 在背后做了大量工作。现在数据和 DOM 已经被建立了关联，所有东西都是响应式的。',
      loadingTime: '页面加载于 ' + new Date().toLocaleString(),
      rawHtml: '<h1>Hello HTML</h1>',
      counter: 0,
      isDisabled: false
    }
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.msg.split('').reverse().join('')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
