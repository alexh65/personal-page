<template>
  <div id="header">
    <h1>Alex Hoang</h1>
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/favourite">Favourite</router-link>
    </div> -->
    <div class="social" >
      <a href="https://github.com/alexh65"><font-awesome-icon :icon="['fab', 'instagram']" size="2x"/></a>
      <a href="https://www.instagram.com/lexotterly/"><font-awesome-icon :icon="['fab', 'github']" size="2x" /></a>
    </div>
  </div>
</template>

<style scoped>
#header {
  background-color: #FFC300;
  margin: 0;
  display: flex;
  flex-direction: column;
}

h1 {
  padding: 2vw;
  font-family: Bock;
  font-size: 4.8vw;
  text-align: center;
  line-height: 4vw;
}

#header > .social {
  flex: 1;
  text-align: center;
}
svg{
  color: black;
  margin: 5px;

}
</style>