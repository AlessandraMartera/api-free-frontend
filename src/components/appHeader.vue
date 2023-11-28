<script>

export default{
  name: "appHeader"
}

</script>

<template>
 <header class="d-flex ">
 
 <div class="logo">
  <img src="" alt="Logo">
 </div>
  
  <router-link class="btn-primary" :to="{ name: 'create' }">new post</router-link>

   
 </header>
</template>

<style scoped lang="scss"> 


header{

  height: 150px;
  display: flex;
  justify-content: space-between;


  .logo{
    height: 80px;
    width: 100px;
  }
}

</style>
