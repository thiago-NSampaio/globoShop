<template>
    <section>
        <h2>Adicionar Produto</h2>
        <AddProduct />
        <h2>Seus Produtos</h2>
        <transition-group v-if="user_products" name="list" tag="ul">
        <li v-for="(product, index) in user_products" :key="index">
            <ItemProduct :product="product">
                <p>
                    {{ product.description }}
                </p>
        </ItemProduct>
        </li>
        </transition-group>
    </section>
</template>
<script>
import AddProduct from "@/components/AddProduct.vue";
import ItemProduct from "@/components/ItemProduct.vue";

import { mapState,mapActions } from "vuex";
export default {
    name: "user-products-view",
    components: {
        AddProduct, ItemProduct
    },
    computed: {
        ...mapState(["login","user","user_products"])
    },
    methods: {
        ...mapActions(["getUserProducts"])
    },
    watch: {
        login() {
            this.getUserProducts();
        }
    },
    created() {
        if (this.login) {
            this.getUserProducts();
        }
    }
}
</script>
<style scoped>
h2{
    margin-bottom: 2opx;
}

.list-enter-active,
.list-leave-active {
    opacity: 0;
    transform: translate3d(20ox, 0, 0);    
}

.list-enter-active,
.list-leave-active {
  transition: all .3s;
}

</style>