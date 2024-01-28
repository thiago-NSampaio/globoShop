<template>
  <form>
    <label for="email">Email</label>
    <input type="email" name="email" id="email" v-model="email" />
    <label for="password">Senha</label>
    <input type="email" name="password" id="password" v-model="password" />
    <label for="postalCode">Cep</label>
    <input type="text" name="postalCode" id="postalCode" v-model="postalCode" />
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
export default {};
</script>
<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}
.button {
  grid-column: 2;
  margin-top: 10px;
}

</style>
