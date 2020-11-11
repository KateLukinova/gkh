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
import Tabs from 'vue-nav-tabs/dist/vue-tabs.js'
import 'vue-nav-tabs/themes/vue-tabs.css'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


Vue.use(VueSmoothScroll, {
  duration: 1000,
  updateHistory: false
})
Vue.use(VueKinesis)
Vue.use( VuejsDatatableFactory );
Vue.use(VueMask);
Vue.use(VueRouter)
Vue.use(vSelect)
Vue.use(Tabs)
Vue.use(VueSlickCarousel)


window.EventBus = new Vue();

// Vue components (for use in html)
const Main = Vue.component('Main', require('./components/Main.vue').default)
const MHeader = Vue.component('MHeader', require('./components/MHeader.vue').default)
const MFooter = Vue.component('MFooter', require('./components/MFooter.vue').default)
const SocIcons = Vue.component('MFooter', require('./components/MFooter.vue').default)
const MapMain = Vue.component('MapMain', require('./components/MapMain.vue').default)
const MainTabs = Vue.component('MainTabs', require('./components/MainTabs.vue').default)
const Quiz = Vue.component('Quiz', require('./components/Quiz.vue').default)
const Register = Vue.component('Quiz', require('./components/Register.vue').default)
const SelectView = Vue.component('Quiz', require('./components/SelectView.vue').default)
const CaseCard = Vue.component('Quiz', require('./components/CaseCard.vue').default)
const Login = Vue.component('Quiz', require('./components/Login.vue').default)
const ButtonsComponent = Vue.component('ButtonsComponent', require('./components/ButtonsComponent.vue').default)
const About = Vue.component('About', require('./components/About.vue').default)

const routes = [
  { path: '/', component: Main },
  { path: '/about', component: About },
  { path: '/case-card', component: CaseCard }
]

const router = new VueRouter({
  routes
})

// Vue init
const app = new Vue({
  router
}).$mount('#app')
