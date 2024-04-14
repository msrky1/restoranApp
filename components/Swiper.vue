<template>
  <div class="w-[1200px] max-sm:w-[350px]  cursor-pointer">

    <Carousel v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="slide in category" :key="slide">
        <div class="carousel__item ">
          <div class="">
            <NuxtLink :to="'/category/' + slide.id">
              <NuxtImg class=" max-sm:w-[600px]" :src="api + 'storage/category/' + slide.image" />
            </NuxtLink>
            <div class="z-90">
              {{ slide.name }}
            </div>
          </div>



        </div>
      </Slide>
      <template class="bg-white" #addons>
        <Navigation />
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
      },
      breakpoints: {
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
      },
    };
  },

  // Mounted hook'u içinde API isteği yapın
  mounted() {
    Axios.get(api + 'api/category')
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
