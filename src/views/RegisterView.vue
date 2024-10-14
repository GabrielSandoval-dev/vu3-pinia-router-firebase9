<template>
   <h1>Register</h1>
   <form @submit.prevent="handleSubmit">
      <input type="email" name="" id="" placeholder="Ingrese e-mail" v-model.trim="email">
      <input type="password" placeholder="Ingrese Contraseña" v-model.trim="password">
      <button type="submit" :disabled="userStore.loadingUser">Crear Usuario</button>
   </form>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';
// import { useRouter } from 'vue-router';


const userStore = useUserStore()
// const router = useRouter()

const email = ref('')
const password = ref('')


const handleSubmit = async()=>{

   if(!email.value || password.value.length < 6){
      return alert("llena los campos")
   }
   await userStore.registerUser(email.value,password.value)
   // router.push('/')

   console.log('procesando formulario')
   console.log(email.value)
   console.log(password.value)
}



</script>

<style></style>