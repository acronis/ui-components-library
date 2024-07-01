<script setup lang="ts">
  import { AVAILABLE_COLOR_SCHEMES, useColorScheme } from '../../composables/useColorScheme.ts';
  import AcvButton from '@/components/button/button.vue';
  import AcvDropdown from '@/components/dropdown/dropdown.vue';

  const { setColorScheme } = useColorScheme();
</script>

<template>
  <AcvDropdown
    trigger="click"
    persist
  >
    <slot>
      <AcvButton>
        Change color scheme
      </AcvButton>
    </slot>
    <template #dropdown>
      <ul>
        <li
          v-for="(colorScheme, key) in AVAILABLE_COLOR_SCHEMES"
          :key="key"
          :data-test="`color-scheme-item-${key}`"
          @click="setColorScheme(colorScheme)"
        >
          {{ colorScheme }}
        </li>
      </ul>
    </template>
  </AcvDropdown>
</template>
