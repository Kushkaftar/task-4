<template>
  <!-- <div class="">mainWrapper</div> -->
  <v-app>
    <sideBar />

    <v-main>
      <v-container class="aff-container">
        <appBar />
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import sideBar from "./sideBar/side-bar.vue";
import appBar from "./appBar/appBar.vue";

export default {
  name: "mainWrapper",
  components: {
    sideBar,
    appBar,
  },
};
</script>

<style>
</style>