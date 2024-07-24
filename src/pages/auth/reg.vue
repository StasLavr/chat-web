<template>
    <div class="cont w-full min-h-screen flex align-items-center justify-content-center">
 <Card style="width: 30rem; overflow: hidden">
    <template #title class=""><div class="flex align-items-center justify-content-center">Регистрация</div></template>
    <template #content>
        <div v-if="this.username.length >= 3 || this.username.length == 0 "class="flex align-items-center justify-content-center"><p>Логин*</p></div>
        <div v-else class="flex align-items-center justify-content-center text-red-400"><p>Логин должен больше 3 символов</p></div>
        <div class="flex align-items-center justify-content-center mb-2">
            <InputText type="text" v-model="username" placeholder="Введите Имя" class="w-8"/>
        </div>
        <div v-if="this.email.length >= 4 || this.email.length == 0 "class="flex align-items-center justify-content-center"><p>Email*</p></div>
        <div v-else class="flex align-items-center justify-content-center text-red-400"><p>Email должен больше 4 символов</p></div>

        <div class="flex align-items-center justify-content-center mb-2">
            <InputText type="email" v-model="email" placeholder="Введите Email" class="w-8"/>
        </div>
        <div v-if="this.fullname.length >= 4 || this.fullname.length == 0 "class="flex align-items-center justify-content-center"><p>Полное имя*</p></div>
        <div v-else class="flex align-items-center justify-content-center text-red-400"><p>Полное имя должен больше 4 символов</p></div>
        <div class="flex align-items-center justify-content-center mb-2">
            <InputText type="text" v-model="fullname" placeholder="Введите Полное имя" class="w-8"/>
        </div>
        <div v-if="this.password.length >= 8 || this.password.length == 0 " class="flex align-items-center justify-content-center"><p>Пароль*</p></div>
        <div v-else class="flex align-items-center justify-content-center text-red-400"><p>Пароль должен больше 8 символов</p></div>

        <div class="flex align-items-center justify-content-center mb-2">            
            <InputText type="text" v-model="password" placeholder="Введите пароль" class="w-8"/>
        </div>
        <div class="flex align-items-center justify-content-center"><p>Если у вас есть аккаунт >> <router-link to="/auth/login">Войти       </router-link></p></div>

    </template>
    <template #footer class="flex align-items-center justify-content-center" >
        <div class="flex align-items-center justify-content-center mt-2 mb-2">
            <Button v-if="this.password.length >= 8 & this.fullname.length >= 4 & this.email.length >= 4 & this.username.length >= 3 " v-on:click="reg()" label="Регистрация" class="w-4"/>
            <Button v-else label="Регистрация" disabled />
        </div>
    </template>
</Card>
</div>
<Dialog v-model:visible="this.visible" maximizable modal header="Ошибка!" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    <p class="m-0">
       Данный аккаунт уже зарегистрирован
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
        username: "",
        fullname: "",
        visible: false,
        status: null,
    }
},
    methods: {
       async login() {
        const response = await axios.post(
      'http://localhost:8000/auth/jwt/login',
      new URLSearchParams({
        'grant_type': 'password',
        'username': this.email,
        'password': this.password
      }),
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        withCredentials: true,
      }
    );



const logindata = await res
console.log(logindata)

     },
     async reg() {
       try {
        const res = await axios.post(
  'http://localhost:8000/auth/register',
  // '{\n  "  ": "string",\n  "password": "string",\n  "is_active": true,\n  "is_superuser": false,\n  "is_verified": false,\n  "username": "string",\n  "fullname": "string"\n}',
  {
    'email': this.email,
    'password': this.password,
    'username': this.username,
    'fullname': this.fullname,
  },
  {
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
);

const data = await res
console.log(data.status)
if (data.status = 201) {
    console.log("Успех");
    this.login()
    this.$router.push('/test');
}
} catch (err) {
        if (err.response.status = 400) {
            this.visible = true
        }
       }

}
    },
    
}
</script>
<style>
    
</style>