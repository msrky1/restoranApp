<template>




    <div class="flex items-center justify-end w-full">


        <div class="flex sm:hidden">
            <div class=" font-serif absolute right-4">
                <span class="text-black font-sans">{{ store.say }}</span>
            </div>
            <button @click="addToast()" type="button"
                class="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                aria-label="toggle menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                    <path fill="black"
                        d="m17.75 21.16l-2.75-3L16.16 17l1.59 1.59L21.34 15l1.16 1.41zM10 21h2.8c.24.41.53.79.85 1.13c-.36.53-.96.87-1.65.87a2 2 0 0 1-2-2m-7-1v-1l2-2v-6a7 7 0 0 1 5-6.71V4a2 2 0 1 1 4 0v.29A7 7 0 0 1 19 11v1.08L18 12l-1 .08V11c0-2.76-2.24-5-5-5s-5 2.24-5 5v7h5c0 .7.12 1.37.34 2z" />
                </svg> </button>

        </div>
    </div>



</template>

<script setup>


import { useWebsiteStore } from "/stores/website"

const toast = useToast()









const store = useWebsiteStore()

onMounted(() => {

    store.fetch();
    store.countFetch();



})


function addToast() {



    store.data.forEach(element => {

        toast.add({

            title: "Tatlı Park ",
            description: element.body
        })
    });
 
    store.deleteItem();
    
}




</script>