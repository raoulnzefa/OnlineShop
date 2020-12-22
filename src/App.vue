<template>
  <div class="container">
    <div class="row">
      <h1>Gittigidiyor</h1>
    </div>
    <div class="row">
      <div class="col-md-4">
        <categories></categories>
      </div>
      <div class="col-md-8">
        <h2>Products</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Categories from './components/Categories.vue'

  export default{
  components: { Categories },
    data : function(){
      return{
        name : "Mert"
      }
    }
  }
</script>

