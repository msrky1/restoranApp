<template>
  <div class="h-screen items center justify-center flex  bg-[#BC945B] mt-12 ">

    <div class="bg-black text-white max-sm:w-[400px] h-[400px]">
      <div class="text-center mt-2 text-white">
        <div class="flex">
          <!-- <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]" 
          :slides-per-view="1" :loop="true"
            :effect="'creative'" :autoplay="{
              delay: 8000,
             
              disableOnInteraction: true,
            }" :creative-effect="{
              prev: {
                shadow: false,
                translate: ['-20%', 0, -1],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }">
            <SwiperSlide  v-for="data in images">
              <div>
                <NuxtImg sizes="100vw sm:50vw md:400px" :src="api + 'storage/images/tmp/'
                  + data.path + '/' + data.image" lazy />
              </div>
            </SwiperSlide>
          </Swiper> -->
       
       <!-- <Swiper/> -->
        </div>

        <!-- <h1 class="font-bold text-2xl">{{ menu.title }}</h1>
        <h2 class="font-bold text-2xl">{{ menu.price }}₺</h2>
        <p>{{ menu.body }}</p> -->

      </div>
    </div>

    <!-- <Swiper :slides-per-view="1" :space-between="2">
      <SwiperSlide>
            <NuxtImg :src="api + 'storage/menu/' +
              menu.image" lazy-load/>
   
           </SwiperSlide>
      <SwiperSlide v-for="data in images" :key="data.id">
        <div class=" ">
          <div class="text-center  rounded-lg">
          
            
             <NuxtImg  class="w-[50px]"  sizes="100vw sm:50vw md:400px" :src="api + 'storage/images/tmp/' 
             + data.path + '/' + data.image" lazy-load/>
   
           
              
        

          </div>


        </div>
      </SwiperSlide>
     
    </Swiper> -->

  </div>

</template>


<script setup lang="ts">


const route = useRoute();


let url = api + 'api/menu/detail/' + route.params.id;




const { data } = await useFetch(url)


const menu = ref();
const images = ref([]);
// menu.value = data.value.menu;
// images.value = data.value.menuImage;


</script>