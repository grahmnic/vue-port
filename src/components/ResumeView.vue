<template>
  <div class="container w-100 h-100 py-5 d-flex justify-content-center align-items-center">
    <div class="resume-wrapper w-100 h-100">
      <resume-top />
      <skills />
      <experience />
      <about-me />
      <projects />
      <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
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
  position: relative;
  overflow: hidden;
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

  &:active {
    .ocean {
      display: block;
      animation: rise 4s;
    }
  }

  @keyframes rise {
    from {height: 5%}
    to {height: calc(100% + 242px)}
  }

  .ocean {
    position: absolute;
    bottom: -242px;
    left: 0;
    height: 5%;
    width: 100%;
    background: $orange;
    z-index: 5;

    .wave {
      background: url(../assets/wave.svg) repeat-x; 
      position: absolute;
      top: -198px;
      width: 6400px;
      height: 198px;
      animation: wave 2s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
      transform: translate3d(0, 0, 0);
    }
    .wave:nth-of-type(2) {
      top: -175px;
      animation: wave 2s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
      opacity: 1;
    }
  }
}
</style>
