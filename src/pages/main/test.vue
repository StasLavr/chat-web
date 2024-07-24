<template lang="">
   <h1>{{data}}</h1>
</template>

<script setup>
</script>


<script>
import axios from 'axios';  
export default {
    name,
    data() {
        return {
            data: "",
        }
    },
    mounted() {
        this.data = this.test();
    },
    methods: {
        async test() {
            const response = await axios.get('http://localhost:8000/protected-route', {
            headers: {
            'accept': 'application/json'
          },
          withCredentials: true,
        });
        this.data = response.data;
        router.push({path: '/auth/login'})
        }
    }   
}
</script>
<style lang="">
    
</style>