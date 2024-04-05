<script setup>
import { api } from '~/composables/api';



const { data } = useFetch(api + 'api/menu');
console.log(data);

</script>

<template>
  <div class="grid  grid-flow-col gap-4 
          flex-row-reverse space-x-4 space-x-reverse ... overflow-x-auto 
        
  ">

    <div v-for="cat in data" :key="cat.id" style="background-color: #BC945B;" class="w-28 h-24
    
    md:mx-4 rounded-md
      bg-cover  
      bg-center md:mt-0 cursor-pointer
      hover:w-36 hover:h-28 duration-200 ease-in
      ">
      <div class="justify-center  
      flex items-center h-full">
        <div>
          <span class="text-white">{{ cat.name }}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-red-900">

    <Swiper :slides-per-view="8" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
   
      <SwiperSlide><div  style="background-color: #BC945B;" class=" h-32 w-32
         rounded-lg items-center justify-center  text-lg flex
         text-white">
         <p>asdad</p>
      </div></SwiperSlide>
     


    </swiper>
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
