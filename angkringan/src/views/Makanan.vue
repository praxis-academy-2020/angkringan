<template>

  <div>
    <v-main>
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="makanan in makanans"
            :key="makanan.title"
            :cols="makanan.flex"
          >
            <v-card>
              <v-img
                :src="makanan.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="makanan.title"></v-card-title>
              </v-img>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-cart</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  <div>
    <h1>saya makan</h1>
    <div v-for="n in dataMakanan" :key="n.id">
      <div v-for="a in n" :key="a.id">
        {{ a.item }} || {{ a.harga }} || {{ a.deskripsi }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Makanan",
  components: {},
  data() {
    return {
       makananList: [],
      makanans: [
        {
          title: "Nasi Goreng",
          src:
            "https://images.unsplash.com/photo-1581184953963-d15972933db1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=574&q=80",
          flex: 3,
        },
        {
          title: "Mie Goreng",
          src:
            "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=597&q=80",
          flex: 3,
        },
        {
          title: "Indomie Kuah",
          src:
            "https://images.unsplash.com/photo-1598977700511-fe0707d5eae6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          flex: 3,
        },
        {
          title: "Nasi Kucing",
          src:
            "https://images.unsplash.com/photo-1570275239925-4af0aa93a0dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
          flex: 3,
        },
      ],
    };
  },
  methods: {},
  computed: {
    dataMakanan() {
      return this.$store.getters.getData;
    }
  }
};
</script>

<style></style>
