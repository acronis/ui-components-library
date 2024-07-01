import { computed, ref } from 'vue';
import { useColorMode } from '@vueuse/core';

export const AVAILABLE_COLOR_SCHEMES = {
  light: 'light',
  dark: 'dark',
  acronis: 'acronis',
  constructor: 'constructor',
  virtuozzo: 'virtuozzo',
};
const ACV_THEME_LC_KEY = 'acv-theme';

export function useColorScheme() {
  const colorScheme = ref(localStorage.getItem(ACV_THEME_LC_KEY) || 'light');

  const isDark = computed(() => colorScheme.value === 'dark');

  const mode: any = useColorMode({
    attribute: 'data-theme',
    storageKey: ACV_THEME_LC_KEY,
    modes: AVAILABLE_COLOR_SCHEMES,
  });

  function setColorScheme(colorSchemeId: string) {
    if (AVAILABLE_COLOR_SCHEMES[colorSchemeId]) {
      mode.value = colorSchemeId;
      colorScheme.value = colorSchemeId;
    }
  }

  return {
    colorScheme,
    isDark,
    setColorScheme,
  };
}
