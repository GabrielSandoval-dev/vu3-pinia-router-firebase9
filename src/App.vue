
<template>
  
    <nav v-if="!userStore.loadingSession">
      <RouterLink to="/" v-if="userStore.userData">Home</RouterLink> |
      <RouterLink to="/login" v-if="!userStore.userData">Login</RouterLink> |
      <RouterLink to="/register" v-if="!userStore.userData">Register</RouterLink> |
      <button @click="userStore.logoutUser" v-if="userStore.userData">Logout</button>
    </nav>
    <div v-else>
      Loading user
    </div>
    <RouterView />
 
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router';
import { useUserStore } from './stores/user';


const userStore = useUserStore()


</script>