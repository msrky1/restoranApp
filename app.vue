<template>
      
    
  <div class="h-screen items-center justify-center flex bg-[url('/genis.jpg')]  bg-center bg-contain" v-if="pages === false">
    <div>
      <NuxtImg class="animate-pulse" width="300" src="/logo.png"/>

    </div>
    

  </div>
  <div v-else class="bg-[url('/genis.jpg')]  bg-center  bg-contain">
    <NuxtLoadingIndicator color="#BC945B"  />

    <NuxtLayout>

      <NuxtPage />

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
    }, 3000);
})

</script>

<style>

</style>
