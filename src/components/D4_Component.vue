<template>
  <div>
    <div>
    <ol>
      <todo-item
        v-for="item in groceryList"
        v-bind:todo="item"
        v-bind:key="item.id">
      </todo-item>
    </ol>
    </div>
    <div>
      <button-counter></button-counter>
      <button-counter></button-counter>
    </div>
    <div>
      <blog-post title="My journey with Vue"></blog-post>
    </div>
    <div>
      <blog-post2
        v-for="post in posts"
        v-bind:key="post.id"
        v-bind:post="post"
        v-bind:title_size="postFontSize"
        v-on:change-size = "postFontSize += 0.1"
      ></blog-post2>
    </div>
    <div>
      <h5>自定义输入控件</h5>
      <custom-input v-model="searchText"></custom-input>
      <span> value = {{ searchText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'D4Component',
  data () {
    return {
      groceryList: [
        { id: 0, text: '蔬菜' },
        { id: 1, text: '奶酪' },
        { id: 2, text: '随便其它什么人吃的东西' }
      ],
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      postFontSize: 1,
      searchText: 'ABCD'
    }
  },
  components: {

  }
}
</script>

<style scoped>

</style>
