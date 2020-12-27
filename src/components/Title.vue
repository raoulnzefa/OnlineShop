<template>
    <div class="row mb-4 navbar">
        <div class="col-md-3 mt-1 nav-brand">
            <h1>{{title}}</h1>
        </div>
        <div class="col-md-6 nav-item">
            <SearchBar></SearchBar>
        </div>
        <div class="col-md-3 nav-item">
            <AccountBar></AccountBar>
        </div>
    </div>
</template>
<script>
import SearchBar from "./SearchBar.vue"
import AccountBar from "./AccountBar.vue"

export default {
    data : () => {
        return{
            title : "Gittigidiyor"
        }
    },
    components : {SearchBar, AccountBar}
}
</script>