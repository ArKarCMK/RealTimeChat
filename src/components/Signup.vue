<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
    <input type="text"  placeholder="Name" v-model="name">
    <input type="text"  placeholder="email" v-model="email">
    <input type="text"  placeholder="password" v-model="password">
    <button>Singup</button>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    let name=ref("");
    let email=ref("");
    let password=ref("");
    let signUp= () => {
      console.log(name.value, email.value, password.value)
    }
    return{name, email, password, signUp}
  }
}
</script>

<style>

</style>