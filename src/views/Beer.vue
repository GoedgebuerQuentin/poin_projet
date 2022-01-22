<template>
  <div class="beer">
    <h1>Voici les Bière : </h1>
     <BeerList></BeerList>
  </div>
</template>

<script>
// @ is an alias to /src
import BeerList from '@/components/BeerList.vue'

export default {
  name: 'BeerView',
  components: {
    BeerList
  }
}
</script>
