<template>
  <div class="moviesindex">
    <div class="card mb-3 bg-secondary" style="max-width: 700px" v-for="movie in movies" v-bind:key="movie.id">
      <div class="row g-0">
        <div class="col-md-4">
          <router-link :to="`/movies/${movie.id}`">
            <img
              src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTE1ODA0OTcxNTEyODU4MTI1/bradley-cooper-547062-1-402.jpg"
              class="img-fluid rounded-start"
              alt=""
            />
          </router-link>
          <!-- <yes i want Bradly Cooper to be the picture for every movie> -->
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h1 id="makeblue">{{ movie.title }}</h1>
            Did you like this movie?
            <input type="checkbox" />
            <p>Year Released:</p>
            <h4>{{ movie.year }}</h4>
            <h4>{{ movie.plot }}</h4>
            Director:
            <h4>{{ movie.director }}</h4>
          </div>
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is
            a little bit longer.
          </p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
  <!-- <div v-for="movie in movies" v-bind:key="movie.id">
      <router-link v-bind:to="`/movies/${movie.id}`">
        <h1 id="makeblue">{{ movie.title }}</h1>
      </router-link>
      Did you like this movie?
      <input type="checkbox" />
      <p>Year Released:</p>
      <h4>{{ movie.year }}</h4>
      <h4>{{ movie.plot }}</h4>
      Director:
      <h4>{{ movie.director }}</h4>
    </div>
  </div> -->
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
<style>
#makeblue {
  font-size: 300%;
  font-weight: bold;
  color: #2600ff;
}
</style>
