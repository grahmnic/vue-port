<template>
  <div class="container w-100 h-100 py-5 d-flex justify-content-center align-items-center">
    <div class="resume-wrapper col-md-12 px-0 h-100">
      <resume-top />
    </div>
  </div>
</template>

<script>
import ResumeTop from './layouts/ResumeTop';

export default {
  name: 'resume-view',
  components: {
    ResumeTop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.resume-wrapper {
  background-color: $light-gray;
  max-width: 45rem !important;
  @include box-shadow-primary();
  border-radius: 4px;
}
</style>
