<template>
  <div class="col-md-9">
    <h2>{{ productTitle }}</h2>
      <div class="card-list">
        <Product
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
        { id: 1, category:"TV", name: "LG 55", price: 7000 },
        { id: 2, category:"Laptop", name: "Macbook Air 2020", price: 7000 },
        { id: 3, category:"Laptop", name: "Lenovo P330", price: 9000 },
        { id: 4, category:"TV", name: "Samsung Curved", price: 4000 },
        { id: 5, category:"Phone", name: "iPhone XS", price: 16000 },
        { id: 6, category:"Phone", name: "Samsung S20", price: 12000 },
      ],
    };
  },
};
</script>