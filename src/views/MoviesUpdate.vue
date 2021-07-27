<template>
  <div class="moviesupdate">
    <form v-on:submit.prevent="updateMovies()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        Tilte:
        <input type="text" v-model="currentMoviesParams.title" />
        Plot:
        <input type="text" v-model="currentMoviesParams.plot" />
        Year:
        <input type="text" v-model="currentMoviesParams.year" />
        Director:
        <input type="text" v-model="currentMoviesParams.director" />
        <input type="submit" value="submit" />
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      currentMoviesParams: {},
    };
  },
  created: function () {
    axios.get(`/movies/${this.$route.params.id}`).then((response) => {
      console.log("Movies Details", response.data);
      this.currentMoviesParams = response.data;
    });
  },
  methods: {
    updateMovies: function () {
      axios.patch(`/movies/${this.$route.params.id}`, this.currentMoviesParams).then((response) => {
        console.log("current Movie Updated!!", response.data);
        this.$router.push(`/movies/${this.$route.params.id}`);
      });
    },
  },
};
</script>
