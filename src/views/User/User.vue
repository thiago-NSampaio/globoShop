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

      </ul>
    </nav>
    <transition mode="out-in">
        <router-view></router-view>
    </transition>
    <!-- <p>página do usuario {{ $store.state.user }}</p> -->
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
<style scoped>
.user{
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  max-width: 900px;
  margin: 40px auto;
  grid-gap: 30px;
  padding: 20px;
}

@media screen and(max-width: 500px){
    .user{
    grid-template-columns: 1fr;
    margin: 0px auto;
  }
}

.sidenav a,
.sidenav button{
    padding: 10px;
    display: block;
    background: #f4f7fc;
    margin-bottom: 10px;
    border-radius: 4px;
  }
  .sidenav a.router-link-exact-active,
  .sidenav a:hover,
  .sidenav button:hover{
    background: #87ef;
    color: #fff;
  }

  .sidenav button{
    border: none;
    width: 100%;
    font-size: 1rem;
    text-align: left;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;

  }
</style>
