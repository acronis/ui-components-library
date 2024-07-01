import { describe, expect, it } from 'vitest';
import { nextTick } from 'vue';
import { useColorScheme } from '../composables/useColorScheme';

describe('useColorScheme', () => {
  it('returns default color scheme', () => {
    const { colorScheme } = useColorScheme();
    expect(colorScheme.value).toEqual('light');
  });

  it('returns dark mode status correctly', () => {
    localStorage.setItem('acv-theme', 'dark');
    const { isDark } = useColorScheme();
    expect(isDark.value).toEqual(true);
  });

  it('sets color scheme correctly', async () => {
    const { setColorScheme, colorScheme } = useColorScheme();
    setColorScheme('light');
    expect(colorScheme.value).toEqual('light');
    await nextTick();
    expect(localStorage.getItem('acv-theme')).toEqual('light');
  });

  it('does not set invalid color scheme', () => {
    const { setColorScheme, colorScheme } = useColorScheme();
    setColorScheme('invalid');
    expect(colorScheme.value).not.toEqual('invalid');
    expect(localStorage.getItem('acv-theme')).not.toEqual('invalid');
  });

  it('does not change color scheme if the same is set', () => {
    const { setColorScheme, colorScheme } = useColorScheme();
    setColorScheme('light');
    const initialColorScheme = colorScheme.value;
    setColorScheme('light');
    expect(colorScheme.value).toEqual(initialColorScheme);
  });
});
