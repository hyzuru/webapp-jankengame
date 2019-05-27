<template>
<div>
  <h1>成績</h1>

  <button v-on:click="resetScore" type="button">成績リセット</button>

  <ul>
      <li v-for="(sco, index) in score" :key="sco.id">
        
        <p v-if="sco == '0'">{{index+1}}回目は... 負け！</p>
        <p v-else-if="sco == '1'">{{index+1}}回目は... 勝ち！</p>
        <p v-else>{{index+1}}回目は... 引き分け！</p>     
      </li>
  </ul>

  
</div>
    
</template>
<script>
import Janken from '@/components/Janken'
import { resetScore } from 'vuex'
export default {
    name: 'Score',
    components:{
        
    },
    methods:{
      resetScore(e) {
          this.$store.commit('resetScore')
      }
    },
    computed:{
      score(){
          return this.$store.getters.score
      }
      
    }
}
</script>
<style>
  ul {
    list-style: none;
    text-indent: 0;
    display: block;
    /* margin: 0; */
    padding: 0;
  }

</style>
