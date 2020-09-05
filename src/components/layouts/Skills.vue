<template>
  <div class="resume-skills px-3 py-1" @mouseenter="hover" @mouseleave="leave" @click="changeView">
      <div class="w-100">
        <div class="py-2"></div>
        <gloss :activate="isHovered" section="skills" :blobs="blobs2"/>
        <bar class="py-2" :activate="isHovered" section="bar1" :progress="85" />
        <gloss :activate="isHovered" section="skills" :blobs="blobs3"/>
        <bar class="py-2" :activate="isHovered" section="bar2" :progress="80" />
        <gloss :activate="isHovered" section="skills" :blobs="blobs4"/>
        <bar class="py-2" :activate="isHovered" section="bar3" :progress="65" />
        <gloss :activate="isHovered" section="skills" :blobs="blobs5"/>
        <bar class="py-2" :activate="isHovered" section="bar4" :progress="40" />
        <gloss :activate="isHovered" section="skills" :blobs="blobs6"/>
        <bar class="py-2" :activate="isHovered" section="bar5" :progress="40" />
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
            blobs6: [
                {color: 'light', size: '4'}
            ],
            blobs7: [
                {color: 'light', size: '2'}
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