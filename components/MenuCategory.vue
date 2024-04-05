<script setup>
import { api } from '~/composables/api';



const { data } = useFetch(api + 'api/category');


</script>

<template>

  

  <div class="w-[1200px] ">

    <Swiper :slides-per-view="8" :space-between="10" @swiper="onSwiper" @slideChange="onSlideChange">
    <SwiperSlide v-for="data in data" :key="data.id">
        <div style="background-color: #BC945B; " class="h-28
         w-36 rounded-lg items-center justify-center opacity-70
         text-sm flex cursor-pointer text-white">
            <div class="text-center "><h6>{{ data.name }}</h6></div> 
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
