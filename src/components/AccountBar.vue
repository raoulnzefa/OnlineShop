<template>
    <div class="mt-3 ml-5 navbar">
        <router-link tag="h4" to="/mycart">
            <a><i class="fas fa-shopping-cart"></i></a>
        </router-link>
        <router-link tag="h4" to="/myaccount">
            <a class="nav-item lg"><i class="fas fa-user-circle"></i>Account</a>
        </router-link>
    </div>
</template>

<script>
export default {
    
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