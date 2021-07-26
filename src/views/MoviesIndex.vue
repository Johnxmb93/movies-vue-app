<template>
  <div class="moviesindex">
    <div v-for="movie in movies" v-bind:key="movie.id">
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

// fixed stuff in backend
</script>
