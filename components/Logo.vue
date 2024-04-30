<template>
  <div class="flex items-center justify-center  bg-white min-[1024px]:hidden">
    <div class="hidden w-full text-white md:flex md:items-center">
      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M16.2721 10.2721C16.2721 12.4813 14.4813 
                    14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
          fill="currentColor" />
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
          fill="currentColor" />
      </svg>
      <span class="mx-1 text-sm text-white">Tatlı Park Menu</span>
    </div>
    <div class="flex justify-start items-center ">


      <div>
        <NuxtLink to="/">
          <NuxtImg src="/logo.png" width="400px"> </NuxtImg>
        </NuxtLink>
      </div>

      <div class="ml-14">
        <div>
          <div v-if="searchText" @click="filteredMenu" class=" cursor-pointer absolute ml-[150px] mt-1  "><svg xmlns="http://www.w3.org/2000/svg" width="4em" height="2em"
              viewBox="0 0 24 24">
              <g fill="none" stroke="white" stroke-linecap="round" stroke-width="2">
                <path stroke-dasharray="16" stroke-dashoffset="16" d="M10.5 13.5L3 21">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0" />
                </path>
                <path stroke-dasharray="40" stroke-dashoffset="40"
                  d="M10.7574 13.2426C8.41421 10.8995 8.41421 7.10051 10.7574 4.75736C13.1005 2.41421 16.8995 2.41421 19.2426 4.75736C21.5858 7.10051 21.5858 10.8995 19.2426 13.2426C16.8995 15.5858 13.1005 15.5858 10.7574 13.2426Z">
                  <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="40;0" />
                </path>
              </g>
            </svg></div>

          <input v-model="searchText" type="text" id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Menüde Arayın.." required />
          <Transition name="fade">
            <div v-if="searchText" class="bg-white absolute mt-2 z-40 w-[200px]  rounded-lg">
              <div class=" overflow-x-auto scroll-m-0 ">
                <div class="flex border-2 justify-center text-center" v-for="menu in filteredMenu" :key="menu.id">
                  <div class="text-center flex  items-center ">{{ menu.title }}</div>
                  <div>
                    <NuxtLink :to="'/menu/detail/' + menu.id">
                      <img class="w-[100px]" :src="api + 'storage/menu/' + menu.image">
                    </NuxtLink>

                  </div>
                </div>

              </div>
            </div>
          </Transition>
        </div>
      </div>

      <div class="flex items-center justify-end w-full">


        <div class="flex sm:hidden">
          <div class=" font-serif absolute right-4">
            <span>0</span>
          </div>
          <button type="button" class="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
            aria-label="toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="black"
                d="m17.75 21.16l-2.75-3L16.16 17l1.59 1.59L21.34 15l1.16 1.41zM10 21h2.8c.24.41.53.79.85 1.13c-.36.53-.96.87-1.65.87a2 2 0 0 1-2-2m-7-1v-1l2-2v-6a7 7 0 0 1 5-6.71V4a2 2 0 1 1 4 0v.29A7 7 0 0 1 19 11v1.08L18 12l-1 .08V11c0-2.76-2.24-5-5-5s-5 2.24-5 5v7h5c0 .7.12 1.37.34 2z" />
            </svg> </button>

        </div>
      </div>

    </div>

  </div>





  <MenuCategory />















</template>

<script setup>
import { api } from '~/composables/api';





const isOpen = ref(true)
const searchText = ref('');



const { data } = useFetch(api + 'api/category');
const { data: menu } = useFetch(api + 'api/menu');

// Arama metni


// Filtreleme işlemi
const filteredMenu = computed(() => {

  const searchLowerCase = searchText.value.toLowerCase().trim();


  return menu.value.filter(item => {

    const itemNameLowerCase = item.title.toLowerCase();
    return itemNameLowerCase.includes(searchLowerCase);
  });
});



</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>