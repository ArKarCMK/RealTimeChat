<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
    <input type="text"  placeholder="Name" v-model="displayName">
    <input type="text"  placeholder="email" v-model="email">
    <input type="password"  placeholder="password" v-model="password">
    <div class="error">{{error}}</div>
    <button>Singup</button>
  </form>
</template>

<script>  
import { ref } from 'vue';
import useSignup from '../composable/useSignup';
import {useRouter} from 'vue-router';
export default {
  setup() {
    let router = useRouter();
    let displayName=ref("");
    let email=ref("");
    let password=ref("");
    
    let {error, createAccount } = useSignup()

    let signUp=  async ()=>{
      let res = await createAccount( email.value, password.value, displayName.value)
      if(res) {
        router.push({name: 'Chatroom'})

      }
  
    }
    return{displayName, email, password, signUp, error }
  }
}
</script>

<style>
button{
  cursor: pointer;
}
</style>