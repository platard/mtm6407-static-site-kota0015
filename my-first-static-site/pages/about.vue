<template>
    <div>
   
        <h2 class=" font-bold text-4xl ">Bassel Kotaish</h2>
        <h3 class=" font-bold text-2xl pb-6 pt-4">Style & collection</h3>
        <p>My style collection is a reflection of you—your tastes, preferences, and what makes you feel confident and comfortable. What items are in your collection? Are there specific pieces you cherish or that hold sentimental value? Maybe there's a focus on certain colors, textures, or brands that resonate with you. Understanding what you've gathered can reveal a lot about your fashion sense and the story you're telling through your clothing and accessories. What inspired you to start your collection?

</p>
<div> {{ data }}

</div>

    </div>
</template>

<script setup >
const {data} = await useFetch ('/api/currency/GBP')

</script>

<style scoped>


</style>