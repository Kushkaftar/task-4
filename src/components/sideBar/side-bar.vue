<template>
  <v-navigation-drawer :mini-variant="mini" fixed permanent>
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-list-item class="px-2" link v-bind="attrs" v-on="on">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
          </v-list-item-content>
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
    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link @click="sideBarMini()">
        <v-list-item-icon>
          <v-icon v-if="mini">mdi-arrow-right-bold-outline</v-icon>
          <v-icon v-else>mdi-arrow-left-bold-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Свернуть</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { Storage } from "../../utils/localStorage";

export default {
  name: "sideBar",
  data() {
    return {
      items: [
        {
          title: "Все офферы",
          icon: "mdi-star-box-multiple-outline",
          link: "/offers",
        },
        { title: "Статистика", icon: "mdi-chart-line", link: "/" },
        { title: "Контакты", icon: "mdi-account-group-outline", link: "/" },
      ],
      mini: true,
    };
  },
  methods: {
    sideBarMini() {
      const lStorage = new Storage();
      lStorage.setInStorage("sideBarIsMini", !this.mini);
      this.mini = lStorage.getInStorage("sideBarIsMini");
    },
    setSideBarMini() {
      const lStorage = new Storage();
      this.mini = lStorage.getInStorage("sideBarIsMini");
    },
  },
  mounted() {
    this.setSideBarMini();
  },
};
</script>

<style>
</style>