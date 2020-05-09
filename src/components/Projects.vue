<template>
  <div id="projects">
    <h1>Past projects</h1>
    <div>
      <div v-for="project in projects" v-bind:key="project.id">
        <md-card @click.native="myGo(project)" md-with-hover>
          <md-card-header>
            <div class="md-title">{{project.name}}</div>
          </md-card-header>
          <md-card-content>
            {{project.description}}
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name:'Projects',
  data() {
    return {
      projects: []
    }
  },
  created() {
    axios.get('https://api.github.com/users/alexh65/repos')
    .then(res => this.projects = res.data)
    .catch(err => err.console.log("Problem with getting github projects: " + err))
  },
  methods: {
    myGo: (project) => {
      window.location.href=project.html_url
    }
  }
}
</script>

<style>
.fp-tableCell {
  flex-direction: column;
}
.md-card {
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 10%;
  margin-right: 10%;
}
</style>