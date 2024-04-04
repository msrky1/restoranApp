<template>
  <div class="flex items-center justify-center ">
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
    <div>
      <NuxtImg src="/logo.png" width="600px"> </NuxtImg>
    </div>
    <div class="flex items-center justify-end w-full">


      <div class="flex sm:hidden">
        <button v-if="!isOpen" @click="isOpen = !isOpen" type="button"
          class="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="toggle menu">
          <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
            <path fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
            </path>
          </svg>

        </button>
        <NuxtImg v-else @click="isOpen = !isOpen" width="30"
          class="hover:w-10 ease-in duration-300 hover:rotate-[360deg]" src="/icon/close.svg"></NuxtImg>
      </div>
    </div>

  </div>

  <nav :class="isOpen ? '' : 'hidden'" class="sm:flex 
    sm:justify-center sm:items-center mt-4
     
       max-sm:overflow-auto 
    
    ">

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
  </nav>

</template>

<script setup>
import { api } from '~/composables/api';





const isOpen = ref(true)


const { data } = useFetch(api + 'api/category');



const category = ([


  "Künefeler", "Kırmızı Etler", "Makarnalar", "Salatalar", "Kahvaltı",
  "Künefeler", "Kırmızı Etler", "Makarnalar", "Salatalar", "Kahvaltı"

])

console.log(category)

</script>