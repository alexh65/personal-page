<template>
  <div id="app">
    <Header/>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <Home class="section"/>
      <Time class="section"/>
      <Projects class="section"/>
      <Favourite class="section"/>
      <Inspire class="section"/>
    </full-page>
  </div>
</template>

<script>
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Time from './components/Time'
import Favourite from './components/Favourite'
import Inspire from './components/Inspire'
export default {
  name:"App",
  components: {
    Header,
    Home,
    Projects,
    Time,
    Favourite,
    Inspire
  },
  data() {
    return {
      options: {
        navigation: true,
        autoScrolling:true,
        scrollingSpeed: 500,
        scrollHorizontally: true
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
#app {
  font-family: 'Roboto Mono', sans-serif;
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
::-webkit-scrollbar {
  width: 0px;  /* Remove scrollbar space */
  background: transparent;  /* Optional: just make scrollbar invisible */
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, .1);
  border-radius: 25px;
}
</style>
