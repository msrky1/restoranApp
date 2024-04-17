<template>

  <div class=" h-screen">
    <Carousel v-bind="settings" :breakpoints="breakpoints">
      <!-- <Slide v-for="m in menu" :key="m">
        <div class="carousel__item ">
        
          <div>
          
            <NuxtImg class="" :src="api +
              'storage/menu/' + menu.image" />

         </div>
        </div>
      </Slide> -->
      <Slide v-for="slide in images" :key="slide">
        <div class="carousel__item ">
          <div>
            <!-- <h6 class="text-xs">{{ slide.name }}</h6> -->
            <NuxtImg class="" :src="api +
              'storage/images/tmp/' + slide.path + '/' + slide.image" />

         </div>
        </div>
      </Slide>
     
      
   

      <template class="bg-white" #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>


  <div class="bg-[#BC945B] w-full rounded-lg fixed h-3/5 bottom-0">

    <div class="text-black text-center mt-2">

      <h1 class="text-2xl font-bold text-white"> {{ menu.title }}</h1>
      <p class=" text-white">{{ menu.body }}</p>
      <h1 class="text-2xl   font-bold text-white"> {{ menu.price }}₺</h1>
    </div>

  </div>

</template>


<script setup>
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

const menu = ref([]);
const images = ref([]);

const { data } = await useFetch(api + 'api/menu/detail/' + route.params.id);

menu.value = data.value.menu;
images.value = data.value.menuImage;


const combinedData = [menu, images];




</script>