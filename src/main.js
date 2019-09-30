import Vue from 'vue';
import App from './App.vue';
import Home from './Home.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.component('home', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})
