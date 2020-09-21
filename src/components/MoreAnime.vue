<template>
  <div class="more-anime">
    <div class="content">
      <h2>Looking for more anime?</h2>
      <p>Browse the rest of the catalog!</p>
      <button class="button">
        <a href="#">Browse</a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoreAnime"
};
</script>

<style scoped>
.more-anime {
  --background-color: #8C2B3F;
  --border-color: #1A1A1C;
  height: 200px;
  background-color: var(--background-color);
  box-shadow: 4px 4px 40px var(--border-color) inset;
  border: 5px solid;
  border-left-style: none;
  border-right-style: none;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-top: 40px;
}
.content {
  text-align: center;
  padding-top: 20px;
}
.content h2 {
  margin-bottom: 0;
}
.content p {
  margin-top: 8px;
}
.button {
  display: inline-block;
  font-size: 18px;
  padding: 16px 40px;
  text-decoration: none;
  outline: none;
  border: solid 2px #1A1A1C;
  border-radius: 3px;
  background-color: #4e4e50;
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
