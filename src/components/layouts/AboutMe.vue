<template>
  <div class="resume-about-me w-100 py-2 px-3" @mouseenter="hover" @mouseleave="leave" @click="changeView">
    <div class="view-title m-2" :class="{'offwhite': isHovered}">
      About Me
    </div>
    <gloss :activate="isHovered" section="about-me" :height="1.25" :blobs="blobs1"/>
    <gloss :activate="isHovered" section="about-me" :height="1.25" :blobs="blobs3"/>
    <gloss :activate="isHovered" section="about-me" :height="1.25" :blobs="blobs2"/>
    <gloss :activate="isHovered" section="about-me" :height="1.25" :blobs="blobs4"/>
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
              {color: 'orange', size: 3},
              {color: 'light', size: 4},
              {color: 'dark', size: 5},
              {color: 'light', size: 6},
              {color: 'light', size: 6},
              {color: 'dark', size: 8},
              {color: 'light', size: 4},
              {color: 'dark', size: 3},
              {color: 'orange', size: 3},
              {color: 'none', size: 6},
          ],
          blobs2: [
              {color: 'orange', size: 2},
              {color: 'none', size: 4},
              {color: 'orange', size: 6},
              {color: 'dark', size: 12},
          ],
          blobs3: [
              {color: 'none', size: 12}
          ],
          blobs4: [
              {color: 'dark', size: 3},
              {color: 'orange', size: 6},
              {color: 'light', size: 3},
              {color: 'dark', size: 9},
              {color: 'light', size: 3},
              {color: 'none', size: 4},
              {color: 'dark', size: 8}
          ]
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

<style lang="scss">
.resume-about-me {
    grid-area: ra;
    cursor: pointer;
    transition: all 0.5s ease-out;
    position: relative;
}
</style>