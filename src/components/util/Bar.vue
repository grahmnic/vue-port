<template>
    <div class="bar-wrapper">
        <div class="bar-outer w-100">
            <div class="h-100" :style="'width: ' + progress + '%'">
                <div :id="section" class="h-100" :class="color">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'bar',
    props: {
        activate: Boolean,
        section: String,
        progress: Number,
        color: String
    },
    mounted: function() {

    },
    methods: {
        in() {
            let e = document.querySelector('#' + this.section)
            e.classList.remove('barUp')
            e.style.width = this.progress + '%'
            e.classList.add('barUp')
        },
        out() {
            let e = document.querySelector('#' + this.section)
            e.classList.remove('barUp')
            e.style.width = '10%'
        }
    },
    computed: {
        style() {
            return 'width: ' + this.progress + "%"
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
.bar-wrapper {
    .bar-outer {
        height: 1rem;
        background-color: $gray;

        div div {
            width: 10%;
        }

        div .barUp {
            animation: scale-up-hor-left 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        }
    }
}
</style>