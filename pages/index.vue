<template>
    <!-- <Checkout /> -->
    <main class="my-8  bg-black ">
        <div class="container mx-auto px-6">

             

            <div class="mt-12">
                <div class=" py-2">
                    <h3 class="text-white text-2xl 
                 font-medium">En Çok Görüntülenenler </h3>
                </div>
            </div>

            <MenuCategory/>
        </div>



    </main>
</template>



<script setup>
import { api } from '~/composables/api';



const { data } = useFetch(api + 'api/menu');
console.log(data);


</script>