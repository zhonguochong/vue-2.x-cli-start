<template>
    <div>
      <h3>表单处理</h3>
      <div>
        <h4>文本</h4>
        <input v-model="message" placeholder="edit me">
        <p>Message is: {{ message }}</p>
      </div>
      <div>
        <h4>多行文本</h4>
        <span>Multiline message is:</span>
        <p style="white-space: pre-line;">{{ message }}</p>
        <br>
        <textarea v-model="message" placeholder="add multiple lines"></textarea>
      </div>
      <div>
        <h4>复选框</h4>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
      </div>
      <div>
        <h4>多复选框</h4>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{ checkedNames }}</span>
      </div>
      <div>
        <h4>单选按钮</h4>
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>
      </div>
      <div>
        <h4>单选选择框</h4>
        <select v-model="selected">
          <option disabled value="">请选择</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <span>Selected: {{ selected }}</span>
      </div>
      <div>
        <h4>多选选择框</h4>
        <select v-model="multiSelected" multiple style="width: 50px;">
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <br>
        <span>Selected: {{ multiSelected }}</span>
      </div>
      <div>
        <h4>用 v-for 渲染的动态选项</h4>
        <select v-model="vSelected">
          <option v-for="option in options" :value="option.value" :key="option.text">
            {{ option.text }}
          </option>
        </select>
        <span>Selected: {{ vSelected }}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'D7_FormBinding',
  data () {
    return {
      message: '',
      checked: false,
      checkedNames: [],
      picked: '',
      selected: '',
      multiSelected: [],
      vSelected: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
