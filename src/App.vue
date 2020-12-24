<template>
  <div class="container">
      <Title></Title>
    <div class="row mt-2">
        <Categories></Categories>
        <Products></Products>
    </div>
      <FooterBar></FooterBar>
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
