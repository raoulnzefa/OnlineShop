<template>
    <div class="col-md-3">
        <h2>All Categories</h2>
        <ul class="list-group">
            <li 
                @click="selectedCategory"
                class="list-group-item" 
                v-for="category in categories" 
                :key="category">
                <a href="#">{{category}}</a>
            </li>
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

<style>
    a{
        color: grey;
        font-size: 1.5rem;
    }
    a:hover{
        text-decoration: none;
    }
</style>