<template>
  <div class="parent">
    <div id="intro">
      <img alt="My Selfie" src="../assets/selfie.png">
      <p>Hello there! Welcome to my website! I'm a fourth-year Software System student at 
        Simon Fraser University, BC. I'm interested in full-stack web development, UI/UX 
        and graphic design, none of which I'm entirely good at. However, I am passionate and 
        willing to learn new things. Please take a look down below to understand me a little
        bit better.
      </p>
      <p>(Disclaimer: The page will look its best in fullscreen)</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home'
}
</script>

<style scoped>
img {
  width: 30%;
  border-radius: 5px;
}
#intro {
  font-size: 2vw;
  line-height: 2vw;
  background-color: #287cbd;
  width: 85%;
  padding: 10px;
  top: 50%;
  text-align: center;
  border-radius: 5px;
}

p {
  padding-top: 10px;
}
</style>
