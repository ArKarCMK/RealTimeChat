<template>
  <h2> Login </h2>
  <form @submit.prevent="Login">
    <input type="text"  placeholder="email" v-model="email">
    <input type="password"  placeholder="password" v-model="password">
    <div class="error">{{error}}</div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composable/useLogin'
export default {
  emits: ['chatroom'],
  setup(props, context) {
    let email=ref("");
    let password=ref("");
    let {error, signIn} = useLogin ()
    let Login= async() => {
      let res = await signIn(email.value, password.value)
      if(res){
        context.emit("chatroom")
      }
    }
    return{ email, password, Login, error}
  }
}
</script>

<style>

</style>