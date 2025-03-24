
<script>
  import Home from './views/Home.vue'
</script>

<template>
  <header>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  nav {
    padding: 20px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 10px;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>