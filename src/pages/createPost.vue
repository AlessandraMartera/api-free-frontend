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
      axios.post("http://localhost:3000/posts", this.newPost)
      .then(() => {
          // Reindirizza a 'home' dopo la creazione del post
          this.$router.push({ name: 'home' });
        })
    },
   }
};
</script> 

<template>
    <h1>pages create post</h1>
    <router-link :to="{ name: 'home' }">back to home</router-link>

    
<div class="fake_form">
  
    <form method="POST">    

      <!-- category -->
      <div class="form-floating">
          <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option selected>Choose a category</option>
            <option  v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}</option>
            
          </select>
          <label for="floatingSelect">Works with selects</label>
        </div>

        <!-- title -->
        <div class="mb-3">
          <label for="title" class="form-label">title</label>
          <input type="text" class="form-control" id="title" placeholder="Add a title">
        </div>

        <!-- image -->
        <div class="mb-3">
          <label for="image" class="form-label">image</label>
          <input type="text" class="form-control" id="image" placeholder="add a path image">
        </div>

        <!-- content -->
        <div class="form-floating">  
          
          <textarea class="form-control" placeholder="Leave a comment here" id="content" style="height: 100px"></textarea>
          <label for="content">add a content...</label>
        </div>  

        <!-- tags -->
        <div class="input_tags">
          <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group" v-for="tag in tags">
            <input  type="checkbox" class="btn-check"  autocomplete="off" :id="tag.id" :value="tag.id" v-model="this.newPost.tags">
            <label class="btn btn-outline-primary" :for="tag.id" :key="tag.id">{{ tag.name }}</label>
          </div>
        </div>

        <!-- button -->
        <input type="button" class="btn btn-primary" @click="createNewPost()" value="pubblica">
        <!-- <input class="btn-primary" type="button" value="pubblica" @click="createNewPost()"> -->
    </form>
    
</div>
</template>

<style lang="scss" scoped>
.fake_form{
  border: 2px solid #ccc;
  border-radius: 15px;
  width: 60%;
  margin: 20px auto;
  padding: 50px;

  .input_tags{
    margin-top: 15px;
    width: 100%;
    display: flex;
    
  }

  .button_form{
    width: 100px;
    margin: 20px auto;
    align-self: center;
  }
}
</style>