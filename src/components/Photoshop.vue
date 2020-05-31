<template>
  <div>
    <div id="photoshop">
      <h1>My Photoshop Work</h1>
      <div class="gallery">
        <div class="gallery-panel" v-for="photo in portfolio" :key="photo.id">
          <a :href="`${photo.url}`" target="_blank" title="Click to see full image (redirect to Flickr)">
            <img :src="thumbUrl(photo.filename)" v-on:mouseover="mouseover(photo.desc)" v-on:mouseleave="mouseleave"/>
          </a>
        </div>
      </div>
      <p id="describe">{{message}}</p>
    </div>
  </div>
</template>

<script>
  import portfolio from '../assets/portfolio.json'

  export default {
    name:'Photoshop',
    data() {
      return {
        message:"Here are the academic and personal Photoshop projects that I've done since 2013.",
        default_message: "Here are the academic and personal Photoshop projects that I've done since 2013.",
        portfolio
      }
    },
    methods: {
      thumbUrl(filename) {
        return require(`../assets/photoshop/${filename}`)
      },
      mouseover(desc) {
        this.message = desc
      },
      mouseleave(){
        this.message=this.default_message
      }
    }
  }
</script>
<style scoped>
  #photoshop{
    width: 85%;
    text-align: center;
  }

  .gallery{
    background-color: #287cbd;
    border-radius: 5px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1rem;
    padding: 2rem 2rem;
  }

  .gallery-panel img {
    width: 100%;
    height: 16vw;
    object-fit: cover;
    border-radius: 0.75rem;
  }

  #describe {
    background-color: black;
    color: white;
    min-height: 7vw;
    border-radius: 5px;
    vertical-align: middle;
    padding: 10px;
    line-height: 1.2vw;
    font-size: 1.2vw;
  }
</style>