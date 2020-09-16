<template>
<<<<<<< HEAD
  <v-app class="grey lighten-4">
    <Appbar />
    <v-main>
      <div class="Grd">
        <div>
          <router-view></router-view>
        </div>
        <div><p>asdasdada</p></div>
      </div>
      <!-- <v-container fluid>
      </v-container>
      <router-view></router-view> -->
    </v-main>
    <Footer />
=======
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
>>>>>>> 9fc1fc0d4848343a88ea2f6bb4fa353ef6b156ac
  </v-app>
</template>

<script>
<<<<<<< HEAD
import Appbar from "./components/Appbar";
import Footer from "./views/Footer";
=======
// import HelloWorld from "./components/HelloWorld";
>>>>>>> 9fc1fc0d4848343a88ea2f6bb4fa353ef6b156ac

export default {
  name: "App",

  components: {
<<<<<<< HEAD
    Appbar,
    Footer,
=======
    // HelloWorld
>>>>>>> 9fc1fc0d4848343a88ea2f6bb4fa353ef6b156ac
  },

  data: () => ({
    //
<<<<<<< HEAD
  }),
};
</script>
<style>
.Grd {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
</style>
=======
  })
};
</script>
>>>>>>> 9fc1fc0d4848343a88ea2f6bb4fa353ef6b156ac
