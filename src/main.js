import Vue from 'vue'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'


library.add(faGithub, faInstagram)


Vue.config.productionTip = false
Vue.use(VueFullPage)
Vue.use(VueMaterial)

new Vue({
  render: h => h(App)
}).$mount('#app')
