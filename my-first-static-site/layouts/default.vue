<template>

    <div>
        <header class="container mx-auto p-4 border-t-2 bg-indigo-50 ">
           
                <nav class="container  mx-auoto  flex justify-between ">
                <NuxtLink to="/" >  <Icon name="dashicons:admin-home" color="green" size="50px" /></NuxtLink>
              
                <ul class="flex justify-end  gap-4  container ul-cust">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                </ul>
            </nav>

           
            
        </header>
        <!-- output the page content -->
        <div class="container mx-auto p-4">
            <slot/>
        </div>

        <footer class="container mx-auto 
         p-4 flex justify-center border-t-2 ">
<div class="flex gap-20 ">
   
        <p class="text-center ">Copyright Cyrameart&#169 2023 </p>

    
    
    <div  class="ul-footer ">
        <ul class="flex   gap-4 text-white">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
    </ul>

    </div>
   
    

</div>

</footer>

        

    </div>
</template>

<script setup >

</script>

<style scoped>
.router-link-exact-active{
    color: #12b488;
}
.this{ border:solid green 2px}
.ul-cust{
    width: 50%;
}
footer{color:rgb(19, 18, 18)}
.ul-footer{
  
   
}
footer p{
  width: 100%;

}
li{color:black}

</style>