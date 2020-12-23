<template>
  <div>
    <h2>{{ productTitle }}</h2>
    <div class="card-group">
      <Product
        class="card-columns"
        v-for="product in products"
        :key="product.id"
        :product="product"
      ></Product>
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  components: { Product },
  data: () => {
    return {
      productTitle: "Products",
      products: [
        { id: 1, name: "Macbook Pro 16", price: 15000 },
        { id: 2, name: "Macbook Air 2020", price: 5000 },
        { id: 3, name: "Lenovo P330", price: 9000 },
        { id: 4, name: "Acer Nirvana", price: 4000 },
        { id: 5, name: "Msi X81A", price: 12000 },
      ],
    };
  },
};
</script>