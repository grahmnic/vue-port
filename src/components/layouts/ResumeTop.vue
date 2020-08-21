<template>
  <div class="resume-top w-100 row mx-0">
    <div class="col-5 px-0">
      <div class="resume-avatar w-100 h-100">
      </div>
    </div>
    <div class="resume-info h-100 col-7">  
      <div class="float-right h-100 py-2">
        <Entypo class="h-25 py-2 text-left">
          <Github class="resume-icon"/>
          <span class="resume-icon-text">github.com/grahmnic</span>
        </Entypo>
        <Entypo class="h-25 py-2 text-left">
          <Linkedin class="resume-icon"/>
          <span class="resume-icon-text">linkedin.com/in/nickschen/</span>
        </Entypo>
        <Entypo class="h-25 py-2 text-left">
          <Phone class="resume-icon"/>
          <span class="resume-icon-text">+1-347-650-7523</span>
        </Entypo>
        <Entypo class="h-25 py-2 text-left">
          <Email class="resume-icon"/>
          <span class="resume-icon-text">grahmnic@gmail.com</span>
        </Entypo>
      </div>
    </div>
  </div>
</template>

<script>
import Entypo from '../util/Entypo.vue'
import Github from '@entypo-icons/core/icons/github-with-circle.svg';
import Linkedin from '@entypo-icons/core/icons/linkedin-with-circle.svg';
import Phone  from '@entypo-icons/core/icons/old-phone.svg';
import Email from '@entypo-icons/core/icons/mail-with-circle.svg';

export default {
  name: 'resume-top',
  components: {
    Entypo,
    Github,
    Linkedin,
    Phone,
    Email
  },
  data: function () {
    return {

    }
  },
  mounted: function() {
    document.querySelectorAll('.resume-icon').forEach(e => {
      e.classList.add('resume-icon-animation')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.resume-top {
  border-radius: 4px 4px 0px 0px;
  background-color: $dark-gray;
  height: 20%;
  .resume-info {
    position: relative;
    z-index: 1;
    &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        right: 1px;
        bottom: 0;
        background-color: $dark-gray;
        transform-origin: bottom right;
        transform: skewX(15deg);
        z-index: -1;
    }
    &::after {
        position: absolute;
        content: "";
        width: 2%;
        height: 100%;
        right: calc(1px + 102%);
        bottom: 0;
        background-color: $dark-gray;
        transform-origin: bottom right;
        transform: skewX(15deg);
        z-index: -1;
    }
    .resume-icon {
      height: 75%;
      fill: $orange;
    }
    .resume-icon-animation {
      animation: 1s bounceIn both 0.1s;
    }
    .resume-icon-text {
      color: $orange;
      font-size: 0.85rem;
      cursor: pointer;
      margin: 0px 5px;
    }
  }

  .resume-avatar {
    background-color: $orange;
    background-image: url('../../assets/avatar.png');
    background-repeat: no-repeat;
    background-size: auto 90%;
    background-position: left 25% bottom;

    img {
      
    }
  }
}
</style>