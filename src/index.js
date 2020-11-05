// JS
import './js/'

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')
import vSelect from 'vselect-component'
import VueRouter from "vue-router";
import VueMask from 'v-mask'
import { VuejsDatatableFactory } from 'vuejs-datatable';
import VueKinesis from 'vue-kinesis'
import VueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(VueSmoothScroll, {
  duration: 1000,
  updateHistory: false
})
Vue.use(VueKinesis)
Vue.use( VuejsDatatableFactory );
Vue.use(VueMask);
Vue.use(VueRouter)
Vue.use(vSelect)


window.EventBus = new Vue();

// Vue components (for use in html)
const Main = Vue.component('Main', require('./components/Main.vue').default)
const MHeader = Vue.component('MHeader', require('./components/MHeader.vue').default)
const MFooter = Vue.component('MFooter', require('./components/MFooter.vue').default)
const MapMain = Vue.component('MapMain', require('./components/MapMain.vue').default)
const About = Vue.component('About', require('./components/About.vue').default)

const routes = [
  { path: '/', component: Main },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes
})

// Vue init
const app = new Vue({
  router
}).$mount('#app')
