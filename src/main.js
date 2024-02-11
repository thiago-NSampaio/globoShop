import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PageLoading from "./components/PageLoading.vue"
import ErrorNotification from "./components/ErrorNotification.vue"


Vue.config.productionTip = false

// Componentes Globais.
Vue.component("ErrorNotification", ErrorNotification)
Vue.component("PageLoading", PageLoading)

Vue.filter("numberPrice", price => {
  price = Number(price)
  if (!isNaN(price)) {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency:"BRL"
    })
  } else {
    return ""
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
