import Vue from 'vue'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueHorizontalTimeline from "vue-horizontal-timeline"

library.add(faGithub, faInstagram, faLinkedin, faEnvelope, faMobileAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false
Vue.use(VueFullPage)
Vue.use(VueMaterial)
Vue.use(VueHorizontalTimeline)

new Vue({
  render: h => h(App)
}).$mount('#app')
