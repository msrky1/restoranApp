<template>

    
    

        <!-- <NuxtImg class="w-32" :src="api + 'storage/category/' + cat.image" /> -->


</template>


<script setup>


let url = api + 'api/category'
const { data } = useFetch(url);
console.log(data);
</script>