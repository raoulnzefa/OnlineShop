<template>
    <div class="list-group-item">
        <h2>{{product.name}}</h2>
        <strong>{{product.price}}</strong>
    </div>
</template>

<script>
export default{
    props : ["product"]
}
</script>
