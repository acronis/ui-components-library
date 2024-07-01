<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  import { ICogSmall } from '@acronis-platform/icons';
  import TogglePadding from './toggle-padding.vue';

  // import DirectionSwitch from '../documentation/.vitepress/components/direction-switch.vue';

  import ThemeSwitcher from '@/widgets/theme-switcher/themeSwitcher.vue';

  const router = useRouter();
  const panelShow = ref(false);
</script>

<template>
  <RouterView v-slot="{ Component }">
    <component :is="Component"></component>
  </RouterView>
  <button
    class="dev-setting"
    :class="[panelShow && 'dev-setting--active']"
    type="button"
    tabindex="-1"
    @click="panelShow = !panelShow"
  >
    <ICogSmall></ICogSmall>
  </button>
  <Transition name="acv-fade">
    <div
      v-show="panelShow"
      class="dev-panel"
    >
      <div class="dev-panel__container">
        <div class="dev-links">
          <template v-for="route in router.options.routes">
            <RouterLink
              v-if="route.name"
              :key="route.path"
              class="router-link"
              :to="route.path"
              @click="panelShow = false"
            >
              {{ route.name }}
            </RouterLink>
          </template>
        </div>
        <div class="dev-actions">
          <TogglePadding></TogglePadding>
        <!--          <DirectionSwitch></DirectionSwitch> -->
          <ThemeSwitcher></ThemeSwitcher>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="css">
*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  --bg-color: hsl(0deg, 0%, 100%);
  height: 100%;

  &.dark {
    --bg-color: hsl(200deg, 14%, 9%);
  }

  &.rtl {
    direction: rtl;
  }
}

body {
  height: 100%;
  margin: 0;
  overflow: hidden;
  font-family: var(--acv-font-family-default);
  font-size: var(--acv-font-size-body);
  font-variant-numeric: tabular-nums;
  line-height: var(--acv-font-line-height-regular);
  color: var(--acv-color-text-primary);
  background-color: var(--bg-color);
  transition: var(--acv-transition-color);
}

#app {
  height: 100%;
  overflow: auto;
}

.padding #app {
  padding: 20px;
}

.dev-setting {
  position: absolute;
  inset-inline-end: 20px;
  bottom: 20px;
  z-index: var(--acv-z-index-notifications);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  color: var(--acv-color-brand-primary);
  cursor: pointer;
  background-color: var(--acv-color-brand-tertiary);
  border: 0;
  border-radius: 50%;
  outline: 0;
  box-shadow: var(--acv-box-shadow);
  transition: var(--acv-transition-color);

  &--active {
    color: var(--acv-color-text-primary);
  }

  svg {
    width: 1.3em;
    height: 1.3em;
    line-height: 1;
    vertical-align: -0.125em;
    fill: currentcolor;
  }
}

.dev-panel {
  position: absolute;
  inset-inline-end: 20px;
  bottom: 70px;
  z-index: var(--acv-z-index-notifications);
  padding: var(--acv-spacing-small) 0;
  overflow: hidden;
  background-color: var(--acv-color-brand-secondary);
  border-radius: var(--acv-radius-regular);

  &__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: calc(100vh - 128px);
    padding: 20px;
    overflow: hidden auto;
    scrollbar-width: thin;
    scrollbar-color: var(--acv-color-brand-secondary) transparent;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--acv-color-brand-tertiary);
      border-radius: 4px;
    }
  }
}

.dev-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 180px;

  .router-link {
    padding: 7px 10px 8px;
    line-height: 1;
    color: var(--acv-color-link-inversed-primary);
    text-decoration: none;
    background-color: var(--acv-color-link-primary);
    border: 1px solid var(--acv-color-link-inversed-primary);
    border-radius: var(--acv-radius-regular);
    transition: var(--acv-transition-background);

    &:hover {
      background-color: var(--acv-color-link-inversed-secondary);
    }

    &-active,
    &-active:hover {
      background-color: var(--acv-color-link-inversed-secondary);
    }
  }
}

.dev-actions {
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
