<template>
  <div id="app">
    <div class="portfolio-wrapper w-100 h-100 container py-5 d-flex justify-content-center align-items-center">
      <div class="inner-wrapper w-100 h-100">
        <component v-bind:is="component" />
        <div id="ocean" class="ocean">
          <div class="wave"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResumeView from './components/ResumeView.vue'
import SkillsView from './components/SkillsView'
import ProjectsView from './components/ProjectsView'
import ExperienceView from './components/ExperienceView'
import AboutMeView from './components/AboutMeView'
import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

export default {
  name: 'App',
  components: {
    ResumeView,
    SkillsView,
    ProjectsView,
    ExperienceView,
    AboutMeView
  },
  data: function() {
    return {
      component: 'resume-view'
    }
  },
  computed: {
    view() {
      return this.$store.state.component.view
    }
  },
  watch: {
    view: {
      handler() {
        let e = document.querySelector('#ocean')
        e.classList.remove('page-transition-out')
        e.classList.add('page-transition-in')
        setTimeout(function() {
          this.component = this.view;
          e.classList.remove('page-transition-in')
          e.classList.add('page-transition-out')
        }.bind(this), 2000)
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  background: $white;

  .portfolio-wrapper {
    .inner-wrapper {
      max-width: 45rem !important;
    
      border-radius: 5px;
      position: relative;
      overflow: hidden;

      .page-transition-in {
        animation: rise 2s cubic-bezier(0.85, 0, 0.15, 1) forwards;
      }

      .page-transition-out {
        animation: sink 2s cubic-bezier(0.85, 0, 0.15, 1) forwards;
      }

      @keyframes rise {
        from {height: 5%}
        to {height: calc(100% + 242px)}
      }

      @keyframes sink {
        from {height: calc(100% + 242px)}
        to {height: calc(5%)}
      }

      .ocean {
        position: absolute;
        bottom: -242px;
        left: 0;
        height: 5%;
        width: 100%;
        background: $orange;
        z-index: 5;

          .wave {
            background: url(./assets/wave.svg) repeat-x; 
            position: absolute;
            top: -198px;
            width: 6400px;
            height: 198px;
            animation: wave 1.5s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
            transform: translate3d(0, 0, 0);
          }
          // .wave:nth-of-type(2) {
          //   top: -175px;
          //   animation: wave 1s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 1.5s ease -1.25s infinite;
          //   opacity: 1;
          // }
        }
      }
  }
}
</style>
