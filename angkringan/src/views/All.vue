<template>
  <div>
    <h1>halaman semua</h1>
    <div v-for="n in dataM" :key="n.id">
      <div v-for="a in n" :key="a.id">
        {{ a.item }} || {{ a.harga }} || {{ a.deskripsi }}
      </div>
    </div>
    <br />
    <div v-for="n in datMM" :key="n.id">
      <div v-for="a in n" :key="a.id">
        {{ a.item }} || {{ a.harga }} || {{ a.deskripsi }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    dataM() {
      let dataM = this.$store.getters.getData;
      return dataM;
    },
    datMM() {
      let dataMM = this.$store.getters.getDataM;
      return dataMM;
    }
  }
};
</script>

<style></style>
