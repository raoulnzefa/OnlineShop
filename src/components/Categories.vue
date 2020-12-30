<template>
    <div class="col-md-3">
        <h2>All Categories</h2>
        <ul class="list-group">
            <router-link to="/products" tag="li"
                @click="selectedCategory"
                class="list-group-item" 
                v-for="category in categories" 
                :key="category">
                <a>{{category}}</a>
            </router-link>
        </ul>
        <hr>
        <ul class="list-group">
            <router-link tag="li" to="/addProduct" class="list-group-item">
                Ürün Ekle
            </router-link>
        </ul>
    </div>
</template>

<script>

export default {
    data : () => {
        return{
            categories : ["TV", "Phone", "Laptop"],
            selectedCategoryName : ""
        }
    },
    methods : {
        selectedCategory(e){
            console.log();
        }
    }

}
</script>

<style scoped>
    ul li{
        background-color: rgba(128,128, 128, 0.0);
    }
    ul li:hover{
        background-color: rgba(233, 233, 233, 0.2);;
    }

    a{
        color: rgb(253, 253, 253);
        font-size: 1.5rem;
    }
    a:hover{
        text-decoration: none;
    }
</style>