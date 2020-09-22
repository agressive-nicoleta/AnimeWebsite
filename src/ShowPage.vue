<template>
  <div>
    <ShowPageHeader/>
    <ShowDescriptionCard />
  </div>
</template>

<script>
import ShowPageHeader from "./components/ShowPageHeader";
import ShowDescriptionCard from "./components/ShowDescriptionCard";

export default {
  name: "ShowPage",
  components: {
    ShowPageHeader,
    ShowDescriptionCard
  }
};
</script>

<style scoped>
</style>