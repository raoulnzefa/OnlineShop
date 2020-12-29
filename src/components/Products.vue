<template>
  <div class="col-md-9">
    <h2>{{ defaultTitle }}</h2>
    <div class="row">
      <Product
        v-for="product in filtered"
        :key="product.id"
        :product="product"
      ></Product>
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";
import { eventBus } from "../main";

export default {
  components: { Product },
  data: () => {
    return {
      defaultTitle : "Products",
      productTitle: "/*",
      products: [
        { id: 1, category: "TV", name: "LG 55", price: 7000 },
        { id: 2, category: "Laptop", name: "Macbook Air 2020", price: 7000 },
        { id: 3, category: "Laptop", name: "Lenovo P330", price: 9000 },
        { id: 4, category: "TV", name: "Samsung Curved", price: 4000 },
        { id: 5, category: "Phone", name: "iPhone XS", price: 16000 },
        { id: 6, category: "Phone", name: "Samsung S20", price: 12000 },
        { id: 7, category: "Phone", name: "iPhone 7", price: 6000 },
        { id: 8, category: "Phone", name: "Samsung S9", price: 9000 },
        { id: 9, category: "Phone", name: "iPhone 12", price: 13000 },
        { id: 10, category: "Phone", name: "Samsung Star", price: 2000 },
        { id: 11, category: "TV", name: "Samsung Led", price: 9000 },
        { id: 12, category: "TV", name: "Toshiba 42K", price: 10000 },
        { id: 13, category: "TV", name: "Acer 77K", price: 12000 },
        { id: 14, category: "TV", name: "Samsung Curved 55", price: 8000 },
        { id: 15, category: "Laptop", name: "Macbook Pro 2016", price: 5000 },
        { id: 16, category: "Laptop", name: "Lenovo V330", price: 9000 },
        { id: 17, category: "Laptop", name: "Macbook Pro M1 2021", price: 17000 },
        { id: 18, category: "Laptop", name: "Lenovo Thinkpad", price: 19000 },
      ],
    };
  },
  computed : {
    filtered(){
      return this.products.filter((element) => {
        return element.name.match(this.productTitle);
      })
    }
  },
  created(){
    eventBus.$on("searchBarInput" , (data) => {
      this.productTitle = data;
      this.defaultTitle = data;
    })
  }
};
</script>