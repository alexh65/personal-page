<template>
  <div class="parent">
    <div id="intro">
      <img alt="My Selfie" src="../assets/selfie.png">
      <p>Hello there! Welcome to my website! I'm a fourth-year Software System student at 
        Simon Fraser University, Vancouver, BC. I'm interested in full-stack development 
        and graphic design, neither of which I'm entirely good at. However, I am passionate and 
        willing to learn new things. Please take a look down below to understand me a little
        bit better
      </p>
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
  font-size: 1.7vw;
  background-color: #287cbd;
  width: 65%;
  padding: 20px;
  margin: 0;
  top: 50%;
}

p {
  padding-top: 2vh;
}
</style>
