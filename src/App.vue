<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name:"App",
  components: {
    Header
  }
}
</script>
<style>
#app {
  font-family:Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #EA79A8;
  flex:1;
}

body {
  background: #EA79A8;
  display: -ms-flex; 
  display: -webkit-flex; 
  display: flex; 
}

@font-face {
  font-family: Bock;
  src: url(./assets/Bock-LjjG.otf)
}
</style>
