<script setup>
  import { ref } from 'vue';
  import phaethon from '../__data__/data.phaethon.txt?raw';
  import AcvButton from '@/components/button/button.vue';
  import AcvDialog from '@/components/dialog/dialog.vue';

  const dialogIsVisible = ref(true);
</script>

<template>
  <AcvButton @click="dialogIsVisible = true">
    Show clean dialog
  </AcvButton>
  <AcvDialog
    v-model="dialogIsVisible"
  >
    <div class="px-24 py-16">
      <pre class="acv-text acv-text--size-caption">
{{ phaethon }}
      </pre>
    </div>
  </AcvDialog>
</template>
