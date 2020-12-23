<template>
  <div class="container">
      <Title></Title>
    <div class="row mt-2">
      <div class="col-md-3">
        <Categories></Categories>
      </div>
      <div class="col-md-9">
        <Products></Products>
      </div>
    </div>
    <div class="row">
      <FooterBar></FooterBar>
    </div>
  </div>
</template>

<script>
  import Categories from './components/Categories.vue'
  import Title from "./components/Title.vue"
  import Products from './components/Products.vue'
  import FooterBar from "./components/FooterBar.vue"

  export default{
  components: { Categories, Title, Products,FooterBar },
    data : function(){
      return{
        
      }
    }
  }
</script>

