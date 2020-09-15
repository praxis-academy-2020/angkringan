<template>
  <!-- <div>
    <v-card color="grey lighten-4" flat height="200px" tile>
      <v-toolbar dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Angkringan 4.0</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
    </v-card>
  </div> -->
  <div>
    <nav>
      <v-toolbar flat app>
        <v-app-bar-nav-icon
          class="grey--text"
          @click="drawer = true"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">Angkringan</span>
          <span> 4.0</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item
              v-for="link in links"
              :key="link.text"
              :to="link.route"
            >
              <v-list-item-icon>
                <v-icon>{{ link.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-home", text: "Home", route: "/" },
        { icon: "mdi-hamburger", text: "Makanan", route: "/makanan" },
        { icon: "mdi-hamburger", text: "Minuman", route: "/minuman" },
      ],
    };
  },
};
</script>

<style></style>
