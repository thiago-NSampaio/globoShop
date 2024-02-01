<template>
  <form>
    <div class="user" v-if="showDataLogin">
      <label for="name">Nome</label>
      <input type="text" name="name" id="name" v-model="name" />
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="email" />
      <label for="password">Senha</label>
      <input type="password" name="password" id="password" v-model="password" />
    </div>
    <label for="postalCode">Cep</label>
    <input type="text" name="postalCode" id="postalCode" v-model="postalCode" @keyup="fillPostalCode"/>
    <label for="street">Rua</label>
    <input type="text" name="street" id="street" v-model="street" />
    <label for="number">Número</label>
    <input type="text" name="number" id="number" v-model="number" />
    <label for="neighborhood">Bairro</label>
    <input type="text" name="neighborhood" id="neighborhood" v-model="neighborhood" />
    <label for="city">Cidade</label>
    <input type="text" name="city" id="city" v-model="city" />
    <label for="state">Estado</label>
    <input type="text" name="state" id="state" v-model="state" />
    <div class="button">
        <!-- Conteúdo virá externamente para o slot. -->
        <slot></slot>
    </div>
  </form>
</template>
<script>
import { plugin } from "@/utils/plugin"
import { getPostalCode } from "@/services/cep";

export default {
  name: "UserForm",
  computed: {
    ...plugin({
      fields: ["name","email", "password", "postalCode", "street", "number", "neighborhood", "city", "state"],
      base: "user",
      mutation: "UPDATE_USER"
    }),
    showDataLogin() {
      return !this.$store.state.login || this.$route.name === 'edit';
      
    }
  },
  methods: {
    fillPostalCode() {
      const postalCode = this.postalCode.replace(/\D/g, "");
      if (postalCode.length === 8) {
        getPostalCode(postalCode).then(res => {
          this.street = res.data.logradouro;
          this.neighborhood = res.data.bairro;
          this.state = res.data.uf;
          this.city = res.data.localidade;

        })
      }
    }
  }
};
</script>
<style scoped>
form, .user {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}

.user{
  grid-column: 1 / 3;
}
.button {
  grid-column: 2;
  margin-top: 10px;
}

</style>
