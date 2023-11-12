<script setup>

const { title, primary } = defineProps({
  title: String,
  primary: Boolean,
})

</script>

<template>
  <div class="base-button">
    <button :class="{primary: primary}">{{ title }}</button>
  </div>
</template>

<style lang="scss" scoped>
</style>
