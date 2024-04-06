<script setup>

import { api } from '~/composables/api';



const { data } = useFetch(api + 'api/category');


</script>

<template>



  <div class=" min-[450px]:hidden max-sm:w-[340px]">


    <Swiper :slides-per-view="4" :space-between="8">
      <SwiperSlide v-for="data in data" :key="data.id">
        <div class="h-28 bg-[#BC945B]
         w-36 rounded-lg items-center justify-center 
         text-sm flex cursor-pointer text-white">
          <div class="text-center  rounded-lg">
          
             <NuxtLink :to="'/category/' + data.id">
              {{ data.name }}
             </NuxtLink>
       
   

       
        

          </div>


        </div>
      </SwiperSlide>
    </Swiper>

  

  </div>
  <div class=" max-sm:hidden">


    <Swiper :slides-per-view="8" :space-between="8">
      <SwiperSlide v-for="data in data" :key="data.id">
        <div class="h-28 bg-[#BC945B]
   w-36 rounded-lg items-center justify-center 
   text-sm flex cursor-pointer text-white">
          <div class="text-center  rounded-lg">
            {{ data.name }}

          </div>


        </div>
      </SwiperSlide>
    </Swiper>



  </div>
</template>

<style>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}

.swiper-cards {
  width: 240px;
  height: 240px;
}

.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>
