<template>
    <div>
        <!-- <p class="font-bold">{{ product.title }}</p>
       <hr>
        <p>Price:  CAD${{ product.price }}</p>
        <p> Product id:{{ product.id }}</p>
        <img :src="product.image" alt="product thumb" class="thumb"> -->


        <ProductDtails :product="product"/>

    </div>
</template>

<script setup>
const {id } = useRoute().params;
const uri ='https://fakestoreapi.com/products/' +id

//fetch the product

const { data:product} = await useFetch(uri,{key:id})


definePageMeta({
    layout:'products'
    
})


</script>


<style scoped>

.thumb{
    max-height:200px;
    max-width:70%;
    /* margin: 0 auto; */
    padding: 20px;
    border: solid 1px gray;


}

</style>