<template>
<div class="input-group mt-3">
    <input
        v-model="searchBarInput" 
        class="form-control col-md-9" 
        type="text" 
        placeholder="Search All">
    <button 
        @click="sendSearchInput"
        :value="searchBarInput"
        class="form-control btn btn-primary col-md-3">
            <i class="fas fa-search"></i> Search
    </button>
</div>
    
</template>

<script>
import { eventBus } from "../main";

export default{
    data :  function(){
        return{
            searchBarInput : ""
        }
    },
    methods : {
        sendSearchInput(e){
            eventBus.$emit("searchBarInput", this.searchBarInput)
        }
    }
}
</script>

<style>

</style>