<template>
  <div class="search-box">
    <div class="search-box cards">
      <p>{{name}}</p>
      <ul>
        <li>
          <SearchCard/>
        </li>
        <li>
          <SearchCard/>
        </li>
        <li>
          <SearchCard/>
        </li>
        <li>
          <SearchCard/>
        </li>
        <li>
          <SearchCard/>
        </li>
        <li>
          <SearchCard/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SearchCard from "./SearchCard";
export default {
  name: "SearchCollection",
  components: {
    SearchCard
  },
  props: {
    name: String
  }
};
</script>

<style scoped>
.cards {
  max-width: 1024px;
  margin: 0 auto;
  --font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-family: var(--font-family);
}
.cards ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}
.cards li {
  list-style: none;
  padding-right: 20px;
  padding-bottom: 20px;
}
.cards p {
  font-weight: bold;
  font-size: 20px;
}
</style>
