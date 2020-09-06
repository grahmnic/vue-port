<template>
  <div class="resume-projects w-100 py-2 px-3" @mouseenter="hover" @mouseleave="leave" @click="changeView">
    <div class="view-title m-2" :class="{'offwhite': isHovered}">
      Projects
    </div>
    <container class="my-3" :isHovered="isHovered">
        <gloss :activate="isHovered" section="projects" :height="1" :blobs="blobs1"/>
        <gloss :activate="isHovered" section="projects" :height="0.75" :blobs="blobs2"/>
    </container>
    <container class="my-3" :isHovered="isHovered">
        <gloss :activate="isHovered" section="projects" :height="1" :blobs="blobs1"/>
        <gloss :activate="isHovered" section="projects" :height="0.75" :blobs="blobs2"/>
    </container>
    <container class="my-3" :isHovered="isHovered">
        <gloss :activate="isHovered" section="projects" :height="1" :blobs="blobs1"/>
        <gloss :activate="isHovered" section="projects" :height="0.75" :blobs="blobs2"/>
    </container>
  </div>
</template>

<script>
import Gloss from '../util/Gloss.vue'
import Container from '../util/Container.vue'
import { mapGetters } from 'vuex'

export default {
    name: "projects",
    components: {
      Gloss,
      Container
    },
    data() {
      return {
          blobs1: [
              {color: 'orange', size: 3},
              {color: 'none', size: 9},
              {color: 'dark', size: 4},
              {color: 'dark', size: 8},
              {color: 'light', size: 6},
              {color: 'dark', size: 2.5},
              {color: 'dark', size: 3.5},
          ],
          blobs2: [
              {color: 'none', size: 10},
              {color: 'orange', size: 1},
              {color: 'light', size: 1},
          ]
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
</style>