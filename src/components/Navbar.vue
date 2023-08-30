<template>
  <nav v-if="user">
    <div>
        <p>{{ user.displayName }}</p>
        <p class="email">Logged in as {{ user.email }}</p>
    </div>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import { auth } from '@/firebase/config'
import { ref } from 'vue'
import getUser from '../composable/getUser'
import useLogout from '../composable/useLogout'
import user from '../composable/getUser'
export default {
  setup() {
    // let autUser = ref({});
    


    let logout = useLogout();

    let user = getUser();

    // auth.onAuthStateChanged((_user)=>{
    //   // console.log("this is logged in user", _user)
    //   user.value = _user
    // }) 

    return {logout, user}
  }
}
</script>

<style>
  nav{
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px  auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>