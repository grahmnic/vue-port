import Vue from 'vue'
import Vuex from 'vuex'

// STORE MODULES
import hover from './hover'
import component from './component'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        hover,
        component
    }
})