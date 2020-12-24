<template>
    <div class="col-md-3">
        <h2>All Categories</h2>
        <ul class="list-group">
            <li 
                @click="selectedCategory"
                class="list-group-item" 
                v-for="category in categories" 
                :key="category">
                {{category}}
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