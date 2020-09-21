<template>
  <div>
    <ShowPageHeader/>
    <p>Show page</p>
  </div>
</template>

<script>
import ShowPageHeader from "./components/ShowPageHeader";

export default {
  name: "ShowPage",
  components: {
    ShowPageHeader
  }
};
</script>

<style scoped>
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