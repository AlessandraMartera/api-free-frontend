<script>

export default{
  name: "appHeader"
}

</script>

<template>
 <header>
    CIAO HEADER
    <hr>
    <router-link :to="{ name: 'create' }">new post</router-link>
 </header>
</template>

<style scoped lang="scss">

</style>
