<template>
    <form class="add-product">
        <label for="name">Nome</label>
        <input type="text" id="name" name="name" v-model="product.name">

        <label for="price">Preço (R$)</label>
        <input type="text" id="price" name="price" v-model="product.price">

        <label for="photos">Fotos </label>
        <input type="file" id="photos" name="photos" ref="photos" >

        <label for="nome">Descrição</label>
        <textarea type="text" id="description" name="description" v-model="product.description"></textarea>
        <input class="btn" type="button"  value="Adicionar Produto" @click.prevent="addProductItem">
    </form>
</template>
<script>
import { api } from '@/services/api';

export default {
    name: "AddProduct",
    data() {
        return {
            product: {
                name:"",
                price: "",
                description: "",
                photos:null
            }
        }
    },
    methods: {
        formatProduct() {
            this.product.user_id = this.$store.state.user.id;
        },
        addProductItem() {
            this.formatProduct();
            api.post("/product", this.product).then(() => {
                this.$store.dispatch("getUserProducts")
            })
        }
    }
}
</script>
<style scoped>
    .add-product {
  align-items: center;
  display: grid;
  grid-template-columns: 100px 1fr;
  margin-bottom: 60px;
}

.btn {
  grid-column: 2;
}
</style>