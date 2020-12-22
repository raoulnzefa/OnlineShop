<template>
    <div class="container">
        <h2>Categories</h2>
        <ul class="list-group">
            <li 
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
            categories : ["Araba", "Ev", "Televizyon","Beyaz Eşya"]
        }
    }
}
</script>