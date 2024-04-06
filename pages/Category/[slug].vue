<template>



<main class="my-8  bg-black ">
        <div class="container mx-auto px-6">



            <div class="mt-12">
                <div class=" py-2">
                    <h3 class="text-white text-2xl 
                 font-medium"> {{  category }} </h3>
                </div>
            </div>

            <div class=" grid grid-cols-2  gap-1">


                 <div class="bg-red-900">
 
                     {{ }}

                 </div>
              
                

            </div>


        </div>



    </main>

</template>

<script setup lang="ts">



const route = useRoute()

const { data: category } = await useFetch(api + 'api/category/detail/' + route.params.id)


console.log(category);
 


</script>