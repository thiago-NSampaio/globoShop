<template>
  <div class="product" v-if="product">
    <router-link  class="product-img" :to="{ name: 'product', params: { id: product.id } }">
      <img
        v-if="product.photos"
        :src="product.photos[0].src"
        :alt="product.photos[0].title"
      />
    </router-link>
    <div class="info">
      <p class="preco">{{ product.price | numberPrice }}</p>
      <h2 class="title">{{ product.name }}</h2>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "ItemProduct",
  props: ["product"],
};
</script>
<style>
.product {
  display: grid;
  gap: 20px;
  grid-template-columns: minmax(100px, 200px) 1fr;
  margin-bottom: 40px;
  position: relative;
}

.info {
  align-self: end;
}

.product-img {
  border-radius: 4px;
  height: 100px;
  overflow: hidden;
}
</style>
