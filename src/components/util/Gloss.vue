<template>
    <div :id="section" class="gloss mx-0" :style="{'width': width + '%'}">
        <div v-for="(blob, index) in blobs" :key="index" :class="blob.color" :style="{ 'width': ((blob.size * 100) / 12) + '%', 'height': + height + 'rem' }"></div>
    </div>
</template>

<script>
export default {
    name: 'gloss',
    props: {
        activate: Boolean,
        section: String,
        blobs: Array,
        height: Number,
        width: Number,
    },
    mounted: function() {
        document.querySelectorAll('#' + this.section + ' div').forEach((e,i) => {
                e.style.animationDelay = (i * 0.05) + 's'
        })
    },
    methods: {
        in() {
            document.querySelectorAll('#' + this.section + ' div').forEach((e,i) => {
                e.style.animation = 'none'
                e.style.animation = 'glossUp 0.25s forwards'
                e.style.animationDelay = (i * 0.025) + 's'
            })
        },
        out() {
            document.querySelectorAll('#' + this.section + ' div').forEach(e => {
                e.style.animation = 'none'
            })
        }
    },
    watch: {
        activate: {
            handler (val) {
                val ? this.in() : this.out()
            }
        }
    }
}
</script>

<style lang="scss">
.gloss {
    font-size: 0;
    border-color: inherit;
    div {
        border: 4px solid;
        border-color: inherit;
        border-radius: 50px/50px;
        opacity: 0.5;
        display: inline-block;
    }
}

.light {
    background-color: $off-white;
}
.dark {
    background-color: $gray;
}
.orange {
    background-color: $orange;
}
.none {
    background-color: transparent;
}
</style>