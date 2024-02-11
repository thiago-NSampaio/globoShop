<template>
    <section>
        <h2>Crie a sua Conta</h2>
        <transition mode="out-in">
            <button v-if="!create" class="btn" @click="create = true">Criar Conta</button>
            <UserForm v-else>
                <button class="btn btn-form" @click.prevent="createUser">Criar Usuário</button>
            </UserForm>
        </transition>
        <ErrorNotification :errors="errors"/>

    </section>
</template>

<script>
import UserForm from "../components/UserForm.vue"
import ErrorNotification from "./ErrorNotification.vue";
export default {
    name: "SignUp",
    components: {
    UserForm,
    ErrorNotification
},
    data() {
        return {
            create: false,
            errors: []
        }
    },
    methods: {
        async createUser() {
            this.errors = [];
            try {
                await this.$store.dispatch("createUser", this.$store.state.user);
                await this.$store.dispatch("loginUser", this.$store.state.user);
                await this.$store.dispatch("getUser");
                 this.$router.push({name:"user"})
            } catch (error) {
                this.errors.push(error)
            }
        }
    }
}
</script>

<style scoped>
    h2{
        text-align: center;
        margin-top: 40px;
        margin-bottom: 10px;
    }

    .btn{
        margin-left: auto;
        margin-right: auto;
    }

    .btn-form{
        width: 100%;
    }
    
</style>