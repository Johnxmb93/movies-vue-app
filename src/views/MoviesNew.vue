<template>
  <div class="moviesnew">
    <form v-on:submit.prevent="createMovies()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        Tilte:
        <input type="text" v-model="newMoviesParams.title" />
        Plot:
        <input type="text" v-model="newMoviesParams.plot" />
        Year:
        <input type="text" v-model="newMoviesParams.year" />
        Director:
        <input type="text" v-model="newMoviesParams.director" />
        <input type="submit" value="submit" />
      </div>
    </form>
  </div>
</template>
<style></style>
z
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      newMoviesParams: {},
    };
  },
  created: function () {},
  methods: {
    createMovies: function () {
      axios.post("/movies", this.newMoviesParams).then((response) => {
        this.$router.push("/moviesindex");
        console.log("New Movie Created!!", response.data);
      });
    },
  },
};
</script>
