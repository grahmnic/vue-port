<template>
  <div class="resume-skills px-3" @mouseenter="hover" @mouseleave="leave" @click="changeView">
      <div class="view-title m-2" :class="{'offwhite': isHovered}">
        Skills
      </div>
      <div class="w-100">
        <gloss :activate="isHovered" section="skills" :blobs="blobs2" :height="1"/>
        <bar class="py-2" :activate="isHovered" section="bar1" :progress="95" :color="'orange'" />
        <gloss :activate="isHovered" section="skills" :blobs="blobs3" :height="1"/>
        <bar class="py-2" :activate="isHovered" section="bar2" :progress="90" :color="'orange'" />
        <gloss :activate="isHovered" section="skills" :blobs="blobs4" :height="1"/>
        <bar class="py-2" :activate="isHovered" section="bar3" :progress="75" :color="'orange'" />
        <gloss :activate="isHovered" section="skills" :blobs="blobs6" :height="1"/>
        <bar class="py-2" :activate="isHovered" section="bar5" :progress="50" :color="'orange'" />
        <gloss :activate="isHovered" section="skills" :blobs="blobs7" :height="1"/>
        <bar class="py-2" :activate="isHovered" section="bar6" :progress="45" :color="'orange'" />
      </div>
  </div>
</template>

<script>
import Gloss from '../util/Gloss.vue'
import Bar from '../util/Bar.vue'
import { mapGetters } from 'vuex'

export default {
    name: "skills",
    components: {
        Gloss,
        Bar
    },
    data: () => {
        return {
            blobs2: [
                {color: 'light', size: '4'},
                {color: 'none', size: '8'},
            ],
            blobs3: [
                {color: 'light', size: '3'},
                {color: 'none', size: '9'},
            ],
            blobs4: [
                {color: 'light', size: '4'},
                {color: 'none', size: '8'},
            ],
            blobs6: [
                {color: 'light', size: '3'},
                {color: 'light', size: '4'},
                {color: 'none', size: '5'},
            ],
            blobs7: [
                {color: 'light', size: '5'},
                {color: 'none', size: '7'},
            ]
        }
    },
    methods: {
        hover() {
            this.$store.commit('hover:setSkills', true)
        },
        leave() {
            this.$store.commit('hover:setSkills', false)
        },
        changeView() {
            this.$store.commit('view:set', 'skills-view')
        }
    },
    computed: {
        ...mapGetters([
            'skillHovered'
        ]),
        isHovered() {
            return this.skillHovered;
        }
    }
}
</script>

<style lang="scss">
.resume-skills {
    grid-area: rs;
    cursor: pointer;
    transition: all 0.5s ease-out;
    position: relative;
}
</style>