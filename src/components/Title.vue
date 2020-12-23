<template>
    <div class="row">
        <div class="col-md-3">
            <h1>{{title}}</h1>
        </div>
        <div class="col-md-6">
            <SearchBar></SearchBar>
        </div>
        <div class="col-md-3">
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