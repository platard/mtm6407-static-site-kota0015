<template>
    <div class="card text-center
     ">
        <img :src="product.image" alt="product thumb" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate"> {{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`"> 
            <p class="btn my-4">Details</p>
        </NuxtLink>
       

    </div>
</template>

<script setup >
const {product} =defineProps (['product'])

</script>

<style scoped> 

.thumb{
    height:120px;
    max-width:70%;
    margin: 0 auto;


}
.btn{
    background-color: rgb(115, 124, 115);
    width: 30%;
    border-radius: 20px;
    margin: 0 auto;
    color:white;
}
</style>