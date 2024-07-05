<template>
    <div v-if="category.hide" class="mb-10 text-white overflow-hidden" ref="isShowPhoto">
        <NuxtLink :to="'/category/' + category.id">  
            <img :data-src="`${api}storage/category/${category.image}`" :alt="category.name">
        </NuxtLink>
        <NuxtLink :to="'/category/' + category.id">   
            <div class="text-center font-bold text-[#BC945B]">{{ category.name }}</div>
        </NuxtLink>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps(['category'])
const isShowPhoto = ref();

const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const targetElement = entry.target;
            const imgs = targetElement.querySelectorAll("img[data-src]");
            imgs.forEach((img) => {
                img.src = img.dataset.src;
                img.classList.add("active");
                img.removeAttribute("data-src");
            });
            observer.unobserve(targetElement);
        }
    });
};

const options = {
    rootMargin: "50px",
};
const observer = new IntersectionObserver(callback, options);

onMounted(() => {
    if (isShowPhoto.value) {
        observer.observe(isShowPhoto.value);
    }
})
</script>

<style scoped>
img {
    opacity: 0;
    transform: translateY(100%) scale(0);
    transition: .5s all;
}
img.active {
    opacity: 1;
    transform: translateY(0%) scale(1);
}
</style>
