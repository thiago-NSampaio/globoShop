<template>
    <section>
        <div  v-if="product" class="product">
            <ul class="photos" v-if="product.photos">
                <li v-for="(photo, index) in product.photos" :key="index">
                <img :src="photo.src" :alt="photo.title">
            </li>
            </ul>

            <div class="info">
                <h1>{{ product.name }}</h1>
                <p class="price">{{ product.price | numberPrice}}</p>
                <p class="description">{{ product.description }}</p>
                <transition mode="out-in" v-if="product.sold === 'false'">
                    <button class="btn" v-if="!finish" @click="finish = true">Comprar</button>
                    <CheckoutBuy v-else :product="product" />
                </transition>

                <button class="btn btn-disabled" v-else disabled>Produto Vendido</button>
            </div>
        </div>
        <PageLoading v-else/>
    </section>
</template>

<script>
import PageLoading from '@/components/PageLoading.vue';
import CheckoutBuy from '@/components/CheckoutBuy.vue';

import { api } from '@/services/api';

export default {
    name: "product-view",
    props: ["id"],
    data() {
        return {
            product: null,
            finish: false
        };
    },
    methods: {
        getProduct() {
            api.get(`/product/${this.id}`).then(res => {
                this.product = res.data;
            });
        }
    },
    created() {
        this.getProduct();
    },
    components: { PageLoading, CheckoutBuy }
};
</script>

<style scoped>
    .product{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
        max-width: 900px;
        padding: 60px 20px;
        margin: 0 auto;
    }

    .price{
        color: #e80;
        font-weight: bold;
        font-size: 1.5rem;
        margin-bottom:40px;
    }

    .description{
        font-size: 1.2rem;
    }

    .photos{
        grid-row: 1 / 3;
    }

    .info{
        position: sticky;
        top: 20px;
    }

    img{
        margin-bottom: 30px;
        box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
        border-radius: 8px;
    }

    .btn{
        margin-top: 60px;
        width: 200px;
    }

    @media screen and (max-width:500px){
        .product{
            grid-template-columns: 1fr;
        }

        .photos{
            grid-row: 2;
        }
        .info{
            position: initial;
        }
    }
</style>