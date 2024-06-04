<template>
    <div class="container">
        <h1>Intersection Observer Demo</h1>
        <div style="padding: 20px 0px; font-size: 16px">
            Looking to reveal multiple elements? See this
            <a href="https://stackblitz.com/edit/intersection-observer-nuxt-2mtmpo?file=app.vue">demo</a>
        </div>
        <Data v-for="(category, key) in categories" :key="key" :category="category" />
        <div class="wrapper bg-white text-black">Scroll down a bit 👇</div>
        <div>
            <span ref="demo" class="demo bg-white text-black">Intersection Observer in Action 👌</span>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const demo = ref('');


const categories = ref([]);

axios.get(`${api}api/category`)
    .then((res) => {
        categories.value = res.data
    })
    .catch((e) => {
        console.log(e)
    });



onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {

                    entry.target.classList.add('animate-delay');
                }
            });
        },
        {
            threshold: 0.5,
        }
    );

    // observe each element
    if (demo.value) {
        observer.observe(demo.value);
    }
});
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    min-height: 120vh;
}

.wrapper {
    flex-grow: 1;
    font-size: 24px;
}

.demo {
    font-size: 40px;
}

.animate-delay {
    animation-duration: 2s;
    animation-fill-mode: both;
    animation-name: animate-delay;
}

@keyframes animate-delay {
    0% {
        opacity: 0;
        transform: translateY(10px);
        -webkit-transform: translateY(30px);
        -moz-transform: translateY(20px);
        -ms-transform: translateY(20px);
        -o-transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0);
    }
}

.demo {
    display: inline-block;
    padding: 40px 0px;
    opacity: 0;
    transform: translateY(10px);
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -ms-transform: translateY(20px);
    -o-transform: translateY(20px);
}
</style>