<template>
  <footer class="footer">
    <p>
      Made with
      <span class="heart"></span> by Nicoleta
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  --font-color: white;
  --border-color: #141415;
  font-family: "Vollkorn", serif;
  border-top: 5px solid black;
  margin-bottom: 0px;
  height: 100px;
  background-image: url("https://gameskinshop.com/wp-content/uploads/2017/07/Dutchboosters-background-sitefooter.jpg");
  background-size: cover;
  background-position: bottom;
}
.heart {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/heart.png");
  background-size: 100%;
  background-repeat: no-repeat;
  display: inline-block;
  position: relative;
  height: 30px;
  width: 30px;
  top: 10px;
}
.footer p {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 20px;
  color: var(--font-color);
}
</style>
