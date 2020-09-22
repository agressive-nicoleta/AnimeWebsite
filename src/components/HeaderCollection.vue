<template>
  <div class="collection-box">
    <div class="collection">
      <ul class="collection-types">
        <li>
          <HeaderCollection collectionName="Most popular"></HeaderCollection>
          <ul class="anime-list">
            <li>
              <BrowseCard></BrowseCard>
            </li>
            <li>
              <BrowseCard></BrowseCard>
            </li>
            <li>
              <BrowseCard></BrowseCard>
            </li>
            <li>
              <BrowseCard></BrowseCard>
            </li>
            <li>
              <BrowseCard></BrowseCard>
            </li>
            <li>
              <BrowseCard></BrowseCard>
            </li>
          </ul>
        </li>
        <li>
          <HeaderCollection></HeaderCollection>
          <ul class="anime-list">
            <li>
              <BrowseCard></BrowseCard>
            </li>
            <li>
              <BrowseCard></BrowseCard>
            </li>
            <li>
              <BrowseCard></BrowseCard>
            </li>
            <li>
              <BrowseCard></BrowseCard>
            </li>
            <li>
              <BrowseCard></BrowseCard>
            </li>
            <li>
              <BrowseCard></BrowseCard>
            </li>
          </ul>
        </li>
        <li>
          <HeaderCollection></HeaderCollection>
          <ul class="anime-list">
            <li>
              <BrowseCard></BrowseCard>
            </li>
            <li>
              <BrowseCard></BrowseCard>
            </li>
            <li>
              <BrowseCard></BrowseCard>
            </li>
            <li>
              <BrowseCard></BrowseCard>
            </li>
            <li>
              <BrowseCard></BrowseCard>
            </li>
            <li>
              <BrowseCard></BrowseCard>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BrowseHeaderCollection from "./BrowseHeaderCollection";
import BrowseCard from "./BrowseCard";
export default {
  name: "HeaderCollection",
  components: {
    BrowseHeaderCollection,
    BrowseCard
  },
  props: {
    name: String
  }
};
</script>

<style scoped>
.collection-types {
  list-style-type: none;
  margin: 0;
}
.anime-list {
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
}
.anime-list li {
  list-style: none;
  padding-left: 20px;
  padding-bottom: 10px;
}
</style>