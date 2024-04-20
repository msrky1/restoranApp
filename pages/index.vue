<template>

    <main class="my-8    bg-black min-[1024px]:hidden">
        <div class="container mx-auto px-6">



            <div class="mt-12">
                <div class=" py-2">
                    <h3 class="text-white text-2xl 
                 font-medium">Kategoriler </h3>
                </div>
            </div>
            <div v-if="pending" class=" grid grid-cols-2  gap-4  ">


                <div v-for="k in 20" class=" shadow h-40 justify-center items-center">
                    <div class="animate-pulse flex space-x-4 text-white cursor-pointer border-2 rounded-b-lg border-[#BC945B]">
                       
                        <div class="flex-1 h-40 space-y-6 py-1">
                            <div class=" h-24 bg-slate-700 rounded "></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-3 gap-4  bg-center">
                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                   
                                </div>
                             
                            </div>
                        </div>
                    </div>
                    {{ k }}
                </div>
           



            </div>
            <div v-else class=" grid grid-cols-2  gap-1 ">



                <div class="justify-center items-center" v-for="m in category">
                    <div class="text-white cursor-pointer border-4 rounded-b-lg border-[#BC945B] ">

                        <NuxtLink :to="'/category/' + m.id"> <img class="w-[400px]"
                                :src="api + 'storage/category/' + m.image"></NuxtLink>


                        <!-- <div class="bg-[#BC945B] text-center ">
                            <h2 class="font-bold">{{ m.price }}₺</h2>
                        </div> -->
                        <div class="">
                            <div class="bg-[#BC945B] text-center text-lg  
                            shadow-2xl
                            
                            ">
                                <h1 class=" font-bold"> {{ m.name }}</h1>
                            </div>

                        </div>
                    </div>




                </div>


            </div>


        </div>



    </main>
</template>



<script setup lang="ts">
import axios from 'axios';


// const menus = ref([]);
// const category = ref([]);


const { pending, data: category } = useFetch(api + 'api/category', {
    lazy: true
})

console.log('data:' + category);

// const data = onMounted(() => {


//     // axios.get(api + 'api/menu').then((response) => {

//     //     menus.value = response.data;

//     // });

//     axios.get(api + 'api/category').then((response) => {

//         category.value = response.data;

//     });
// })
</script>