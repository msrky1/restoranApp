<template>

    <main class="my-8   bg-[url('/genis.jpg')]  bg-center  bg-contain ">
        <div class="container mx-auto px-6">



            <div class="mt-12">
                <div class=" py-2">
                    <h3 v-for="category in category" class="text-white text-2xl 
                 font-black">

                        {{ category.name }}

                    </h3>
                </div>
            </div>

            <div class=" grid grid-cols-2  gap-1">


                <div v-if="CategoryMenu"
                    class="justify-center items-center flex max-sm:hover:border-2 transition-all ease-in rounded-lg"
                    v-for="m in CategoryMenu">
                    <div class="text-white cursor-pointer">

                        <NuxtLink :to="'/menu/detail/' + m.id"> <NuxtImg   sizes="100vw sm:30vw md:400px"

                                :src="api + 'storage/menu/' + m.image"/></NuxtLink>
                        <div class=" text-[#BC945B] text-center ">
                            <h1 class="font-bold"> {{ m.title }}</h1>
                        </div>
                        <div class=" text-center text-[#BC945B] ">
                            <h2 class="font-bold">{{ m.price }}₺</h2>
                        </div>
                    </div>




                </div>



            </div>

            <div class="fixed cursor-pointer bottom-12 rounded-full  right-4  z-90">
                <div @click="backPage()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em"
                        viewBox="0 0 24 24">
                        <g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path stroke-dasharray="14" stroke-dashoffset="14" d="M19 12H5.5">
                                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="14;0" />
                            </path>
                            <path stroke-dasharray="8" stroke-dashoffset="8" d="M5 12L10 17M5 12L10 7">
                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s"
                                    values="8;0" />
                            </path>
                        </g>
                    </svg>
                </div>

            </div>
        </div>



    </main>

</template>

<script setup>



const route = useRoute()

let url = api + 'api/category/detail/' + route.params.slug;

const CategoryMenu = ref();
const category = ref();
const { data } = await useFetch(url)


CategoryMenu.value = data.value.CategoryMenu;

category.value = data.value.Category;
const router = useRouter();

const backPage = (() => {

    router.go(-1)

})


</script>