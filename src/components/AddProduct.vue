<template>
    <form class="add-product">
        <label for="name">Nome</label>
        <input type="text" id="name" name="name" v-model="product.name">

        <label for="price">Preço (R$)</label>
        <input type="text" id="price" name="price" v-model="product.price">

        <label for="photos">Fotos </label>
        <input type="file" id="photos" name="photos" multiple ref="photos" >

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
                photos: null,
                sold: "false"
            }
        }
    },
    methods: {
        formatProduct() {
            const form = new FormData();
            const files = this.$refs.photos.files;

            for (let i = 0; i < files.length; i++){
                form.append(files[i].name, files[i])
            }
            form.append("name", this.product.name);
            form.append("price", this.product.price);
            form.append("description", this.product.description);
            form.append("user", this.$store.state.user.id);

            return form;

        },
        addProductItem() {
            const product = this.formatProduct();
            api.post("/product", product).then(() => {
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