<template>
  <div class="container">
    <div class="row">
      <Title></Title>
    </div>
    <div class="row">
      <div class="col-md-3">
        <Categories></Categories>
      </div>
      <div class="col-md-9">
        <h2>Products</h2>
      </div>
    </div>
  </div>
</template>

<script>
  import Categories from './components/Categories.vue'
  import Title from "./components/Title.vue"

  export default{
  components: { Categories, Title },
    data : function(){
      return{
        name : "Mert"
      }
    }
  }
</script>

