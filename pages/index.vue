<template>

    <main class="my-8  max-lg:hidden  bg-black min-[1024px]:hidden">
        <div class="container mx-auto px-6">



            <div class="mt-12">
                <div class=" py-2">
                    <h3 class="text-white text-2xl 
                 font-medium">Kategoriler </h3>
                </div>
            </div>

            <div class=" grid grid-cols-2  gap-1 ">



                <div v-if="category" class="justify-center items-center  rounded-lg" v-for="m in category">
                    <div class="text-white cursor-pointer border-4 border-[#BC945B] ">

                        <NuxtLink :to="'/category/' + m.id"> <img class="w-[400px]"
                                :src="api + 'storage/category/' + m.image"></NuxtLink>
               

                        <!-- <div class="bg-[#BC945B] text-center ">
                            <h2 class="font-bold">{{ m.price }}₺</h2>
                        </div> -->
                        <div class="">
                            <div class="bg-[#BC945B] text-center text-lg ">
                                <h1 class=" font-bold"> {{ m.name }}</h1>
                            </div>

                        </div>
                    </div>




                </div>
                <div v-else> Henüz Yok </div>

            </div>


        </div>



    </main>
</template>



<script setup>
import axios from 'axios';


// const menus = ref([]);
const category = ref([]);


const data = onMounted(() => {


    // axios.get(api + 'api/menu').then((response) => {

    //     menus.value = response.data;

    // });

    axios.get(api + 'api/category').then((response) => {

        category.value = response.data;

    });
})
</script>