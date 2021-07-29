<template>
  <v-card>
    <v-card-title class="text-h5">
      {{ mess.title }}
    </v-card-title>

    <v-card-text> {{ mess.text }} </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="red darken-1" text @click="$emit('closeMessage')">
        close
      </v-btn>

      <v-btn
        color="green darken-1"
        text
        @click="$emit('messageIsRead', mess.id)"
      >
        next
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "message",
  props: {
    mess: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>