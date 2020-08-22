<template>
  <div class="container w-100 h-100 py-5 d-flex justify-content-center align-items-center">
    <div class="resume-wrapper w-100 h-100">
      <resume-top />
      <skills />
      <experience />
      <about-me />
      <projects />
    </div>
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
  max-width: 45rem !important;
  @include box-shadow-primary();
  border-radius: 4px;
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
  "rs rs rp rp rp"
  "ra ra rp rp rp"
  "ra ra rp rp rp"
  "ra ra rp rp rp";
}
</style>
