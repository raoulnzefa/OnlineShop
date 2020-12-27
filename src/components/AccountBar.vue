<template>
    <div class="mt-3 ml-5 navbar">
        <MyCart></MyCart>
        <h4><a class="nav-item lg" href="#"><i class="fas fa-user-circle"></i>Account</a></h4>
    </div>
</template>

<script>
import MyCart from "./MyCart.vue"
export default {
    components : {
        MyCart : MyCart
    }
}
</script>

<style>
    a{
        color:black;
    }
    a:hover{
        color : white;
        text-decoration: none;
    }
</style>