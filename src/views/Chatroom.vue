<template>
  <div class="container">
    <Navbar></Navbar>
  </div>
</template>

<script>
import getUser from '@/composable/getUser'
import Navbar from '../components/Navbar'
import { useRouter } from 'vue-router';
import { watch } from 'vue';
export default {
  components: { Navbar },

  setup() {
    let user = getUser();
    let router = useRouter()
    console.log(router)

    watch(user, ()=>{
      if (!user.value) {
        router.push({name:"Auth"})
        console.log("haha")
      }
    })
  }
}
</script>

<style>

</style>