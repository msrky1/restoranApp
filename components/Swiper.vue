<template>
  <div class="w-full   cursor-pointer bg-black">


    <Carousel class=" min-[1000px]:hidden" v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="slide in category" :key="slide">
        <div class="carousel__item ">
          <div>
            <!-- <h6 class="text-xs">{{ slide.name }}</h6> -->

            <NuxtImg class="w-[1200px] h-[200px]" :src="api + 'storage/vitrin/' + slide.image" />


          </div>

          <div class="absolute left-4 mb-12  w-32 grid grid-cols-1 ">
            <div>


              <!-- <h2 class="text-lg font-bold  space-y-4">{{ slide.title }}
              </h2> -->
          
          
                  <p class="font-black">{{ slide.title }}</p>
     

            </div>
            <NuxtLink :to="'/Category/' + slide.link">
              <button
                class=" absolute right-2 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span
                  class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Detaylar
                </span>
              </button>
            </NuxtLink>
            <div>

            </div>

          </div>


        </div>
      </Slide>
      <template #addons>

        <!-- <Pagination class="bg-[#BC945B]" /> -->
      </template>
    </Carousel>

  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Axios from 'axios';
// import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Breakpoints',

  data() {
    return {
      category: [],
      settings: {
        itemsToShow: 4,
        snapAlign: 'center',
        autoplay: 2000,
        transition: 2000,
        pauseAutoplayOnHover: true,
      },

      breakpoints: {
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
          itemsToShow: 1,
          snapAlign: 'start',
        },
      },
    };
  },

  // Mounted hook'u içinde API isteği yapın
  mounted() {
    Axios.get(api + 'api/vitrin')
      .then(response => {
        // API'den gelen verileri kategoriye atayın
        this.category = response.data;
      })
      .catch(error => {
        console.error('Error fetching category:', error);
      });
  },
});
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
