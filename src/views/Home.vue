<template>
  <section>
    <h1>Compre ou venda</h1>
    <SearchProducts />
    <ListProducts />
  </section>
</template>

<script>
import SearchProducts from '@/components/SearchProducts.vue';
import ListProducts from '@/components/ListProducts.vue';

export default {
    name: 'home-view',
    components: { SearchProducts, ListProducts }
}
</script>

<style scoped>
h1{
  color: #87f;
  margin-top: 40px;
  font-size: 2rem;
  text-align: center;
}
</style>
