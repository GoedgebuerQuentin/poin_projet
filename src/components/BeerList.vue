<template>
<div v-if="beers">
       <BeerItem v-for="item in beers" :key="item.id" :item="item" v-on:item-deleted="deleteItemFromList(item.id)" v-on:item-alert="Alert(item.name)"></BeerItem>
       <!-- {{beers.name}} {{beers.price}}
       <div v-if="beers.rating">
          <div id='masquer' style="visibility: collapse">
             {{beers.rating.average}}
          </div>

          <input type="button" value="Rating" v-on:click="masquerDiv('masquer')" />

        </div>
        <div v-if="beers.image">
        <img v-bind:src="beers.image">
        </div>
        <hr> -->
    </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
import BeerItem from './BeerItem.vue'

@Component({
  components: {
    BeerItem
  }
})
export default class BeerList extends Vue {
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     beers: any[]=[]

     // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
     async mounted () {
       await axios
         .get('https://api.sampleapis.com/beers/ale')
         .then((response) => {
           this.beers = response.data
           console.log(response.data)
         })
     }

     deleteItemFromList (deletedId : number) : void {
       const index = this.beers.findIndex(x => x.id === deletedId)
       console.log(index, 'voici l\'index')
       this.beers.splice(index, 1)
       console.log(deletedId)
     }

     Alert (name: string) : void {
       alert(name)
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
  color: #42b983;
}
div.test {
  visibility: hidden;
}
</style>
