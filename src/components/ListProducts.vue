<template>
    <section class="products-container">
        <div v-if="products && products.length" class="products">
            <div class="product" v-for="(product, index) in products" :key="index">
                <router-link :to="{ name:'product', params:{id:product.id} }">
                    <img v-if="product.photos" :src="product.photos[0].src" :alt="product.photos[0].title">
                    <p class="price">{{ product.price | numberPrice}}</p>
                    <h2 class="title">{{ product.name }}</h2>
                    <p>{{ product.description }}</p>
                </router-link>
            </div>
            <PaginationProducts :totalProducts="totalProducts" :productPages="productPages"/>
        </div>
        <div v-else-if="products && products.length ===0">
            <p class="no-results">Busca sem resultados. Use outro termo</p>
        </div>
        <div v-else>
            <PageLoading />
        </div>
    </section>
</template>

<script>
import { api } from "../services/api";
import { serialize } from "../utils/helpers";
import PageLoading from "./PageLoading.vue";
import PaginationProducts from "./PaginationProducts.vue";

export default {
    
    name: "ListProducts",
    components: {
    PaginationProducts,
    PageLoading
},
    data() {
        return {
            products: null,
            productPages: 6,
            totalProducts: 0
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
            this.products = null;
            api.get(this.url).then(res => {
                    // Extrai a quantitade total de itens da requisição.
                    this.totalProducts = Number(res.headers["x-total-count"]);
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

<style scoped>
.products-container{
    max-width: 1000px;
    margin: 0 auto;
}
.products{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 30px;
    margin: 30px;
}

.product{
    box-shadow: 0 4px 8px rgba(30,60,90,0.1);
    padding: 10px;
    background: #fff;
    border-radius: 4px;
}

.product:hover{
    box-shadow: 0px 6px 12px rgba(30,60,90,0.2);
    transform: scale(1.1);
    position: relative;
    z-index: 1;
}

.product img{
    border-radius: 4px;
    margin-bottom: 20px;
}

.title{
    margin-bottom: 10px;
}

.price{
    color: #e80;
}

.no-results{
    text-align: center;
}
</style>