<template>
  <div class="resume-top w-100 row mx-0">
    <div class="col-5 px-0">
      <div class="resume-avatar w-100 h-100" :class="{'onSkills': onSkill}">
      </div>
    </div>
    <div class="resume-info h-100 col-7 d-flex px-0">  
      <div class="resume-title h-100 col-md-5 text-sm-center pl-4">
        <h2>Nick Chen</h2>
        <p>Software Engineer</p>
      </div>
      <div class="contacts-icon d-md-none py-1 px-3">
        <font-awesome-icon class="orange" v-click-outside="hide" icon="caret-down" @click="show"/>
        <div v-show="displayContacts" class="contacts-modal d-md-none">
          <Entypo class="text-left">
            <Github class="resume-icon"/>
            <a href="https://github.com/grahmnic" target="_blank" class="resume-icon-text">github.com/grahmnic</a>
          </Entypo>
          <Entypo class="text-left">
            <Linkedin class="resume-icon"/>
            <a href="https://www.linkedin.com/in/nickschen/" target="_blank" class="resume-icon-text">linkedin.com/in/nickschen/</a>
          </Entypo>
          <Entypo class="text-left">
            <Phone class="resume-icon"/>
            <span class="resume-icon-text">+1-347-650-7523</span>
          </Entypo>
          <Entypo class="text-left">
            <Email class="resume-icon"/>
            <a href="mailto:grahmnic@gmail.com" class="resume-icon-text">grahmnic@gmail.com</a>
          </Entypo>
        </div>
      </div>
      <div class="col-md-7 d-none d-md-block h-100 py-2 px-1">
        <div class="float-right w-auto h-100">
          <Entypo class="h-25 text-left">
            <Github class="resume-icon"/>
            <a href="https://github.com/grahmnic" target="_blank" class="resume-icon-text">github.com/grahmnic</a>
          </Entypo>
          <Entypo class="h-25 text-left">
            <Linkedin class="resume-icon"/>
            <a href="https://www.linkedin.com/in/nickschen/" target="_blank" class="resume-icon-text">linkedin.com/in/nickschen/</a>
          </Entypo>
          <Entypo class="h-25 text-left">
            <Phone class="resume-icon"/>
            <span class="resume-icon-text">+1-347-650-7523</span>
          </Entypo>
          <Entypo class="h-25 text-left">
            <Email class="resume-icon"/>
            <a href="mailto:grahmnic@gmail.com" class="resume-icon-text">grahmnic@gmail.com</a>
          </Entypo>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Entypo from '../util/Entypo.vue'
import Github from '@entypo-icons/core/icons/github-with-circle.svg?inline'
import Linkedin from '@entypo-icons/core/icons/linkedin-with-circle.svg?inline'
import Phone from '@entypo-icons/core/icons/old-phone.svg?inline'
import Email from '@entypo-icons/core/icons/mail-with-circle.svg?inline'
import { mapGetters } from 'vuex'
import ClickOutside from 'vue-click-outside'

export default {
  name: 'resume-top',
  components: {
    Entypo,
    Github,
    Linkedin,
    Phone,
    Email,
  },
  data: function () {
    return {
      onSkill: false,
      displayContacts: false
    }
  },
  directives: {
    ClickOutside
  },
  mounted: function() {
    document.querySelectorAll('.resume-icon').forEach(e => {
      e.classList.add('resume-icon-animation')
    })
  },
  computed: {
    ...mapGetters([
      'skillsHovered'
    ]),
    getSkillsHovered() {
      return this.$store.state.hover.skillHovered
    }
  },
  watch: {
    getSkillsHovered: {
      handler(val) {
        this.onSkill = val
      }
    }
  },
  methods: {
    show() {
      this.displayContacts = true
    },
    hide() {
      this.displayContacts = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.resume-top {
  border-radius: 4px 4px 0px 0px;
  background-color: $dark-gray;
  grid-area: rt;
  @include box-shadow-dark();

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
        right: calc(1px + 101%);
        bottom: 0;
        background-color: $dark-gray;
        transform-origin: bottom right;
        transform: skewX(15deg);
        z-index: -1;
    }
    .resume-title {
      color: $white;
      text-align: left;
      white-space: nowrap;
      justify-content: center;
      display: flex;
      flex-direction: column;
      h2 {
        margin-bottom: 0 !important;
      }
      p {
        color: $off-white;
      }
      &::after {
        position: absolute;
        content: "";
        width: 1.5%;
        height: 100%;
        right: calc(1px + 108%);
        bottom: 0;
        background-color: $dark-gray;
        transform-origin: bottom right;
        transform: skewX(20deg);
        z-index: -1;
      }
      &::before {
        position: absolute;
        content: "";
        width: 1%;
        height: 100%;
        right: calc(1px + 112%);
        bottom: 0;
        background-color: $dark-gray;
        transform-origin: bottom right;
        transform: skewX(25deg);
        z-index: -1;
      }
    }
    .resume-icon {
      height: 75%;
      fill: $orange;
    }
    .resume-icon-animation {
      //animation: 1s bounceIn both;
    }
    .resume-icon-text {
      color: $orange;
      font-size: 0.75rem;
      cursor: pointer;
      margin: 0px 5px;
      white-space: nowrap;
    }

    .orange {
      color: $orange;
      cursor: pointer;
      transition: all 0.5s ease-out;

      &:hover {
        
      }
    }
  }

  .resume-avatar {
    background-color: $orange;
    background-image: url('../../assets/avatar.png');
    background-repeat: no-repeat;
    background-size: auto 90%;
    background-position: left 25% bottom;
    transition: all 0.5s ease-out;
  }

  .onSkills {
    background-color: #78788d !important;
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content:' '; background:rgba(0,0,0,.2);
    }    
  }
}

.contacts-icon {
  position: relative;
  .contacts-modal {
    position: absolute;
    padding: 10px;
    border-radius: 2.5px;
    background: $dark-gray;
    top: 15px;
    right: 100%;
    @include box-shadow-dark();

    div {
      height: 2rem;
      white-space: nowrap;
    }
  }
}
</style>