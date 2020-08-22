import Vue from 'vue'
import Vuex from 'vuex'

// STORE MODULES
import hover from './hover'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        hover
    }
})