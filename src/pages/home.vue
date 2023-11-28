<script>
import axios from "axios";

export default {
  components: {
  }, 
  data() {
    return {
      posts: [],
    };
  },
  mounted () {
    axios.get('http://localhost:3000/posts').
    then( (res) => {
      this.posts = res.data;
    }
    )
  }
};
</script> 

<template>
    <h1>pages HOME</h1>
    <div v-for="post in posts">
    {{ post.id }} - {{ post.title }}
  </div>
</template>

<style lang="scss" scoped>

</style>