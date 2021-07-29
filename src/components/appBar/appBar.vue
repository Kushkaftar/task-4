<template>
  <header>
    <v-container class="appBar-container">
      <div class="appBar-flex">
        <v-toolbar-title>v-toolbar-title</v-toolbar-title>
        <span>sub title</span>
      </div>
      <v-spacer></v-spacer>
      <v-col class="m-0">
        <v-text-field
          class="mt-4"
          dense
          solo
          label="Search"
          prepend-inner-icon="mdi-magnify"
          append-icon="mdi-tune-variant"
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <div class="appBar-flex">
        <v-btn icon large>
          <v-icon large>mdi-message-text-outline</v-icon>
        </v-btn>

        <v-badge color="green" :content="countMessage" overlap>
          <v-btn icon large @click="dialog = true">
            <v-icon large>mdi-bell-outline</v-icon>
          </v-btn>
        </v-badge>
      </div>
      <div class="">
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-list-item
              class="px-2 ml-7 header-img-item"
              link
              v-bind="attrs"
              v-on="on"
            >
              <v-list-item-avatar>
                <v-img
                  src="https://randomuser.me/api/portraits/men/78.jpg"
                ></v-img>
              </v-list-item-avatar>
            </v-list-item>
          </template>

          <v-list>
            <v-list-item link>
              <v-list-item-title>Мой профиль</v-list-item-title>
            </v-list-item>

            <v-list-item link>
              <v-list-item-title>Выйти</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <!-- TODO: countMessage возврашает стороку если длинна массива с сообщениями
      равна 0 -->
      <v-dialog v-model="dialog" max-width="500" v-if="countMessage > 0">
        <message
          :mess="showMessage"
          @closeMessage="closeMessage"
          @messageIsRead="messageIsRead"
        ></message>
      </v-dialog>
    </v-container>
  </header>
</template>

<script>
import message from "../message/message.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "appBar",
  components: {
    message,
  },
  data: () => ({
    message: null,
    dialog: false,
  }),
  methods: {
    ...mapMutations(["MESSAGE_IS_READ"]),
    messageIsRead(id) {
      this.MESSAGE_IS_READ(id);
    },
    closeMessage() {
      this.dialog = false;
    },
  },
  computed: {
    ...mapGetters(["ALL_MESSAGE"]),
    countMessage() {
      let len = this.ALL_MESSAGE.filter((el) => el.isRead === false).length;
      len = len ? len : "0";

      return len;
    },
    showMessage() {
      const message = this.ALL_MESSAGE.find((el) => el.isRead === false);
      return message;
    },
  },
};
</script>

<style>
.header-img-item {
  width: 5em;
}
</style>