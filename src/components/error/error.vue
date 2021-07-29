<template>
  <v-alert prominent type="error">
    <v-row align="center">
      <v-col class="grow"> Упс, что-то пошло не так... </v-col>
      <v-col class="shrink">
        <v-btn>Take action</v-btn>
      </v-col>
    </v-row>
  </v-alert>
</template>

<script>
export default {
  name: "errorAlert",
};
</script>

<style>
</style>