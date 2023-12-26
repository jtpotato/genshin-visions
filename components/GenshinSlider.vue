<script setup lang="ts">
  const props = defineProps<{
    title: string,
    leftLabel: string,
    rightLabel: string
  }>()
</script>

<style module>
  .sliderParent {
    display: flex;
    gap: 16px;
    margin: 1em;
    background-color: #f1e9ac;
    padding: 1em 2em;
    border-radius: 999px;
  }

  .sliderParent > span {
    width: 100%;
  }

  .sliderParent > input {
    width: 100%;
  }
</style>

<template>
  <div :class="$style.sliderParent">
    <span>{{ leftLabel }}</span>
    <input type="range" min="0" max="5" step="0.01">
  </div>
</template>