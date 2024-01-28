import { api } from '@/services/api';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
      neighborhood: "",
      city: "",
      state: ""
    }
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
      state.user = payload;
    }
  },
  // Actions contêm lógica de negócios e chamam as mutations para modificar o estado.
  actions: {
    // Action para obter informações do usuário usando a API.
    getUser(context, payload) {
      // Faz uma chamada à API para obter informações do usuário com o ID fornecido.
      api.get(`/user/${payload}`).then(res => {
        // Chama a mutation para atualizar o estado 'user' com os dados obtidos.
        context.commit("UPDATE_USER", res.data)
        // Chama a mutation para atualizar o estado 'login' para true.
        context.commit("UPDATE_LOGIN", true)
      })
    }
  },
  modules: {
  }
});
