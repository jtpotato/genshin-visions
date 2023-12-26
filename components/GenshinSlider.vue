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
    align-items: center;
    gap: 16px;
    background-color: rgb(233, 220, 202);
    padding: 0.8em 2em;
    border-radius: 999px;
    color: rgb(83, 93, 108);
    height: 2em;
  }

  .sliderParent > span {
    width: 100%;
    margin-bottom: -3px; /* Stupid hack required to get the font to align properly */
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