<template>
  <h2> Login </h2>
  <form @submit.prevent="Login">
    <input type="text"  placeholder="Name" v-model="name">
    <input type="text"  placeholder="email" v-model="email">
    <input type="text"  placeholder="password" v-model="password">
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    let name=ref("");
    let email=ref("");
    let password=ref("");
    let Login= () => {
      console.log(name.value, email.value, password.value)
    }
    return{name, email, password, Login}
  }
}
</script>

<style>

</style>