<template>
  <div class="movies-show">
    <div class="container">
      <h1>{{ movie.title }}</h1>
      <p>{{ movie.plot }}</p>
      <p>{{ movie.year }}</p>
      <p>{{ movie.director }}</p>
      <router-link :to="`/movies/${movie.id}/update`">"Click to Edit movie!"</router-link>
      <router-link to="/moviesindex">"Click Here to See All movies!"</router-link>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      movie: {},
    };
  },
  created: function () {
    axios.get("/movies/" + this.$route.params.id).then((response) => {
      this.movie = response.data;
    });
  },
};
</script>
