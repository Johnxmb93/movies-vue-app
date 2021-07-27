<template>
  <div class="moviesindex">
    <div v-for="movie in movies" v-bind:key="movie.id">
      <router-link v-bind:to="`/movies/${movie.id}`">
        <h1>{{ movie.title }}</h1>
      </router-link>
      Year Released:
      <h4>{{ movie.year }}</h4>
      <h4>{{ movie.plot }}</h4>
      Director:
      <h4>{{ movie.director }}</h4>
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
