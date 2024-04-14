<template>
  <div class="h-screen items center justify-center flex  bg-[#BC945B] mt-12 ">

    <div class="bg-black text-white max-sm:w-[400px] h-[400px]">
      <div class="text-center mt-2 text-white">
        {{ images}}
     
          <Carousel v-bind="settings" :breakpoints="breakpoints">
            <Slide v-for="slide in images" :key="slide">
              <div class="carousel__item ">
                <div>


                  <NuxtImg class="w-[50px]" sizes="100vw sm:50vw md:400px" :src="api + 'storage/images/tmp/'
                    + slide.path + '/' + slide.image" lazy-load />


                </div>



              </div>
            </Slide>
            <template class="bg-white" #addons>
              <Navigation />
            </template>
          </Carousel>
      

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


const settings = {
      itemsToShow: 4,
      snapAlign: 'center',
    };

    const breakpoints = {
      300: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      400: {
        itemsToShow: 2,
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
    }

const { data } = await useFetch(url)


const menu = ref();
const images = ref([]);
// menu.value = data.value.menu;
// images.value = data.value.menuImage;


</script>


<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border-radius: 25%;
  background-color: wheat;
  border: 5px solid white;
}

.router-link-active {


  border: 2;
  border-color: green;
}

.router-link-exact-active {
  border: 2;
  border-color: green;
}
</style>
