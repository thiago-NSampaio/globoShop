<template lang="">
    <section>
        <h2>Endereço de Envio</h2>
        <UserForm>
            <button class="btn" @click.prevent="finishBuy">Finalizar Compra</button>
        </UserForm>
    </section>
</template>
<script>
import { api } from '@/services/api';
import UserForm from './UserForm.vue';
import { mapState } from 'vuex';
export default {
    name: "CheckoutBuy",
    components: { UserForm },
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
    methods: {
        createTransaction() {
            return api.post("/transaction", this.buy).then(() => {
                this.$router.push({name:'sales'})
            })
        },
        async createUser() {
            try {
                await this.$store.dispatch("createUser", this.$store.state.user);
                await this.$store.dispatch("getUser", this.$store.state.user.email);
                this.$router.push({ name: "user" })

                await this.createTransaction()
            } catch (err) {
                console.log(err)
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