<template>
  <div class="chat-window">
    <div class="messages" ref="chatBox">
      <div class="single" v-for="message in formattedMessages" :key="message.id">
        <span class="created-at">{{message.created_at}}</span>
        <span class="name">{{message.name}}</span>
        <span class="message">{{message.message}} </span>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase/config'
import { computed, onUpdated, ref } from 'vue'
import {formatDistanceToNow} from 'date-fns'
export default {
  setup(){
    let messages = ref([]);
    let chatBox = ref(null);

    onUpdated(()=>{
      chatBox.value.scrollTop = chatBox.value.scrollHeight
    })

    let formattedMessages = computed(()=>{
      return messages.value.map((msg)=>{
        let formattedDate = formatDistanceToNow(msg.created_at.toDate());
        return {...msg, created_at: formattedDate}
      })
    })

    db.collection("message").orderBy("created_at").onSnapshot((snap)=>{
      let result = []
      snap.docs.forEach((doc)=>{
        let document = {...doc.data(), id: doc.id}
        // console.log(document)
        // if(doc.data().created_at){
        //   result.push(document);
        // }
        //Same if else
        doc.data().created_at && result.push(document)

      })
      messages.value = result;
    })

    return {messages, formattedMessages, chatBox}
  }
}
</script>

<style>
  .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .single{
    margin: 18px 0;
  }
  .created-at{
    display: block;
    color:  #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name{
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
</style>