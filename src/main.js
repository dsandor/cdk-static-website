import Vue from 'vue'
import App from './App.vue'
import VueCodeHighlight from 'vue-code-highlight';

Vue.use(VueCodeHighlight)

new Vue({
  el: '#app',
  render: h => h(App)
})
