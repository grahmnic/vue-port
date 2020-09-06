<template>
  <div class="resume-experience w-100 px-3 border-default" @mouseenter="hover" @mouseleave="leave" @click="changeView">
    <div class="view-title m-2" :class="{'offwhite': isHovered}">
      Experience
    </div>
    <gloss :activate="isHovered" section="experience" :height="1.25" :blobs="blobs1"/>
    <gloss :activate="isHovered" section="experience" :height="1.25" :blobs="blobs2"/>
  </div>
</template>

<script>
import Gloss from '../util/Gloss.vue'
import { mapGetters } from 'vuex'

export default {
    name: "experience",
    components: {
      Gloss
    },
    data() {
      return {
          blobs1: [
              {color: 'orange', size: 4},
              {color: 'none', size: 6.5},
              {color: 'light', size: 1.5},
              {color: 'light', size: 3},
              {color: 'none', size: 7},
              {color: 'light', size: 2},
              {color: 'dark', size: 4},
              {color: 'dark', size: 8},
              {color: 'dark', size: 5},
              {color: 'dark', size: 4},
              {color: 'dark', size: 3},
              {color: 'none', size: 12}
          ],
          blobs2: [
              {color: 'orange', size: 5},
              {color: 'none', size: 5},
              {color: 'light', size: 2},
              {color: 'dark', size: 3},
              {color: 'dark', size: 5},
              {color: 'none', size: 2.5},
              {color: 'light', size: 1.5},
              {color: 'dark', size: 5},
              {color: 'dark', size: 7},
          ],
      }
    },

    methods: {
        hover() {
            this.$store.commit('hover:setExperience', true)
        },
        leave() {
            this.$store.commit('hover:setExperience', false)
        },
        changeView() {
            this.$store.commit('view:set', 'experience-view')
        }
    },
    computed: {
        ...mapGetters([
            'experienceHovered'
        ]),
        isHovered() {
            return this.experienceHovered;
        }
    }
}
</script>

<style lang="scss">
.resume-experience {
    grid-area: re;
    cursor: pointer;
    transition: all 0.5s ease-out;
    position: relative;
}
</style>