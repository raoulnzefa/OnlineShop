<template>
<div class="col-md-4 col-sm-6 mb-3">
  <div class="card text-white bg md-4">
    <img class="card-img-top" 
        :src="require(`../img/${productCategory}.png`)"
        :alt="productCategory"
        style="height: 230px"
        >

    <div class="card-body" v-if="isBuy">
      <p class="card-title">{{ product.name }}</p>
      <p class="card-text">
        <strong>
            Price: {{ product.price }} <i class="fas fa-dollar-sign"></i>
        </strong>
      </p>  
    </div>
    <button class="btn btn-warning" @click="changeBuy" v-if="isBuy"><i class="fas fa-shopping-cart"></i> Buy</button>
    
    <!-- ELSE -->
    <div class="card-body" v-if="!isBuy">

      <p class="card-text">
        <strong>
            Piece : {{productPiece}}
        </strong>
        <strong>
            Total Price : {{ product.price * productPiece}}
        </strong>
      </p>  
    </div>
    <div class="btn-group" v-if="!isBuy">
      <button class="btn btn-success" @click="pieceIncrement"><i class="fas fa-cancel"></i><i class="fas fa-plus"></i></button>
      <button class="btn btn-danger" @click="changeBuy"><i class="fas fa-cancel"></i> Cancel</button>
      <button class="btn btn-warning" @click="pieceDecrement"><i class="fas fa-cancel"></i> <i class="fas fa-minus"></i> </button>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  props: ["product"],
  data(){
    return{
      productCategory : this.product.category,
      selectedProduct : this.product,
      isBuy : true,
      productPiece : 0,
    }
  },
  methods : {
    changeBuy(){
      this.isBuy = !this.isBuy
    },
    pieceIncrement(){
      this.productPiece += 1;
    },
    pieceDecrement(){
      if(this.productPiece == 0){
        this.productPiece = 0;
      }else{
        this.productPiece -= 1;
      }
    }
  }
};
</script>

<style scoped>
  .bg{
    background-color: rgba(128,128, 128, 0.2);
  }
</style>