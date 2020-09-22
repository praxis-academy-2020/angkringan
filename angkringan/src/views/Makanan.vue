<template>
  <div>
    <v-main>
      <v-container fluid>
        <v-row dense>
          <v-col v-for="makanan in makanans" :key="makanan.id" cols="12" md="3">
            <v-card>
              <v-img
                :src="makanan.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                @click="addItemToCard(makanan), (snackbar = true)"
              >
                <v-card-title>{{ makanan.item }}</v-card-title>
              </v-img>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-card-title>Rp. {{ makanan.harga }}</v-card-title>
                <v-btn
                  @click="addItemToCard(makanan), (snackbar = true)"
                  class="mx-6"
                  color="primary"
                >
                  Pesan
                  <!-- <v-icon>mdi-cart</v-icon> -->
                </v-btn>
                <v-snackbar v-model="snackbar" :timeout="timeout">
                  {{ text }}
                  <template v-slot:action="{ attrs }">
                    <v-btn
                      color="red darken-2"
                      text
                      v-bind="attrs"
                      @click="snackbar = false"
                      >Close</v-btn
                    >
                  </template>
                </v-snackbar>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Makanan",
  components: {},
  data() {
    return {
      snackbar: false,
      text: "Yeay! Success add to cart",
      timeout: 2000
    };
  },
  computed: {
    makanans() {
      return this.$store.getters.getData;
    }
  },
  methods: {
    ...mapActions(["addItemToCard"])
  }
};
</script>

<style></style>
