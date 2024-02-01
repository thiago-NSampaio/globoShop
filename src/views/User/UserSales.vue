<template>
    <section>
      <div v-if="sales.length > 0">
        <h2>Vendas</h2>
        <div class="product-wrapper" v-for="sale, index in sales" :key="index">
          <ItemProduct v-if="sale.product" :product="sale.product">
            <p class="buyer"><span>Comprador:</span> {{ sale.buyer_id }}</p>
          </ItemProduct>
          <div class="delivery-address">
            <h3>Entrega:</h3>
            <ul v-if="sale.address">
              <li v-for="value, key in renamedAddress(sale.address)" :key="key">
                {{ key }} : {{ value }}
              </li>
            </ul>
          </div>
          <hr class="solid" />
        </div>
      </div>
      <h2 v-else>Poxa! Você ainda não realizou nenhuma venda. 💔</h2>
    </section>
  </template>

<script>
import ItemProduct from "@/components/ItemProduct.vue";
import { mapState } from "vuex";
import { api } from "@/services/api";

export default {
  name: "user-shopping-view",
  components: {
    ItemProduct,
  },
  data() {
    return {
      sales: null,
    };
  },
  computed: {
    ...mapState({ user: "user", login: "login" }), // Fix the computed syntax
  },
  methods: {
    getSales() {
      api.get(`/transaction?buyer_id=${this.user.id}`).then((res) => {
        this.sales = res.data;
      });
      },
      // Atribui novas chaves para o objeto address
      renamedAddress(address) {
      return {
        "CEP": address.postalCode,
        "Rua": address.street,
        "Número": address.number,
        "Bairro": address.neighborhood,
        "Estado": address.state
      };
    },
  },
  watch: {
    login() {
      this.getSales();
    },
  },
  created() {
    if (this.login) {
      this.getSales();
    }
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}

.product-wrapper {
  margin-bottom: 40px;
}

.buyer span {
  color: #e80;
}

.delivery-address {
  display: grid;
  gap: 20px;
  grid-template-columns: minmax(100px, 200px) 1fr;
  margin-bottom: 60px;
}

h3 {
  justify-self: end;
  margin: 0;
}

hr.solid {
  border-top: 1px solid #f4f7fc;
}

</style>
