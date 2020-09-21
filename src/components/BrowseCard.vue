<template>
  <div class="card-box">
    <img
      src="https://m.media-amazon.com/images/M/MV5BYmNlMTYzNDMtZjI5NS00NTdjLTlkYWMtMWMzZWJjODY2YzAzXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
      alt="Card name"
    >
    <div class="card-description">
      <h3>Psycho-Pass</h3>
      <p class="episodes">22 episodes</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrowseCard"
};
</script>

<style scoped>
.card-box {
  --font-family: "Avenir", Helvetica, Arial, sans-serif;
  --border-color: #1a1a1c;
  width: 126px;
  padding: 10px 10px 0px 10px;
  box-shadow: 5px 10px 18px #888888;
  border: 2px solid var(--border-color);
  border-radius: 6px;
  font-family: var(--font-family);
}
.card-box img {
  max-width: 100%;
  height: auto;
}
.card-description h3 {
  margin-top: 0;
  font-size: 18px;
}
.card-description p {
  top: 0px;
  margin-top: -15px;
  font-size: 15px;
}
.card-box:hover {
  box-shadow: 5px 8px 30px black;
}
</style>