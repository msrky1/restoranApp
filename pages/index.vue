<template>

    <main class="my-8   min-[1024px]:hidden bg-[url('/genis.jpg')]  bg-center  bg-contain">
        <div class="container mx-auto px-6">



            <div class="mt-12">
                <div class=" py-2">
                    <h3 class="text-white text-2xl 
                 font-black">Kategoriler </h3>
                </div>
            </div>
            <div v-if="pending" class=" grid grid-cols-2  gap-4  ">


                <div v-for="k in 20" class=" shadow h-40 justify-center items-center">
                    <div class="animate-pulse flex space-x-4 text-white cursor-pointer border-2 rounded-b-lg ">

                        <div class="flex-1 h-40 space-y-6 py-1">
                            <div class=" h-24 bg-slate-700 rounded "></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-3 gap-4  bg-center">
                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- {{ k }} -->
                </div>




            </div>
            <div v-else class=" grid grid-cols-2  gap-1 ">

                <Data v-for="(cat, key) in category" :key="key" :category="cat" />

                <!-- <div class="justify-center items-center" v-for="m in category">
                    <div class="text-white cursor-pointer  rounded-b-lg  ">

                        <NuxtLink :to="'/category/' + m.id"> <img class="w-[400px]"
                                :src="api + 'storage/category/' + m.image"></NuxtLink>


                     
                        <div class="">
                            <div class=" text-center text-lg  
                            shadow-2xl
                            
                            ">
                                <h1 class=" font-bold  text-[#BC945B] "> {{ m.name }}</h1>
                            </div>

                        </div>
                    </div>




                </div> -->

                
                <div v-for="ice in data" class=" mb-10 text-white overflow-hidden" ref="isShowPhoto">
                    <NuxtLink :to="'/Icecream/' + ice.id">
                        <img :src="`${api}storage/icecream/kapak/${ice.kapak}`">

                    

                    </NuxtLink>

                    <!-- <NuxtLink :to="'/category/'">
                        <div class="text-center font-bold  text-[#BC945B]"> {{ category.name }}</div>
                    </NuxtLink> -->



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

const { data } = await useFetch(api + 'api/icecream');


// const data = onMounted(() => {


//     // axios.get(api + 'api/menu').then((response) => {

//     //     menus.value = response.data;

//     // });

//     axios.get(api + 'api/category').then((response) => {

//         category.value = response.data;

//     });
// })
</script>

<style scoped></style>