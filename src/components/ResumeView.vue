<template>
    <div class="resume-wrapper w-100 h-100">
      <resume-top />
      <skills />
      <experience />
      <about-me />
      <projects />
    </div>
</template>

<script>
import ResumeTop from './layouts/ResumeTop';
import Skills from './layouts/Skills.vue';
import AboutMe from './layouts/AboutMe.vue';
import Experience from './layouts/Experience.vue';
import Projects from './layouts/Projects.vue';

export default {
  name: 'resume-view',
  data: function() {
    return {
      view: String
    }
  },
  components: {
    ResumeTop,
    Skills,
    AboutMe,
    Experience,
    Projects
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.resume-wrapper {
  background-color: $dark-gray;
  display: grid;
  grid-template-rows: repeat(10, 10%);
  grid-template-columns: repeat(5, 20%);
  grid-template-areas: 
  "rt rt rt rt rt"
  "rt rt rt rt rt"
  "rs rs re re re"
  "rs rs re re re"
  "rs rs re re re"
  "rs rs rp rp rp"
  "ra ra rp rp rp"
  "ra ra rp rp rp"
  "ra ra rp rp rp"
  "ra ra rp rp rp";

  > div:not(:first-child) {
    overflow: hidden;
  }

  .offwhite {
    color: $off-white !important;

    &:first-letter {
      color: $orange;
    }
  }
  
  .view-title {
    color: $light-gray;
    font-weight: bold;
    text-transform: uppercase;
    text-align: left;
    font-size: 1.15rem;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 0.2rem;
      height: 1.15rem;
      top: 15%;
      left: -10px;
      background: $gray;
    }
  }
}
</style>
