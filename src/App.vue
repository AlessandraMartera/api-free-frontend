<script>
import appHeader from './components/appHeader.vue';
import appFooter from './components/appFooter.vue';
import axios from "axios";

export default{
  components:{
    appHeader,
    appFooter,
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
  <main >
    <div class="btn-primary">
      cioa
    </div>
      <router-view></router-view>
  </main>

  
  <appFooter/>
</template>

<style lang="scss">
@use "./style/general.scss" as *;

main{
  height: calc(100vh - 250px);
  background-color: antiquewhite;
  overflow: auto;
}
</style>
