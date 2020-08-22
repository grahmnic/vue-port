<template>
  <div class="resume-skills py-3 px-3" @mouseenter="skillHover" @mouseleave="skillLeave">
      <gloss :activate="isHovered" section="skills" :blobs="blobs"/>
      <bar class="py-2" :activate="isHovered" section="bar1" :progress="85" />
      <bar class="py-2" :activate="isHovered" section="bar2" :progress="80" />
      <bar class="py-2" :activate="isHovered" section="bar3" :progress="65" />
      <bar class="py-2" :activate="isHovered" section="bar4" :progress="40" />
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
            blobs: [
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
            ]
        }
    },
    methods: {
        skillHover() {
            this.$store.commit('hover:setSkills', true)
        },
        skillLeave() {
            this.$store.commit('hover:setSkills', false)
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
}
</style>