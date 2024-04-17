<template>
      

  <div class="h-screen items-center justify-center flex bg-black" v-if="pages === false">
    <div>
      <NuxtImg class="animate-pulse" width="300" src="/logo.png"/>

    </div>
    

  </div>
  <div v-else class="bg-black">


    <NuxtLayout>
      <NuxtPage />

    </NuxtLayout>

  </div>
  <!-- <div class=" justify-center items-center w-full h-full fixed  flex bg-black">
    <NuxtImg class="animate-ping"  src="/logo.png"></NuxtImg>

  </div> -->
  <NuxtLoadingIndicator />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
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
