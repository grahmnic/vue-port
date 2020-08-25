<template>
    <div class="skills-wrapper w-100 h-100" @click="changeView"></div>
</template>

<script>

export default {
    name: 'skills-view',
    methods: {
        changeView() {
            return this.$store.commit('view:set', 'resume-view')
        }
    }
}
</script>

<style lang="scss">
.skills-wrapper {
    background-color: $dark-gray;
}
</style>
