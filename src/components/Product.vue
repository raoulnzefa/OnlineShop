<template>
<div class="col-md-4 col-sm-6 mb-3">
  <div class="card text-white bg md-4">
    <img class="card-img-top" 
        :src="require(`../img/${productCategory}.png`)"
        :alt="productCategory"
        style="height: 230px"
        >

    <div class="card-body">
      <p class="card-title">{{ product.name }}</p>
      <p class="card-text">
        <strong>
            Price: {{ product.price }} <i class="fas fa-dollar-sign"></i>
        </strong>
      </p>  
    </div>
    <button class="btn btn-warning"><i class="fas fa-shopping-cart"></i> Buy</button>
  </div>
</div>
  
</template>

<script>
export default {
  props: ["product"],
  data(){
    return{
      productCategory : this.product.category
    }
  }
};
</script>

<style scoped>
  .bg{
    background-color: rgba(128,128, 128, 0.2);
  }
</style>