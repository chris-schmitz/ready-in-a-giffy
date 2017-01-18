import Vue from 'vue'
import App from './App.vue'

require('./style/base.scss');

new Vue({
  el: '#app',
  render: h => h(App)
})
