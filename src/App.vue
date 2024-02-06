<template>
  <div id="app">
    <TheHeader />
      <transition mode="out-in">
        <main>
          <router-view/>
        </main>
      </transition>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue"
import TheFooter from "./components/TheFooter"
import { api } from "./services/api";

export default {
  components: {
    TheHeader,
    TheFooter
  },
  created() {
    if (window.localStorage.token) {
      api.validateToken().then(() => {
        this.$store.dispatch("getUser")
      }).catch(err => {
        console.log(err)
        window.localStorage.removeItem("token");
      })
    }
  }
}
</script>

<style>
*{
    box-sizing: border-box;
}

body,ul,li,h1,h2,p {
    padding: 0px;
    margin: 0px;
}

ul{
    list-style: none;
}

body{
    font-family: Arial, Helvetica, sans-serif;
    color: #345;
    background: url('./assets/pattern.svg') repeat top;
}

a{
    color: #345;
text-decoration: none;
}

img{
    max-width: 100%;
    display: block;
}

.btn{
    display: block;
    padding: 10px 40px;
    background: #87f;
    border-radius: 4px;
    color: #fff;
    text-align: center;
    font-size: 1rem;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
    transition: all 0.3s;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
}

.btn:hover{
    background: #65d;
    transform: scale(1.1);
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main{
  flex: 1;
}

label{
  margin-bottom: 5px;
}

input, textarea {
  border: 1px solid white;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 15px;
  padding: 15px;
  transition: all 0.3s;
}

input:hover, textarea:hover,
input:focus, textarea:focus {
  border-color: #87f;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  outline: none;
  transition: all 0.3s;
}


.v-enter,
.v-leave-to{
  opacity: 0;
}

.v-enter{
  transform: translate3d(0, -20px, 0);
}

.v-leave-to{
  transform: translate3d(0, 20px, 0);
}

.v-enter-active,
.v-leave-activa{
  transition: all 0.3s;
}
</style>
