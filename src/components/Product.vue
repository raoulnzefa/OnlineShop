<template>
  <div class="card text-white bg-primary mr-3" >
    <img class="card-img-top" src="../img/macbook.png">
    <div class="card-body">
      <p class="card-title">{{ product.name }}</p>
      <p class="card-text">
        <strong>
            Price: {{ product.price }}€
        </strong>
      </p>
      
    </div>
    <button class="btn btn-success">Buy</button>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>