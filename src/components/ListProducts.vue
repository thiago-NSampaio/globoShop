<template>
    <section class="products-container">
        <div v-for="product in products" :key="product.id">
            <img v-if="product.photos" :src="product.photos[0].src" :alt="product.photos[0].title">
            <p class="price">{{ product.price }}</p>
            <h2 class="title">{{ product.name }}</h2>
            <p>{{ product.description }}</p>
        </div>
        {{ url }}
    </section>
</template>

<script>
import { api } from "../services/api";
import {serialize} from "../utils/helpers"

export default {
    
    name: "ListProducts",
    data() {
        return {
            products: [],
            productPages: 10
        };
    },
    computed: {
        url() {
            const query = serialize(this.$route.query);

            return `/product?_limit=${this.productPages}${query}`;

        }
    },
    methods: {
        getProducts() {
            api.get(this.url).then(res => {
                    this.products = res.data;
                });
        }
    },
    watch: {
        url() {
            this.getProducts();
        }
    },
    created() {
        this.getProducts();
    }
};
</script>

<style></style>