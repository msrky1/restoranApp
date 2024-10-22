<template>
 
  <div v-if="pages === false"
    class="h-screen flex items-end justify-center bg-[url('/genis.jpg')]  min-[1024px]:hidden bg-center bg-contain">
  
    <div class="top-0 justify-center flex object-center absolute w-full 	 items-center  ">
        <NuxtImg width="200" src="/logo-dikey.png" />

      </div>
    <div>
      
      <NuxtImg class="mb-0" width="800" src="/chef.png" />
    </div>
  </div>
  <div v-else class="bg-[url('/genis.jpg')]  bg-center  bg-contain">
    <NuxtLoadingIndicator color="#BC945B" />

    <NuxtLayout>


      <NuxtPage />




      <UNotifications :timeout="100000" />

    </NuxtLayout>

  </div>
  <!-- <div class=" justify-center items-center w-full h-full fixed  flex bg-black">
    <NuxtImg class="animate-ping"  src="/logo.png"></NuxtImg>

  </div> -->

</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})



const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
  duration: 2000,
  throttle: 200,
  // This is how progress is calculated by default
  estimatedProgress: (duration, elapsed) => (2 / Math.PI * 100) * Math.atan(elapsed / duration * 100 / 50)
})

const pages = ref(false);
onMounted(() => {

  setTimeout(() => {
    pages.value = true;
  }, 5000);
})

</script>

<style></style>
