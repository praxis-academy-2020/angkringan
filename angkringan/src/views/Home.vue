<template>
  <div>
    <v-container fluid>
      <div>
        <div>
          <v-row dense>
            <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
              <v-card>
                <v-img
                  :src="card.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <v-card-title v-text="card.title"></v-card-title>
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
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      cards: [
        {
          title: "Nasi Goreng",
          src:
            "https://images.unsplash.com/photo-1581184953963-d15972933db1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=574&q=80",
          flex: 4,
        },
        {
          title: "Mie Goreng",
          src:
            "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=597&q=80",
          flex: 4,
        },
        {
          title: "Nasi Kucing",
          src:
            "https://images.unsplash.com/photo-1570275239925-4af0aa93a0dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
          flex: 4,
        },
        {
          title: "Indomie Kuah",
          src:
            "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          flex: 4,
        },
        {
          title: "Americano",
          src:
            "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          flex: 4,
        },
        {
          title: "Teh anget",
          src:
            "https://images.unsplash.com/photo-1563700773890-3327bbe728ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=605&q=80",
          flex: 4,
        },
        {
          title: "Es Jeruk",
          src:
            "https://images.unsplash.com/photo-1572874272417-c06a8ad7d402?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          flex: 4,
        },
        {
          title: "Capuccino",
          src:
            "https://images.unsplash.com/photo-1503481766315-7a586b20f66d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=735&q=80",
          flex: 4,
        },
        {
          title: "Susu",
          src:
            "https://images.unsplash.com/photo-1588710929895-6ee7a0a4d155?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
          flex: 4,
        },
        {
          title: "Kopi Item",
          src:
            "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
          flex: 4,
        },
        {
          title: "Es Teh",
          src:
            "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80",
          flex: 4,
        },
        {
          title: "Air Mineral",
          src:
            "https://images.unsplash.com/photo-1567960148693-2868d9a9b4ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          flex: 4,
        },
      ],
    };
  },
  components: {},
};
</script>
