<template>
  <div id="header">
    <h1>Alex Hoang</h1>
    <div class="content">
      <div class="contact">
        <font-awesome-icon :icon="['fas', 'envelope']" />
        <p>nhuhoang1012@gmail.com</p>
      </div>
      <div class="contact"> 
        <font-awesome-icon :icon="['fas', 'mobile-alt']" />
        <p>(778)858-2565</p>
      </div>
      <div class="social" >
        <a href="https://www.instagram.com/lexotterly/"><font-awesome-icon :icon="['fab', 'instagram']" size="2x"/></a>
        <a href="https://github.com/alexh65"><font-awesome-icon :icon="['fab', 'github']" size="2x" /></a>
        <a href="https://www.linkedin.com/in/nhu-hoang-77b02b19a/"><font-awesome-icon :icon="['fab', 'linkedin']" size="2x" /></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
#header {
  background-color: #FFC300;
  margin: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
p{
  margin: 0;
  margin-left: 5px;
  margin-right:5px;
}

.contact {
  padding-bottom: 10px;
}

h1 {
  margin-top: 1vw;
  padding: 2vw;
  font-family: Bock;
  font-size: 4.8vw;
  text-align: center;
  line-height: 4vw;
}

.content {
  position: absolute;
  bottom: 0;
  margin-bottom:1vw;
  font-size:1vw;
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