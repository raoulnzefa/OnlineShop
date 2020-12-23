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
        <Products></Products>
      </div>
    </div>
  </div>
</template>

<script>
  import Categories from './components/Categories.vue'
  import Title from "./components/Title.vue"
  import Products from './components/Products.vue'

  export default{
  components: { Categories, Title, Products },
    data : function(){
      return{
        
      }
    }
  }
</script>

