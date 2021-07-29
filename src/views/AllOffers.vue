<template>
  <div class="allOffers">
    <div class="allOffers__card">
      <errorAlert v-if="ALL_OFFERS.err"></errorAlert>
      <offerCard
        v-else
        v-for="offer in ALL_OFFERS.data"
        :key="offer.id"
        :offerInfo="offer"
      />
    </div>
  </div>
</template>

<script>
import offerCard from "../components/offerCard.vue";
import errorAlert from "../components/error/error.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AllOffers",
  components: {
    offerCard,
    errorAlert,
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