<template>
  <div class="home">
    <Hero></Hero>
    <HeaderCollection/>
    <MoreAnime></MoreAnime>
  </div>
</template>

<script>
import HeaderCollection from "./components/HeaderCollection";
import Hero from "./components/Hero";
import MoreAnime from "./components/MoreAnime";
export default {
  name: "Home",
  components: {
    HeaderCollection,
    Hero,
    MoreAnime
  },
  props: {
    collectionName: String
  }
};
</script>

<style scoped>
.header-container {
  --background-color: #1A1A1C;
  background-color: var(--background-color);
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.hero {
  position: relative;
  display: flex;
  max-width: 1024px;
  height: 360px;
  margin: 0 auto;
}
.hero-left {
  width: 40%;
  padding: 80px 50px 0 0;
}
input[type="text"] {
  --color: #4e4e50;
  background-color: var(--color);
  background-image: url("https://cdn.bitdegree.org/learn/search-icon.png?229dfb2d");
  background-size: 20px;
  background-position: 5px 5px;
  background-repeat: no-repeat;
  padding-left: 36px;
  color: white;
  border-radius: 10px;
  height: 30px;
  width: 300px;
}
.button {
  display: inline-block;
  font-size: 18px;
  padding: 16px 30px;
  text-decoration: none;
  outline: none;
  border: none;
  border-radius: 3px;
  background-color: #950741;
  color: white;
  transition: 0.7s;
}
.button:hover {
  --button-color: #c3083f;
  background-color: var(--button-color);
}
.image {
  width: 60%;
  height: 80%;
  margin-top: 40px;
  background-image: url("https://mcdn.wallpapersafari.com/medium/52/42/LOPbdm.jpg");
  background-size: cover;
}
p {
  color: white;
  max-width: 300px;
}
</style>
