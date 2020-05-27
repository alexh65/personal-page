<template>
  <div id="header">
    <h1>Alex Hoang</h1>
    <div class="social" >
      <a href="https://www.instagram.com/lexotterly/"><font-awesome-icon :icon="['fab', 'instagram']" size="2x"/></a>
      <a href="https://github.com/alexh65"><font-awesome-icon :icon="['fab', 'github']" size="2x" /></a>
      <a href="https://www.linkedin.com/in/nhu-hoang-77b02b19a/"><font-awesome-icon :icon="['fab', 'linkedin']" size="2x" /></a>
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

ul {
  padding: 5px;
  text-align: center;
  font-size: 1.5vw;
  line-height: 1.5vw;
  font-weight: bold;
}

#header > .social {
  padding-top: 2vw;
  flex: 1;
  text-align: center;
}
svg{
  color: black;
  margin: 5px;
}
</style>