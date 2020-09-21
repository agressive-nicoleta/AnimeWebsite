<template>
  <div class="description-card">
    <div class="search-image">
      <img
        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMPJW0S-RJrjgGyVBcj30sduLLTnG6EQlVf2W7M-9BwyS51p7k"
        alt="anime-name"
      >
    </div>
    <div class="search-right">
      <h3>Violet Evergarden</h3>
      <p class="genres">Genres: Drama</p>
      <div class="rating">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
      </div>
      <p>
        Violet, an emotionally detached soldier who received prosthetic arms
        after a combat injury, settles into postwar life as a ghostwriter
        while searching for the meaning behind her former commander's final
        words to her.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowDescriptionCard"
};
</script>

<style scoped>
.description-card {
  display: flex;
  height: 400px;
  width: 1024px;
  --font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-family: var(--font-family);
  margin: 30px auto;
}

.checked {
  color: #f1094f;
}
.search-image {
  padding: 0px 20px 0px 20px;
  object-fit: cover;
  max-width: 22%;
  max-height: 100%;
}
.search-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
.search-right {
  float: right;
  padding-left: 20px;
  padding-right: 40px;
  font-size: 18px;
}
.search-right h3 {
  margin: 0 0 10px 0;
  font-size: 30px;
}
</style>
