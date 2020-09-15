<template>
    <div>
        <h2>{{ dataMakanan }}</h2>
    </div>
</template>
<script>
export default {
    name: "Makanan",
    data() {
        return {
            makananList: []
        }
    },
    methods: {
        
    },
    computed: {
        dataMakanan(){
            return this.$store.state.products.makanan;
        }
    },
}
</script>
