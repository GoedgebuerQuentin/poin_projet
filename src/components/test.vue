<template>
    <div>
        <div v-for="(todos, index) in todos" :key="index">
            <div v-if="todos.ImgSrc">
                <img v-bind:src='todos.ImgSrc'/>
            </div>
            <br>
        mon item est : {{todos.id}} {{todos.content}}
        <br>
        </div>

    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { TodoItem } from './TodoItem'
// import axios from 'axios'

@Component
export default class HelloWorld extends Vue {
    todos: TodoItem [] =
[
  {
    id: 1,
    content: 'test',
    ImgSrc: 'https://static.remove.bg/remove-bg-web/8fb1a6ef22fefc0b0866661b4c9b922515be4ae9/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png'
  },
  {
    id: 2,
    content: 'gg',
    ImgSrc: null
  }
]
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
