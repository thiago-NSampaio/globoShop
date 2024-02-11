<template lang="">
    <section>
        <h2>Endereço de Envio</h2>
        <UserForm>
            <button class="btn" @click.prevent="finishBuy">Finalizar Compra</button>
        </UserForm>
        <ErrorNotification :errors="errors"/>
    </section>
</template>
<script>
import { api } from '@/services/api';
import UserForm from './UserForm.vue';
import { mapState } from 'vuex';
import ErrorNotification from './ErrorNotification.vue';
export default {
    name: "CheckoutBuy",
    components: { UserForm, ErrorNotification },
    props: ["product"],
    computed: {
        ...mapState(["user"]),
        buy() {
            return {
                buyer_id: this.user.email,
                seller_id: this.product.user_id,
                product: this.product,
                address: {
                    postalCode: this.user.postalCode,
                    street: this.user.street,
                    number: this.user.number,
                    neighborhood: this.user.neighborhood,
                    city: this.user.city,
                    state: this.user.state
                }

            }
        }
    },
    data() {
        return {
            errors: []
        }
    },
    methods: {
        async createTransaction() {
            return api.post("/transaction", this.buy).then(() => {
                this.$router.push({name:'sales'})
            })
        },
        async createUser() {
            this.errors = []
            try {
                await this.$store.dispatch("createUser", this.$store.state.user);
                await this.$store.dispatch("loginUser", this.$store.state.user);
                await this.$store.dispatch("getUser");
                await this.createTransaction()

            } catch (error) {
                this.errors.push(error.response.data.message)
            }
        },
        finishBuy() {
            if (this.$store.state.login) {
            this.createTransaction();
                
            } else {
                this.createUser()
            }
        }
    }
}
</script>
<style scoped>
    h2{
        margin-top: 4px;
    }

    .btn{
        background: #e80;
    }
</style>