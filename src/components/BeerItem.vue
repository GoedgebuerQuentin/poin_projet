<template>
<div v-if="item">
    <div>
        Nom :
    </div>
        <a>{{item.name}} </a><br>
    <div>
        Prix :
    </div>
        <a>{{item.price}}</a>
    <div>
        Image :
    </div>
        <img v-bind:src="item.image">

        <br>

        <div v-if="item.rating.average">
            <button v-on:click="Rating()"> Rating </button>
            <a>
            <div v-bind:id="item.id" style="visibility : hidden">
                {{item.rating.average}}
            </div>
            </a>
        </div>
        <button v-on:click="DeleteItem()"> supprimer </button>
        <br>
        <br>
        <button v-on:click="Alert()"> Alert </button>
<hr>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Item } from './models'

@Component
export default class BeerList extends Vue {
    @Prop({ type: Object, required: true }) readonly item!: Item

    Rating () : void {
      if (document.getElementById(this.item.id).style.visibility === 'hidden') {
        document.getElementById(this.item.id).style.visibility = 'visible'
      } else {
        document.getElementById(this.item.id).style.visibility = 'hidden'
      }
    }

    DeleteItem () : void {
      this.$emit('item-deleted', this.item.id)
    }

    Alert () : void {
      this.$emit('item-alert', this.item.id)
    }
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
  color: #AD1F00;
}
div.test {
  visibility: hidden;
}
</style>
