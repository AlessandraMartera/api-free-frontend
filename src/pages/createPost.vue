<script>
import axios from "axios";


export default {
  components: {
  },
  data() {
    return {
      newPost: {
        "title": "",
        "image": "",  
        "content": "",    
        "published": true,
        "category": 0,
        "tags": []
      },
      categories: [],
      tags:[]
    };
  },
  mounted() {
    axios.get('http://localhost:3000/categories').
    then( (res) => {
      this.categories = res.data;
      console.log(this.categories);
      }
    );
    
    axios.get('http://localhost:3000/tags').
    then( (res) => {
      this.tags = res.data;
      console.log(this.tags);
      }
    ) 
  },
  methods:{
    createNewPost(){
      axios.post("http://localhost:3000/posts", this.newPost, {
        headers: { "Content-Type": "multipart/form-data" }
      }).then((res)=> {
      })
    
    },
  }
};
</script> 

<template>
    <h1>pages create post</h1>
    <router-link :to="{ name: 'home' }">back to home</router-link>

    <form method="POST">    

      <label for="category">Choose a category:</label>
      <select name="category" id="category"  v-model="newPost.category">
        <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}</option>
      </select>

      <br>
      <label for="title">title</label>
      <input type="text" id="title" name="title" v-model="this.newPost.title">
      <br>

      <label for="image">image</label>
      <input type="text" id="image" name="image"  v-model="this.newPost.image">
      <br>

      <label for="content">content</label>
      <input type="text" id="content" name="content"  v-model="this.newPost.content">
      <br>

      <div>
        <span>fai sapere di cosa parla il tuo post, dagli dei tags</span>
         <div v-for="tag in tags">
          
        <label :for="tag.id" :key="tag.id">{{ tag.name }}</label>
        <input type="checkbox" :value="tag.id" v-model="this.newPost.tags">
      </div>
      
      </div>
     
      <br>
      <input type="button" value="pubblica" @click="createNewPost()">
    </form>
</template>

<style lang="scss" scoped>

</style>