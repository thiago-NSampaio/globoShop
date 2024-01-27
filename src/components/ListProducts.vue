<template>
    <section class="products-container">
        <div v-for="product in products" :key="product.id">
            <img v-if="product.photos" :src="product.photos[0].src" :alt="product.photos[0].title">
            <p class="price">{{ product.price }}</p>
            <h2 class="title">{{ product.name }}</h2>
            <p>{{ product.description }}</p>
        </div>
    </section>
</template>

<script>
import {api} from "../services/api";

export default {
    
    name: "ListProducts",
    data() {
        return {
            products: []
        };
    },
    methods: {
        getProducts() {
            api.get("/product").then(res => {
                    this.products = res.data;
                });
        }
    },
    created() {
        this.getProducts();
    }
};
</script>

<style></style>