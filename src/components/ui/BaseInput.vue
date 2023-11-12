<script setup>

const { title, placeholder } = defineProps({
  title: String,
  placeholder: String,
})

</script>

<template>
  <div class="base-input">
    <label :for="`input-${title}`">
      {{ title }}
    </label>
    <input :id="`input-${title}`" type="text" :placeholder="placeholder">
  </div>

</template>

<style lang="scss" scoped>
</style>
