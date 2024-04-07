<template>
  <div class="h-[600px]   bg-[#BC945B] mt-12 " >

   
    <Swiper :slides-per-view="1" :space-between="2">
      <SwiperSlide>
            <NuxtImg :src="api + 'storage/menu/' +
              menu.image" lazy-load/>
   
           </SwiperSlide>
      <SwiperSlide v-for="data in images" :key="data.id">
        <div class=" ">
          <div class="text-center  rounded-lg">
          
            
             <NuxtImg :src="api + 'storage/images/tmp/' 
             + data.path + '/' + data.image" lazy-load/>
   
           
              
        

          </div>


        </div>
      </SwiperSlide>
     
    </Swiper>
    <div class="text-center mt-2 text-white">
              
       <h1 class="font-bold text-2xl">{{ menu.title }}</h1>
       <h2 class="font-bold text-2xl">{{ menu.price }}₺</h2>
       <p >{{ menu.body }}</p>
        
    </div>
  </div>
 
</template>


<script setup lang="ts">

definePageMeta({
  layout: 'custom'
})
const route = useRoute();


let url = api + 'api/menu/detail/' + route.params.id;




const { data } = await useFetch(url)


const menu = ref();
const images = ref([]);
menu.value = data.value.menu;
images.value = data.value.menuImage;


</script>