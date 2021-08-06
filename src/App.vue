<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/moviesindex">Movie App</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="/moviesindex">Movies</a>
            <a class="nav-link" href="/moviesnew">New Movie</a>
            <a class="nav-link" href="/signup">Signup</a>
            <a class="nav-link" href="/login">Login</a>
            <a class="nav-link" v-if="isLoggedIn()" href="/logout">Logout</a>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<!-- <div id="nav">
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
    <router-view /> -->

<script>
export default {
  methods: {
    isLoggedIn: function () {
      return localStorage.getItem("jwt");
    },
  },
};
</script>
>
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
