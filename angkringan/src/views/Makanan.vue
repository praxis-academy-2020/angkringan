<template>
    <div>
        <h2>{{ dataMakanan }}</h2>
        <h1>ini maknaan</h1>
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
        
        dataMakanan: function() {
            console.log(this.$store.getters.getData);
            return this.$store.getters.getData;
        }
    },
}
</script>
