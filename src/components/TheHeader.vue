<template>
    <header>
        <nav>
            <router-link to="/" class="logo">
                <img src="../assets/GloboShop.svg" alt="GloboShop">
            </router-link>
            <!-- Verifica se o usuário está logado para exibir o nome dele ou 'Vender / Login' -->
            <router-link v-if="$store.state.login" class="btn" to="/user">{{ name }}</router-link>
            <router-link v-else class="btn" to="/login">Vender / Login</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: "TheHeader",
    computed: {
        name() {
            // Extrai apenas o primeiro nome do usuário.
            return this.$store.state.user.name.replace(/ .*/,"")
        }
    }
    }
</script>

<style scoped>
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    box-shadow: 0 2px 4px rgba(30,60,90,0.1);
}
.logo{
    padding: 10px 0;
}

.logo img{
    width: 300px;
}
</style>

