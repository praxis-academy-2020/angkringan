<template>
  <div>
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
      minumanList: []
    };
  },
  methods: {},
  computed: {
    dataMinum() {
      return this.$store.getters.getDataM;
    }
  }
};
</script>
