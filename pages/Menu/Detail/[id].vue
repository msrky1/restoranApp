<template>
  <div>

    asdasdad
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