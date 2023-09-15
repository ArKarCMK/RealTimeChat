<template>
  <nav v-if="user">
    <div>
        <p>{{ user.displayName }}</p>
        <p class="email">Logged in as {{ user.email }}</p>
    </div>
    <button @click="signOut">Logout</button>
  </nav>
  <div>
    <ChatWindow />
  </div>
  <div>
    <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import NewChatForm from './NewChatForm'
import { auth } from '@/firebase/config'
import { ref } from 'vue'
import {useRouter} from 'vue-router'
import getUser from '../composable/getUser'
import useLogout from '../composable/useLogout'
import user from '../composable/getUser'
import ChatWindow from './ChatWindow.vue'
export default {
  components: { NewChatForm, ChatWindow },
  setup() {
    // let autUser = ref({});
    
    let router = useRouter();

    let logout = useLogout();
    let signOut = ()=>{
      logout();
      // router.push({name:"Auth"})
    }

    let user = getUser();

    // auth.onAuthStateChanged((_user)=>{
    //   // console.log("this is logged in user", _user)
    //   user.value = _user
    // }) 

    return {logout, user, signOut}
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