<template>
    <form>
        <input name="search" id="search" type="text" v-model="search">
        <input type="submit" name="seek" id="find" @click.prevent="findProducts">
    </form>
</template>

<script>
export default {
    name: "SearchProducts",
    data() {
        return {
            search:""
        }
    },
    methods: {
        findProducts() {
            this.$router.push({query:{q:this.search }})
        }
    }
    }
</script>

<style>
</style>