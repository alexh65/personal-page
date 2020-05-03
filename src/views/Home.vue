<template>
  <div class="parent md-layout md-alignment-center-center">
    <div class="intro">
      <img alt="Vue logo" src="../assets/selfie.png">
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
.parent {
  height: 80vh;
}
.intro {
  font-size: 1.7vw;
  background-color: #287cbd;
  width: 70%;
  align-items: center;
  padding: 20px;
}
</style>
