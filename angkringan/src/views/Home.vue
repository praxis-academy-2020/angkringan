<template>
  <div>
    <!-- minuman -->
    <v-container class="my-5">
      <v-row>
        <v-col v-for="card in minuman" :key="card.id" cols="12" md="4" sm="6">
          <v-card class="pa-2" outlined tile>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              @click="addItemToCard(card), (snackbar = true)"
            >
              <v-card-title>{{ card.item }}</v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-title>Rp. {{ card.harga }}</v-card-title>
              <v-btn
                @click="addItemToCard(card), (snackbar = true)"
                class="mx-6"
                color="primary"
                >Pesan</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- Makanan -->
    <v-container class="my-5">
      <v-row>
        <v-col v-for="card in makanan" :key="card.id" cols="12" md="4" sm="6">
          <v-card
            @click="addItemToCard(card), (snackbar = true)"
            class="pa-2"
            outlined
            tile
          >
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>{{ card.item }}</v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-title>Rp. {{ card.harga }}</v-card-title>
              <v-btn
                @click="addItemToCard(card), (snackbar = true)"
                class="mx-6"
                color="primary"
                >Pesan</v-btn
              >
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
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      snackbar: false,
      text: "Yeay! Success add to cart",
      timeout: 2000
    };
  },
  components: {},
  computed: {
    minuman() {
      return this.$store.getters.getDataM;
    },
    makanan() {
      return this.$store.getters.getData;
    }
  },
  methods: {
    ...mapActions(["addItemToCard"])
  }
};
</script>
