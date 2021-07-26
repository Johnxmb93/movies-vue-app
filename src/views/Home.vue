<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="movie in movies" v-bind:key="movie">
      <h1>{{ movie.title }}</h1>
    </div>
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
      axios.get("/movies").then((response) => {
        this.movies = response.data;
        console.log("All Movies", response.data);
      });
    },
  },
};
</script>
