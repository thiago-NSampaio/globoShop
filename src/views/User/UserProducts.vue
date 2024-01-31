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
                <button class="delete" @click="deleteProduct(product.id)"></button>
            </ItemProduct>
        </li>
        </transition-group>
    </section>
</template>
<script>
import AddProduct from "@/components/AddProduct.vue";
import ItemProduct from "@/components/ItemProduct.vue";
import { api } from "@/services/api";

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
        ...mapActions(["getUserProducts"]),
        deleteProduct(id) {
            const resp = window.confirm("Deseja remover este produto?")
            if (resp) {
                api.delete(`/product/${id}`).then(() => {
                    this.getUserProducts()
                }).catch(error => {
                    alert(error.response)
                })
            }
        }
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

.delete{
    position: absolute;
    top: 0px;
    right: 0px;
    background: url("../../assets/remove.svg") no-repeat center center;
    width: 24px;
    height: 24px;
    text-indent: -140px;
    overflow: hidden;
    cursor: pointer;
    border: none;
}

</style>