<template>

    <div >
        <header class="container mx-auto p-4 flex justify-between border-t-2 bg-rose-100">
            <nav class="container  mx-auoto p-4 flex justify-between" >
                <NuxtLink to="/" class="font-bold"> <Icon name="flat-color-icons:advertising" color="green" size="75px" /></NuxtLink>
                <P>Sale 15% </P>
                
            </nav>
        </header>
        <!-- output the page content -->
        <div class="container mx-auto p-4">
            <slot/>
        </div>
       

    </div>
</template>

<script setup >

</script>

<style scoped>
.router-link-exact-active{
    color: #12b488;
}

</style>