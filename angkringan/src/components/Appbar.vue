<template>
  <div>
    <v-app-bar app flat>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Angkringan</span>
        <strong>4.0</strong>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Search -->
      <v-text-field class="mx-4" flat hide-details label="Search" solo-inverted></v-text-field>
      <!-- Cart icon -->
      <v-btn icon color="grey" class="mx-10" to="/cart">
        <v-icon right>mdi-shopping</v-icon>
        <v-badge color="primary" :content="jumlah"></v-badge>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="link in links" :key="link.text" :to="link.route">
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-home", text: "Home", route: "/" },
        { icon: "mdi-food", text: "Makanan", route: "/makanan" },
        { icon: "mdi-coffee", text: "Minuman", route: "/minuman" }
      ]
    };
  },
  computed: {
    ...mapGetters(["card"]),
    jumlah() {
      return this.card.length;
    }
  }
};
</script>

<style></style>
