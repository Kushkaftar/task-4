<template>
  <div class="mt-2 pa-2 offers-card">
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card
          class="offerCard"
          :elevation="hover ? 24 : 6"
          :to="`offer/${offerInfo.id}`"
          link
          height="200"
        >
          <v-card-title class="offerCard-title">
            {{ offerInfo.name }}
          </v-card-title>
          <div class="">
            <v-card-text
              class="offerCard-geo"
              v-for="geo in offerInfo.goals"
              :key="geo.country"
            >
              geo: {{ geo.country }} revenue {{ geo.publisher_revenue }}
              {{ geo.currency }}
            </v-card-text>
          </div>
          <v-card-text class="offerCard-text">{{
            offerInfo.description
          }}</v-card-text>
        </v-card>
      </template>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "offerCard",
  data: () => ({
    show: false,
  }),
  props: {
    offerInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.offerCard {
  display: flex;
}
.offerCard-title {
  width: 400px;
  word-break: keep-all;
}
.offerCard-geo {
  width: 200px;
}
.offerCard-text {
  overflow: hidden;
}
</style>