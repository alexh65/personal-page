<template>
  <div id="app">
    <Header/>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <Home class="section"/>
      <Time class="section"/>
      <Projects class="section"/>
    </full-page>
  </div>
</template>

<script>
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Time from './components/Time'
export default {
  name:"App",
  components: {
    Header,
    Home,
    Projects,
    Time
  },
  data() {
    return {
      options: {
        autoScrolling:true,
        scrollingSpeed: 500,
        scrollHorizontally: true
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #EA79A8;
  display: flex;
}

body {
  background: #EA79A8;
  height: 100vh;
  margin: 0;
}

@font-face {
  font-family: Bock;
  src: url(./assets/Bock-LjjG.otf)
}

.fp-tableCell {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
