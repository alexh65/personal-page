<template>
  <div id="header">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <h1>Alex Hoang</h1>
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/favourite">Favourite</router-link>
    </div> -->
    <div class="social">
      <a href="#" class="fa fa-instagram fa-2x"></a>
      <a href="#" class="fa fa-github fa-2x"></a>
    </div>
  </div>
</template>

<style scoped>
#header {
  background-color: #FFC300;
  margin: 0;
}

.social {
  bottom: 0;
  margin: 2vh;
  position: absolute;
  display: flex;
  justify-content: center;
  color: black;
}

h1 {
  padding: 2.8vw;
  font-family: Bock;
  font-size: 4.8vw;
  text-align: center;
}

</style>