<template>
  <div class="card text-white bg-primary mb-3" style="width: 16rem">
    <img style="width: 100%" class="card-img-top" src="../img/macbook.png">
    <div class="card-body">
      <p class="card-title">{{ product.name }}</p>
      <p class="card-text">
        <strong>
            Price: {{ product.price }}€
        </strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>