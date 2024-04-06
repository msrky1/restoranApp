<template>
  <div class="bg-black">

      <NuxtLayout :name="layout">

        <NuxtPage />

      </NuxtLayout>

  </div>
  <!-- <div class=" justify-center items-center w-full h-full fixed  flex bg-black">
    <NuxtImg class="animate-ping"  src="/logo.png"></NuxtImg>

  </div> -->
</template>

<script setup lang="ts">

const layout = 'default'




</script>
