<style module>
  .calculatorParent {
    display: flex;
    width: 100%;
  }

  .inputsParent {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .resultsParent {
    flex-grow: 1;
  }
</style>

<template>
  <div :class="$style.calculatorParent">
    <div :class="$style.inputsParent">
      <GenshinSlider leftLabel="Stability" />
      <GenshinSlider leftLabel="Internal Conflict" />
      <GenshinSlider leftLabel="Sacrifice" />
      <GenshinSlider leftLabel="Energy" />
      <GenshinSlider leftLabel="Loss" />
      <GenshinSlider leftLabel="Ability/Skill" />
      <GenshinSlider leftLabel="Introvertedness" />
      <GenshinSlider leftLabel="Extrovertedness" />
      <GenshinSlider leftLabel="Self-driven" />
      <GenshinSlider leftLabel="Mind" />
      <GenshinSlider leftLabel="Heart" />
      <GenshinSlider leftLabel="Protectiveness" />
    </div>
    <div :class="$style.resultsParent"></div>
  </div>
</template>
