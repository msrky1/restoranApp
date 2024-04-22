<template>

  <div class=" h-screen ">
    <div  class="justify-center flex items-center mt-12">
      <NuxtImg width="250" class="  " :src="api +
        'storage/menu/' + menu.image" />

    </div>
    <div class="z-90">
      <Carousel v-bind="settings" :breakpoints="breakpoints">

        <Slide v-for="slide in images" :key="slide">
          <div class="carousel__item ">
            <div>

              <NuxtImg class="" :src="api +
                'storage/images/tmp/' + slide.path + '/' + slide.image" />

            </div>
          </div>
        </Slide>




        <!-- <template class="bg-white" #addons>
          <Pagination />
        </template> -->
      </Carousel>
    </div>






  </div>
  <!-- <div class=" h-screen top-0  w-full bg-white">
    <Crousel class="top-0"/>
    </div> -->


  <div class="bg-[#BC945B] w-full rounded-lg fixed h-3/5 bottom-0">
    <div class="fixed bottom-0 right-4  z-90">
      <div @click="backPage()">
        <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em"  class="hover:w-24 transition-all ease-in duration-100"
        viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round"
         stroke-width="2"><path stroke-dasharray="14" stroke-dashoffset="14" d="M19 12H5.5"><animate fill="freeze"
           attributeName="stroke-dashoffset" dur="0.3s" values="14;0"/></path><path stroke-dasharray="8"
            stroke-dashoffset="8" d="M5 12L10 17M5 12L10 7"><animate fill="freeze" 
          attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="8;0"/></path></g></svg>
      </div>

    </div>
    <div class="text-black text-center mt-2">

      <h1 class="text-2xl font-bold text-white"> {{ menu.title }}</h1>
      <p class=" text-white">{{ menu.body }}</p>
      <h1 class="text-2xl   font-bold text-white"> {{ menu.price }}₺</h1>
    </div>

  </div>

</template>


<script setup>
import { Icon } from '#components'
const icon = ref('uil:github')

const MyIcon = h(Icon, { name: 'uil-twitter' })
definePageMeta({
  layout: 'custom'
})

const settings = {
  itemsToShow: 1,
  snapAlign: 'center',
};

const breakpoints = {
  300: {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  400: {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  700: {
    itemsToShow: 8,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 5,
    snapAlign: 'start',
  },
};

const route = useRoute();
const router = useRouter();
const menu = ref([]);
const images = ref([]);

const { data } = await useFetch(api + 'api/menu/detail/' + route.params.id);

menu.value = data.value.menu;
images.value = data.value.menuImage;


const combinedData = [menu, images];

const backPage = (() => {

  router.go(-1)

})



</script>