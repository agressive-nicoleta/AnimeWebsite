<template>
  <div>
    <SearchPageForm/>
    <SearchCollection name="Series"/>
    <SearchCollection name="Movies"/>
  </div>
</template>

<script>
import SearchPageForm from "./components/SearchPageForm";
import SearchCollection from "./components/SearchCollection";
export default {
  name: "SearchPage",
  components: {
    SearchPageForm,
    SearchCollection,
  },
};
</script>

<style scoped>
</style>
