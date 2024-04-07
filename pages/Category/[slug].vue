<template>



<main class="my-8  bg-black ">
        <div class="container mx-auto px-6">



            <div class="mt-12">
                <div class=" py-2">
                    <h3 v-for="category in category" class="text-white text-2xl 
                 font-medium"> 
                  
                    {{ category.name }}
                
                </h3>
                </div>
            </div>

            <div class=" grid grid-cols-2  gap-1">


                <div v-if="CategoryMenu" class="justify-center items-center flex max-sm:hover:border-2 transition-all ease-in rounded-lg"
                    v-for="m in CategoryMenu">
                    <div class="text-white cursor-pointer">

                      <NuxtLink :to = "'/menu/detail/' + m.id">  <img class="w-[400px]" :src="api + 'storage/menu/' + m.image"></NuxtLink>
                        <div class="bg-[#BC945B] text-center ">
                            <h1 class="font-bold"> {{ m.title }}</h1>
                        </div>
                        <div class="bg-[#BC945B] text-center ">
                            <h2 class="font-bold">{{ m.price }}₺</h2>
                        </div>
                    </div>




                </div>
              
                

            </div>


        </div>



    </main>

</template>

<script setup >



const route = useRoute()

let url = api + 'api/category/detail/' + route.params.slug;

const CategoryMenu = ref();
const category = ref();
const { data } = await useFetch(url)


CategoryMenu.value = data.value.CategoryMenu;

category.value = data.value.Category;


</script>