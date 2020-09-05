<template>
  <div class="resume-about-me w-100 py-3 px-3 d-flex flex-column align-items-center" @mouseenter="hover" @mouseleave="leave" @click="changeView">
    <gloss :activate="isHovered" section="about-me" :blobs="blobs1"/>
  </div>
</template>

<script>
import Gloss from '../util/Gloss.vue'
import { mapGetters } from 'vuex'

export default {
    name: "about-me",
    components: {
      Gloss
    },
    data() {
      return {
          blobs1: [
              {color: 'light', size: '3'},
              {color: 'light', size: '4'},
              {color: 'dark', size: '5'},
              {color: 'light', size: '6'},
              {color: 'light', size: '6'},
              {color: 'dark', size: '8'},
              {color: 'light', size: '4'},
              {color: 'dark', size: '3'},
              {color: 'dark', size: '3'},
              {color: 'light', size: '6'},
          ],
      }
    },

    methods: {
        hover() {
            this.$store.commit('hover:setAboutMe', true)
        },
        leave() {
            this.$store.commit('hover:setAboutMe', false)
        },
        changeView() {
            this.$store.commit('view:set', 'about-me-view')
        }
    },
    computed: {
        ...mapGetters([
            'aboutMeHovered'
        ]),
        isHovered() {
            return this.aboutMeHovered;
        }
    }
}
</script>

<style>
.resume-about-me {
    grid-area: ra;
    cursor: pointer;
    transition: all 0.5s ease-out;
    position: relative;
}
</style>