<template>
  <div id="app">
    <Header/>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <Home class="section"/>
      <Favourite class="section"/>
    </full-page>
  </div>
</template>

<script>
import Header from './components/Header'
import Home from './components/Home'
import Favourite from './components/Favourite'

export default {
  name:"App",
  components: {
    Header,
    Home,
    Favourite
  },
  data() {
    return {
      options: {
        scrollingSpeed: 500,
        anchors:['intro', 'favourite'],
        scrollHorizontally: true
      }
    }
  }
}
</script>
<style>
* {
  margin: 0 !important;
}

#app {
  font-family:Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #EA79A8;
  flex: 1;
  display: flex;
}

body {
  background: #EA79A8;
  display: flex;
  height: 100vh;
}

@font-face {
  font-family: Bock;
  src: url(./assets/Bock-LjjG.otf)
}

.fp-table {
  position: relative;
}
</style>
