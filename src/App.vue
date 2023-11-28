<script>
import appHeader from './components/appHeader.vue';
import axios from "axios";

export default{
  components:{
    appHeader
  }, 
  data() {
    return {
      posts: [],
    };
  },
  mounted () {
    axios.get('http://localhost:3000/posts/').
    then( (res) => {
      this.posts = res.data;
    }
    )
  }
}
</script>

<template>
  <appHeader/>
  
  

  
  <router-view></router-view>
</template>

<style lang="scss">
@use "./style/general.scss" as *;


</style>
