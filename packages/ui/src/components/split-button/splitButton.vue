<script setup lang="ts">
  import type {
    AcvSplitButtonEvents,
    AcvSplitButtonProps,
    AcvSplitButtonSlots
  } from './splitButton.ts';
  import './splitButton.css';

  const { title, description } = defineProps<AcvSplitButtonProps>();

  defineEmits<AcvSplitButtonEvents>();
  defineSlots<AcvSplitButtonSlots>();
</script>

<template>
  <div class="acv-split-button">
    <slot>{{ title }}</slot>
    <slot
      name="description"
      :description="description"
    >
      {{ description }}
    </slot>
  </div>
</template>

<style scoped>
  .acv-split-button {
    font-weight: var(--acv-font-weight-strong);
    color: var(--acv-split-button-color);
  }
</style>
