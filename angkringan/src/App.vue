<template>
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
  </v-app>
</template>

<script>
import Appbar from "./components/Appbar";
import Footer from "./views/Footer";

export default {
  name: "App",

  components: {
    Appbar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
.Grd {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
</style>
