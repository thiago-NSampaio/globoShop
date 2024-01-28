<template>
  <div id="app">
    <TheHeader />
    <main>
      <router-view/>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue"
import TheFooter from "./components/TheFooter"

export default {
  components: {
    TheHeader,
    TheFooter
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

input, textarea{
  border-radius: 4px;
  border: none;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30,30,90, 0.1);
  transition: all 0.3s;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 15px;
}

input:focus,
input:hover, 
textarea:hover,
textarea:focus{
  outline: none;
  box-shadow: 0px 6px 12px rgba(30,30,90, 0.2);
  border-color: #87f;
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
