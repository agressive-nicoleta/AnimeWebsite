<template>
  <div class="search-card">
    <div class="search-image">
      <img
        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMPJW0S-RJrjgGyVBcj30sduLLTnG6EQlVf2W7M-9BwyS51p7k"
        alt="anime-name"
      >
    </div>
    <div class="search-right">
      <h3>Violet Evergarden</h3>
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
      <button class="button">
        <router-link to="/show">Watch</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchCard"
};
</script>

<style scoped>
.search-card {
  display: flex;
  height: 280px;
  width: 480px;
  --font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-family: var(--font-family);
  background-color: #ebebeb;
}

.checked {
  color: #f1094f;
}
.search-image {
  padding: 10px 20px 20px 20px;
}
.search-image img {
  max-width: 100%;
  height: auto;
  padding: 10px;
}
.search-right {
  float: right;
  padding-left: 20px;
  padding-right: 8px;
}
.search-right h3 {
  margin-bottom: 4px;
  font-size: 24px;
}
.button {
  display: inline-block;
  font-size: 14px;
  padding: 12px 54px;
  text-decoration: none;
  outline: none;
  border: solid 2px #1a1a1c;
  border-radius: 3px;
  background-color: #6f2232;
  transition: 0.5s;
}
.button a {
  color: white;
  text-decoration: none;
}
.button:hover {
  --button-color: #1a1a1c;
  background-color: var(--button-color);
}
</style>
