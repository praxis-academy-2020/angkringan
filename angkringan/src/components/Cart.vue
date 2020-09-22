<template>
  <div>
    <div v-for="it in card" :key="it.id">
      <v-card class="mx-auto" max-width="544" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">Cart</div>
            <v-list-item-title class="headline mb-1">
              {{ it.item }}
            </v-list-item-title>
            <v-list-item-subtitle>Rp. {{ it.harga }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey">
            <img
              :src="it.src"
              :alt="it.src"
              class="white--text align-end rounded-lg"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            />
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn icon @click="reduceList(it.id)">
            <v-icon>mdi-minus-box-outline</v-icon>
          </v-btn>
          <span>{{ it.qty }}</span>
          <v-btn icon @click="addList(it.id)">
            <v-icon>mdi-plus-box</v-icon>
          </v-btn>
          <v-btn icon @click="removeList(it.id)">
            <v-icon>mdi-trash-can-outline</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <v-card class="mx-auto" max-width="544" outlined>
      <v-card-title>Jumlah Pesanan : {{ jumlahPesanan }}</v-card-title>
      <v-card-title>Total: Rp. {{ total }}</v-card-title>
      <!-- <v-btn class="ma-2" tile color="primary" dark rounded>Checkout</v-btn> -->
    </v-card>
    <Checkout />
  </div>
</template>

<script>
import Checkout from "@/components/Checkout";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    Checkout
  },
  computed: {
    ...mapGetters(["card"]),
    jumlah() {
      return this.card.length;
    },
    total() {
      return this.card.reduce((a, b) => a + b.qty * b.harga, 0);
    },
    jumlahPesanan() {
      return this.card.reduce((a, b) => a + b.qty, 0);
    }
  },
  methods: {
    ...mapActions(["addList", "reduceList", "removeList"])
  }
};
</script>

<style></style>
