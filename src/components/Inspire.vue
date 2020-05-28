<template>
  <div>
    <h1>The People who Inspire Me</h1>
    <div id="inspire">
      <div>
        <img src="../assets/inspire/matt.jpg" alt="Matt D'Avella - Film maker, minimlalist">
        <p><b>Matt D'Avella - Film maker, minimalist.</b> He's a down-to-earth guy who inspires people to live life with a purpose. 
          He once made a video about his struggle to find success post-college, and I use his story as a drive to find my own success.</p>
      </div>
      <div>
        <img src="../assets/inspire/lauren.jpg" alt="Lauren Singer - Environmental activist, entrepreneur">
        <p><b>Lauren Singer - Environmental activist, entrepreneur.</b> She's known for fitting all of her trash inside of a mason jar.
          After watching one of her videos, I become highly aware of our influence on the environment and decide to live
          a more sustainable lifestyle.  </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Inspire"
}
</script>

<style scoped>
p {
  font-size: 1.4vw;
}
#inspire {
  background-color: #287cbd;
  width: 80%;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
  line-height: 1.4vw;
}
</style>