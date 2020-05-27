<template>
<div>
  <h1>Favourites</h1>
  <div id="interest">
    <iframe src="https://open.spotify.com/embed/playlist/6szTJJxvBcMBqIct5V13OB" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    <div id="movies" class="md-layout md-gutter"> 
      <div v-for="film in films" :key="film" class="md-layout-item film_item">
        <img :src="film.url" class="film_img"/>
        <p class="film_desc">{{film.desc}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Favourite",
  data() {
    return{
      films: [
        {
          url: require('../assets/film/1.jpg'),
          desc: 'Love the retro aesthetic of the movie + the use of technology to build the narrative'
        },
        {
          url: require('../assets/film/2.jpg'),
          desc: 'Surprisingly hilarious drama about a couple going through a divorce'
        },
        {
          url: require('../assets/film/3.jpg'),
          desc: "Plot twist: The Movie. The best movie I've watched this year"
        }
      ]
    }
  }
}
</script>

<style scoped>
img {
  width: 18vw;
}
iframe {
  padding-bottom: 20px;
  width: 40vw;
}

.film_desc {
  position: absolute;
  padding: 20% 5%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(25, 26, 27, 0.82);
  color: #fff;
  visibility: hidden;
  opacity: 0;

  /* transition effect. not necessary */
  transition: opacity .2s, visibility .2s;
}
.film_item:hover .film_desc {
  visibility: visible;
  opacity: 1;
}

p {
  font-size: 1.5vw;
}

.film_item {
  position: relative;
}
#interest {
  background-color: #287cbd;
  width: 75%;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
  line-height: 3vw;
}
</style>