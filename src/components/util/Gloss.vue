<template>
    <div class="gloss-wrapper">
        <div :id="section" class="gloss row mx-0">
            <div v-for="(blob, index) in blobs" :key="index" :class="'col-' + blob.size + ' ' + blob.color"></div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'gloss',
    props: {
        activate: Boolean,
        section: String,
        blobs: Array
    },
    mounted: function() {
        document.querySelectorAll('#' + this.section + '.row div').forEach((e,i) => {
                e.style.animationDelay = (i * 0.05) + 's'
        })
    },
    methods: {
        in() {
            document.querySelectorAll('#' + this.section + '.row div').forEach((e,i) => {
                e.style.animation = 'none'
                e.style.animation = 'glossUp 0.25s forwards'
                e.style.animationDelay = (i * 0.025) + 's'
            })
        },
        out() {
            document.querySelectorAll('#' + this.section + '.row div').forEach(e => {
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
    div {
        transition: height 0.25s ease-out;
        height: 1.5rem;
        border: $dark-gray 4px solid;
        border-radius: 50px/50px;
        opacity: 0.5;
    }
    .light {
        background: $off-white;
    }
    .dark {
        background: $gray;
    }
}
</style>