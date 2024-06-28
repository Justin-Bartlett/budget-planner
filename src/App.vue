<template>
  <router-view />
  <nav class="footer-nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(209, 209, 209);
  background: rgb(39, 39, 39);
}

body {
  background: rgb(39, 39, 39);
  margin: 0;
}

nav {
  padding: 30px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(87, 87, 87);
  color: rgb(209, 209, 209);
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
