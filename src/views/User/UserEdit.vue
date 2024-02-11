<template>
    <section>
        <UserForm>
            <button class="btn" @click.prevent="updateUser">Atualizar</button>
        </UserForm>
        <ErrorNotification :errors="errors"/>
    </section>
</template>
<script>
import ErrorNotification from '@/components/ErrorNotification.vue';
import UserForm from '@/components/UserForm.vue';
import {api} from '@/services/api' 
export default {
    name:"user-edit-view",
    components: { UserForm, ErrorNotification },
    data() { 
        return {
            errors: []
        }
    }, 
    methods: {
        async updateUser() {
            this.errors = []
           await api.put(`/user`, this.$store.state.user).then(() => {
                this.$store.dispatch("getUser")
                this.$router.push({name:"user"})
            }).catch(error => {
                console.log(error)
                this.errors.push(error.response.data.message)
            })
        }
    }
}
</script>
<style>
    
</style>