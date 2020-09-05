<template>
  <div class="resume-projects w-100 py-2 px-3" @mouseenter="hover" @mouseleave="leave" @click="changeView">
    <div class="view-title m-2" :class="{'offwhite': isHovered}">
      Projects
    </div>
    <div class="resume-container">
        <gloss :activate="isHovered" section="projects" :height="1.25" :blobs="blobs1"/>
    </div>
  </div>
</template>

<script>
import Gloss from '../util/Gloss.vue'
import { mapGetters } from 'vuex'

export default {
    name: "projects",
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
      }
    },

    methods: {
        hover() {
            this.$store.commit('hover:setProjects', true)
        },
        leave() {
            this.$store.commit('hover:setProjects', false)
        },
        changeView() {
            this.$store.commit('view:set', 'projects-view')
        }
    },
    computed: {
        ...mapGetters([
            'projectsHovered'
        ]),
        isHovered() {
            return this.projectsHovered;
        }
    }
}
</script>

<style lang="scss">
.resume-projects {
    grid-area: rp;
    cursor: pointer;
    transition: all 0.5s ease-out;
    position: relative;
}

.resume-container {
  border-radius: 2.5px;
  border: 1px solid $light-gray;
}
</style>