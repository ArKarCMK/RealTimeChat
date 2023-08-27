<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
    <input type="text"  placeholder="Name" v-model="displayName">
    <input type="text"  placeholder="email" v-model="email">
    <input type="text"  placeholder="password" v-model="password">
    <button>Singup</button>
  </form>
  <div class="error">{{error}}</div>
</template>

<script>  
import { ref } from 'vue';
import useSignup from '../composable/useSignup';
export default {
  setup() {
    let displayName=ref("");
    let email=ref("");
    let password=ref("");
    
    let {error, createAccount } = useSignup()

    let signUp=  async ()=>{
       try{
        let res = await createAccount( email.value, password.value, displayName.value)
       console.log(res.user)
       }
       catch{
          error.value;
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