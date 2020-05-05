<template>
  <div id="header">
    <h1>Alex Hoang</h1>
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/favourite">Favourite</router-link>
    </div> -->
    <div class="social" >
      <a href="https://github.com/alexh65"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
      <a href="https://www.instagram.com/lexotterly/"><font-awesome-icon :icon="['fab', 'github']" /></a>
    </div>
  </div>
</template>

<style scoped>
#header {
  background-color: #FFC300;
  margin: 0;
}

h1 {
  padding: 2vw;
  font-family: Bock;
  font-size: 4.8vw;
  text-align: center;
  line-height: 4vw;
}
</style>