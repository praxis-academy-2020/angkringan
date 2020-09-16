<template>
  <div>
    <v-main>
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="minuman in minumans"
            :key="minuman.title"
            :cols="minuman.flex"
          >
            <v-card>
              <v-img
                :src="minuman.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="minuman.title"></v-card-title>
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
    <h1>halaman Minum</h1>
    <div v-for="n in dataMinum" :key="n.id">
      <div v-for="a in n" :key="a.id">
        <p>{{ a.item }} || {{ a.harga }} || {{ a.deskripsi }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Minuman",
  data() {
    return {
      minumans: [
        {
          title: "Air Mineral",
          src:
            "https://images.unsplash.com/photo-1567960148693-2868d9a9b4ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          flex: 3,
        },
        {
          title: "Capuccino",
          src:
            "https://images.unsplash.com/photo-1503481766315-7a586b20f66d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=735&q=80",
          flex: 3,
        },
        {
          title: "Americano",
          src:
            "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          flex: 3,
        },
        {
          title: "Teh anget",
          src:
            "https://images.unsplash.com/photo-1563700773890-3327bbe728ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=605&q=80",
          flex: 3,
        },
        {
          title: "Es Jeruk",
          src:
            "https://images.unsplash.com/photo-1572874272417-c06a8ad7d402?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          flex: 3,
        },
        {
          title: "Susu",
          src:
            "https://images.unsplash.com/photo-1588710929895-6ee7a0a4d155?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
          flex: 3,
        },
        {
          title: "Kopi Item",
          src:
            "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
          flex: 3,
        },
        {
          title: "Es Teh",
          src:
            "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80",
          flex: 3,
        },
      ],
    };
  },
};
</script>

<style></style>