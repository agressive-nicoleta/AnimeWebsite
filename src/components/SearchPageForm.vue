<template>
  <div class="search-container">
    <div class="search-content">
      <input type="text" placeholder="Search.." name="search">
      <button type="submit">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPageForm"
};
</script>

<style scoped>
.search-container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background-color: #1A1A1C;
  width: 100%;
  align-content: center;
  padding: 26px 0;
}
.search-content {
  display: float;
  border: 2px solid;
  width: 1024px;
  margin: 0 auto;
  position: relative;
}

input[type="text"] {
  padding: 6px;
  font-size: 17px;
  height: 30px;
  width: 93%;
  margin: 0;
  border: none;
  padding-left: 14px;
}
.search-content button {
  position: absolute;
  padding: 0;
  width: 5%;
  height: 100%;
  margin: 0;
  right: 0;
  border-left: 2px solid;
  border-bottom: none;
  border-top: none;
  border-right: none;
  cursor: pointer;
}
@media screen and (max-width: 1000px) {
  .search-content {
    width: 700px;
  }
}
@media screen and (max-width: 740px) {
  .search-content {
    width: 500px;
  }
}
</style>
