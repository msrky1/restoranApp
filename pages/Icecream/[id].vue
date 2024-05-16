<template>

    <div v-for="data in data" class="w-full text-red-900">
      <NuxtImg :src="api + 'storage/icecream/' + data.image" />
      <div class="fixed cursor-pointer bottom-12 rounded-full  right-4  z-90">
                <div @click="backPage()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em"
                        viewBox="0 0 24 24">
                        <g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path stroke-dasharray="14" stroke-dashoffset="14" d="M19 12H5.5">
                                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="14;0" />
                            </path>
                            <path stroke-dasharray="8" stroke-dashoffset="8" d="M5 12L10 17M5 12L10 7">
                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s"
                                    values="8;0" />
                            </path>
                        </g>
                    </svg>
                </div>

            </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';



const router = useRouter();

const backPage = (() => {

    router.go(-1)

})

const { data } = await useFetch(api + 'api/icecream');



</script>
