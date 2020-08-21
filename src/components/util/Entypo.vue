<template>
    <div :class="{'iborder':IconBorder }" aria-hidden="true">
        <slot></slot>
    </div>
</template>

<script>


export default {
  props: {
    IconBorder: Boolean,
    }
}
</script>