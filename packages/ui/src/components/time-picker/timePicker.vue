<script setup lang="ts">
  import type {
    AcvTimePickerEvents,
    AcvTimePickerProps,
    AcvTimePickerSlots
  } from './timePicker.ts';
  import './timePicker.css';

  const { title, description } = defineProps<AcvTimePickerProps>();

  defineEmits<AcvTimePickerEvents>();
  defineSlots<AcvTimePickerSlots>();
</script>

<template>
  <div class="acv-time-picker">
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
  .acv-time-picker {
    font-weight: var(--acv-font-weight-strong);
    color: var(--acv-time-picker-color);
  }
</style>
