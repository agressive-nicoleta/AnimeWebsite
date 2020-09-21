<template>
  <div class="show-header container">
    <video controls>
      <source src="movie.mp4" type="video/mp4">
      <source src="movie.ogg" type="video/ogg">.
    </video>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
video{
  width: 100%;
  height: 460px;
}
p {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 100px;
  height: 300px;
}
</style>
