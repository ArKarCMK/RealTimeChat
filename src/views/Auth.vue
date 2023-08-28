<template>
  <div class="container welcome">
    <div v-if="isLoggedin">
      <Login @chatroom= "chatroom"/>
      Don't have an account? <span @click="isLoggedin = !isLoggedin">Sign up now.</span>
     
    </div>
    <div v-else>
      <signup />
      Already have an account? <span @click="isLoggedin = !isLoggedin">Log in here.</span>
    </div>
  </div>
</template>

<script>
import Signup from '@/components/Signup.vue'
import Login from '@/components/Login.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  components: {Signup, Login},
  setup() {
    let router = useRouter();
    let isLoggedin = ref(true);

    let chatroom = ()=>{
      router.push({name: "Chatroom"})
    }

    return {isLoggedin, chatroom}
    }
}
</script>

<style>
 
.welcome {
        text-align: center;
        padding: 20px 0;
      }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  /* .welcome label {
    display: block;
    margin: 20px 0 10px;
  } */
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>