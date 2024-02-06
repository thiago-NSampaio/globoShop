<template>
    <section>
        <div v-if="shopping">
            <h2>Compras</h2>
            <div class="product-wrapper" v-for="(buy, index) in shopping" :key="index">
                <ItemProduct v-if="buy.product" :product="buy.product">
                    <p class="seller"><span>Vendedor:</span>  {{ buy.seller_id }}</p>
                </ItemProduct>
            </div>
        </div>
    </section>
</template>
<script>
import ItemProduct from '@/components/ItemProduct.vue';
import { mapState } from 'vuex';
import { api } from '@/services/api';
export default {
    name: "user-shopping-view",
    components: {
        ItemProduct
    },
    data() {
        return {
            shopping: null
        }
    },
    computed: {
        ...mapState(["user","login"])
    },
    methods: {
        getShopping() {
            api.get(`/transaction?type=buyer_id`).then(res => {
                this.shopping = res.data;
            })
        }
    },
    watch: {
        login() {
            this.getShopping();
        }
    },
    created() {
        if (this.login) {
            this.getShopping();
        }
    }
}
</script>
<style scoped>
    .product-wrapper{
        margin-bottom: 40px;
    }

    .seller span{
        color: #e80;
    }

    h2{
        margin-bottom: 20px;
    }
</style>