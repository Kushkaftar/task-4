<template>
  <div class="">
    Offer id {{ $route.params.id }}
    {{ offer }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Offer",
  components: {},
  data: () => ({
    offer: {},
  }),
  methods: {
    getOfferInfo(id) {
      this.offer = this.ALL_OFFERS.data.filter((el) => el.id === id);
    },
  },
  computed: {
    ...mapGetters(["ALL_OFFERS"]),
  },
  mounted() {
    this.getOfferInfo(+this.$route.params.id);
  },
};
</script>

<style>
</style>