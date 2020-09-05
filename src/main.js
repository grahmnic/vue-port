import Vue from 'vue'
import App from './App.vue'
import store from './components/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faCaretDown
 } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCaretDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
