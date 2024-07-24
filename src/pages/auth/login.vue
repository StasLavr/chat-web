<template>
    <div class="cont w-full min-h-screen flex align-items-center justify-content-center">
 <Card style="width: 30rem; overflow: hidden">
    <template #title class=""><div class="flex align-items-center justify-content-center">Авторизация</div></template>
    <template #content>
        <div v-if="this.email.length >= 4 || this.email.length == 0 "class="flex align-items-center justify-content-center"><p>Email*</p></div>
        <div v-else class="flex align-items-center justify-content-center text-red-400"><p>Email должен больше 4 символов</p></div>

        <div class="flex align-items-center justify-content-center mb-2">
            <InputText type="email" v-model="email" placeholder="Введите Email" class="w-8"/>
        </div>
        <div v-if="this.password.length >= 8 || this.password.length == 0 " class="flex align-items-center justify-content-center"><p>Пароль*</p></div>
        <div v-else class="flex align-items-center justify-content-center text-red-400"><p>Пароль должен больше 8 символов</p></div>

        <div class="flex align-items-center justify-content-center mb-2">            
            <InputText type="text" v-model="password" placeholder="Введите пароль" class="w-8"/>
        </div>
        <div class="flex align-items-center justify-content-center"><p>Если у вас нету аккаунта >> <router-link to="/auth/reg">Регистрация</router-link></p></div>

    </template>
    <template #footer class="flex align-items-center justify-content-center" >
        <div class="flex align-items-center justify-content-center mt-2 mb-2">
            <Button v-on:click="login()" label="Авторизация" class="w-4"/>
        </div>
    </template>
</Card>
</div>
<Dialog v-model:visible="this.visible" maximizable modal header="Ошибка!" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    <p class="m-0">
      Не верный логин или пароль
    </p>
</Dialog>

    </template>
<script>
import Dialog from 'primevue/dialog';
import axios from 'axios';
import InputText from 'primevue/inputtext'
import Card from "primevue/card";
import Button from  "primevue/button";
export default {
    name,
    components: {
        Card,
        Button,
        InputText,
        Dialog,
    },
    data() {
        return {
        email: "",
        password: "",
        visible: false,
        status: null,
    }
},
    methods: {
    async login() {
        try {
        const res = await axios.post(
  'http://localhost:8000/auth/jwt/login',
  new URLSearchParams({
    'grant_type': 'password',
    'username': this.email,
    'password': this.password,
  }),
  {
    headers: {
      'accept': 'application/json'
    }
  }
);
const data = await res

if (data.status == 204) {
    this.$router.push('/test');
} 

        } catch (error) {
            this.visible = true;
        }
    },
}
}
</script>
<style>
    
</style>