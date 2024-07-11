<template>

    <div v-for="pr in products"   > {{ pr }} </div>
</template>


<script>


export default {


     data() {

         
        return {


             products: [ 
               
             [1, 'banana'],
             [2, 'sugar']


             ]
        }
     }
}

</script>