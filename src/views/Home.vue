<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="movie in movies" v-bind:key="movie"></div>
    <h3>{{ movie.title }}</h3>
  </div>
</template>
<style></style>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      movies: [],
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("http://localhost:3000/movies").then((response) => {
        console.log(response.data);
        this.movies = response.data;
      });
    },
    createProduct: function () {
      var params = {};
      axios.post("https//localhost:3000/movies", params).then((response) => console.log(response.data));
      this.movies.push(response.data);
    },
  },
};
</script>
