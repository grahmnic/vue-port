<template>
    <div class="resume-container" :class="{'container-hovered': isHovered }" :style="{'width': width + '%'}">
        <slot>
        </slot>
    </div>
</template>

<script>
export default {
    name: 'container',
    props: {
        isHovered: Boolean,
        width: Number,
    }
}
</script>
<style lang="scss">
.resume-container {
  border-radius: 2.5px;
  @include box-shadow-dark();
  padding: 10px;
  border-color: $dark-gray;
}

.border-default {
    border-color: $dark-gray;
}

.container-hovered {
    @include box-shadow-darker();
    background: $light-dark-gray;
    border-color: $light-dark-gray;
}
</style>