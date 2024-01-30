<template>
  <section class="user">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{name:'user'}">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{name:'shopping'}">Compras</router-link>
        </li>
        <li>
          <router-link :to="{name:'sales'}">Vendas</router-link>
        </li>
        <li>
          <router-link :to="{name:'edit'}">Editar Usuário</router-link>
        </li>
        <li>
          <button @click.prevent="logout" to="/">Deslogar</button>
        </li>

        <transition mode="out-in">
            <router-view></router-view>
        </transition>
      </ul>
    </nav>
    <p>página do usuario {{ $store.state.user }}</p>
  </section>
</template>
<script>
export default {
    name: "user-view",
    methods: {
        logout() {
            this.$store.dispatch("logout")
            this.$router.push("/login")
        }
    }
};
</script>
<style></style>
