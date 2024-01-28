<template>
    <section class="login">
        <h1>Login</h1>
        <form action="">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" v-model="login.email">
            <label for="password">Senha</label>
            <input type="password" name="password" id="password" v-model="login.password">
            <button class="btn" @click.prevent="enter">Logar</button>
        </form>
        <p class="lost">
            <a href="/" target="_blank">Perdeu a senha? Clique aqui</a>
        </p>
        <SignUp/>
    </section>

</template>

<script>
import SignUp from "@/components/SignUp.vue"

export default {
    name: "login-view",
    data() {
        return {
            login: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        enter() {
            this.$store.dispatch("getUser", this.login.email);
            this.$router.push({name:"user"})
        }
    },
    components: {
        SignUp
    }
    }
</script>

<style scoped>
    form{
        display: grid;
    }

    .login{
        max-width: 500px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .btn{
        width: 100%;
        max-width: 300px;
        margin-left: auto;
        margin-right: auto;
    }

    .lost{
        text-align: center;
        margin: 20px auto 0 auto;
    }

    .lost a:hover{
        color: #87f;
        text-decoration: underline;
    }

    h1{
        text-align: center;
        font-size: 2rem;
        margin-top: 40px;
        color: #87f;
    }
</style>