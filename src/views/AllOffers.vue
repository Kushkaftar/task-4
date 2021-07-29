<template>
  <div class="allOffers">
    <div class="allOffers__card">
      <offerCard
        v-for="offer in ALL_OFFERS"
        :key="offer.id"
        :offerInfo="offer"
      />
    </div>
  </div>
</template>

<script>
import offerCard from "../components/offerCard.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AllOffers",
  components: {
    offerCard,
  },
  methods: {
    ...mapActions(["GET_ALL_OFFERS"]),
  },
  computed: {
    ...mapGetters(["ALL_OFFERS"]),
  },
  mounted() {
    this.GET_ALL_OFFERS();
  },
};
</script>

<style>
</style>