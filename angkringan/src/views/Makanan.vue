<template>
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
  data() {
    return {
      makananList: []
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
