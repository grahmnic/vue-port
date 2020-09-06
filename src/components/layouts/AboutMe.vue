<template>
  <div class="resume-about-me w-100 py-2 px-3 border-default" @mouseenter="hover" @mouseleave="leave" @click="changeView">
    <div class="view-title m-2" :class="{'offwhite': isHovered}">
      About Me
    </div>
    <container class="my-2 mr-2 d-inline-block" :isHovered="isHovered" :width="45">
      <gloss :activate="isHovered" section="about-me" :height="1" :blobs="blobs1"/>
    </container>
    <gloss :activate="isHovered" class="d-inline-block" section="about-me" :height="1.25" :blobs="blobs2" :width="50"/>
    <gloss :activate="isHovered" class="d-inline-block" section="about-me" :height="1" :blobs="blobs3" :width="50"/>
    <container class="my-2 ml-2 d-inline-block" :isHovered="isHovered" :width="45">
      <gloss :activate="isHovered" section="about-me" :height="1" :blobs="blobs1"/>
    </container>
  </div>
</template>

<script>
import Gloss from '../util/Gloss.vue'
import Container from '../util/Container.vue'
import { mapGetters } from 'vuex'

export default {
    name: "about-me",
    components: {
      Gloss,
      Container
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
              {color: 'orange', size: 3},
              {color: 'none', size: 3},
              {color: 'orange', size: 6},
              {color: 'dark', size: 12},
              {color: 'dark', size: 3},
              {color: 'orange', size: 6},
              {color: 'light', size: 3},
          ],
          blobs3: [
              {color: 'light', size: 3},
              {color: 'light', size: 3},
              {color: 'dark', size: 6},
              {color: 'orange', size: 12},
              {color: 'none', size: 3},
              {color: 'dark', size: 6},
              {color: 'light', size: 3},
              {color: 'dark', size: 1.5},
              {color: 'light', size: 2.5},
              {color: 'light', size: 5},
              {color: 'orange', size: 3},
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

<style lang="scss">
.resume-about-me {
    grid-area: ra;
    cursor: pointer;
    transition: all 0.5s ease-out;
    position: relative;
}
</style>