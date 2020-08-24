<template>
  <div class="resume-skills py-3 px-3 d-flex flex-column align-items-center" @mouseenter="skillHover" @mouseleave="skillLeave">
      <div>
        <gloss :activate="isHovered" section="skills" :blobs="blobs1"/>
        <div class="py-2"></div>
        <gloss :activate="isHovered" section="skills" :blobs="blobs2"/>
        <bar class="py-2" :activate="isHovered" section="bar1" :progress="85" />
        <gloss :activate="isHovered" section="skills" :blobs="blobs3"/>
        <bar class="py-2" :activate="isHovered" section="bar2" :progress="80" />
        <gloss :activate="isHovered" section="skills" :blobs="blobs4"/>
        <bar class="py-2" :activate="isHovered" section="bar3" :progress="65" />
        <gloss :activate="isHovered" section="skills" :blobs="blobs5"/>
        <bar class="py-2" :activate="isHovered" section="bar4" :progress="40" />
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
            blobs2: [
                {color: 'light', size: '2'},
            ],
            blobs3: [
                {color: 'light', size: '3'},
            ],
            blobs4: [
                {color: 'light', size: '3'},
            ],
            blobs5: [
                {color: 'light', size: '2'},
            ],
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
    transition: all 0.5s ease-out;
    position: relative;
}
</style>