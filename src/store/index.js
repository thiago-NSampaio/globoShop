import { api } from '@/services/api';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  // Estado inicial da aplicação, contendo informações sobre o login e o usuário.
  state: {
    login: false, // Indica se o usuário está autenticado ou não.
    user: {       // Informações do usuário quando estiver autenticado.
      id: "",
      name: "",
      email: "",
      password: "",
      postalCode: "",
      street: "",
      number:"",
      neighborhood: "",
      city: "",
      state: ""
    },
    user_products: null
  },
  getters: {
  },
  // Mutations são responsáveis por modificar o estado de forma síncrona.
  mutations: {
    // Mutation para atualizar o estado de 'login'.
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    // Mutation para atualizar o estado do 'usuário'.
    UPDATE_USER(state, payload) {
      // Manter outros objetos quando o update acontecer.
      state.user = Object.assign(state.user,payload);
    },
    UPDATE_USER_PRODUCTS(state, payload) {
      state.user_products= payload;
    },
    ADD_USER_PRODUCTS(state, payload) {
      state.user_products.unshit(payload)
    }
  },
  // Actions contêm lógica de negócios e chamam as mutations para modificar o estado.
  actions: {
    // Obter informações do usuário usando a API.
    getUser(context) {
      // Faz uma chamada à API para obter informações do usuário com o ID fornecido.
      api.get(`/user`).then(res => {
        // Chama a mutation para atualizar o estado 'user' com os dados obtidos.
        context.commit("UPDATE_USER", res.data)
        // Chama a mutation para atualizar o estado 'login' para true.
        context.commit("UPDATE_LOGIN", true)
      })
    },

    // Cria o usuário.
    createUser(context, payload) {
      context.commit("UPDATE_USER",{id:payload.email})
      api.post("/user", payload);
    },
    getUserProducts(context) {
      api.get(`/product?user_id=${context.state.user.id}`).then(res => {
        context.commit("UPDATE_USER_PRODUCTS", res.data)
      })
    },
    loginUser(context, payload) {
      return api.login({
        username: payload.email,
        password: payload.password,
      }).then(res => {
        window.localStorage.token = `Bearer ${res.data.token}`;
      })
    },
    // Reseta as propriedades do usuário.
    logout(context) {
      context.commit("UPDATE_USER", {
        id: "",
        name: "",
        email: "",
        password: "",
        postalCode: "",
        street: "",
        number:"",
        neighborhood: "",
        city: "",
        state: ""
      })
      window.localStorage.removeItem("token")
      context.commit("UPDATE_LOGIN",false)
    }
  },
  modules: {
  }
});
