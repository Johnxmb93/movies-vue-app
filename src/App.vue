<template>
  <div id="app">
    <div id="nav">
      <router-link to="/moviesindex">Movies</router-link>
      |
      <router-link to="/signup">Signup</router-link>
      |
      <router-link to="/login">Login</router-link>
      |
      <router-link to="/logout">Logout</router-link>
      |
      <router-link to="/moviesnew">Create Movie!</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fffb00;
  background-color: #5e5e64;
  border: 10px solid black;
  margin: 50px;
  padding: 50px;
}

#nav {
  padding: 10px;
}

#nav a {
  font-size: 200%;
  font-weight: bold;
  color: #2600ff;
}
#nav a.router-link-exact-active {
  color: #fffb00;
}
</style>
