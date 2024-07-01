import { mount } from '@vue/test-utils';
import { computed } from 'vue';
import { describe, expect, it, vi } from 'vitest';
import ThemeSwitcher from '@/widgets/theme-switcher/themeSwitcher.vue';
import AcvButton from '@/components/button/button.vue';
import AcvDropdown from '@/components/dropdown/dropdown.vue';

const mockUseColorScheme = vi.hoisted(() => ({
  setColorScheme: vi.fn(),
  AVAILABLE_COLOR_SCHEMES: { dark: 'dark', light: 'light' },
}));

vi.mock('@/composables/useColorScheme.ts', () => ({
  useColorScheme: () => {
    return {
      setColorScheme: mockUseColorScheme.setColorScheme,
    };
  },
  AVAILABLE_COLOR_SCHEMES: computed(() => mockUseColorScheme.AVAILABLE_COLOR_SCHEMES)
}));

describe('themeSwitcher', () => {
  it('renders button with correct text', () => {
    const wrapper = mount(ThemeSwitcher);
    const button = wrapper.findComponent(AcvButton);
    expect(button.text()).toBe('Change color scheme');
  });

  it('renders dropdown with color schemes', async () => {
    const wrapper = mount(ThemeSwitcher);
    const button = wrapper.findComponent(AcvButton);
    await button.trigger('click');
    const dropdown = wrapper.findComponent(AcvDropdown);
    expect(dropdown.exists()).toBe(true);
    expect(dropdown.text()).toContain('light');
    expect(dropdown.text()).toContain('dark');
  });

  it('calls setColorScheme on color scheme click', async () => {
    const wrapper = mount(ThemeSwitcher);
    const button = wrapper.findComponent(AcvButton);
    await button.trigger('click');
    const dropdownItem = wrapper.get('[data-test="color-scheme-item-dark"]');
    await dropdownItem.trigger('click');
    expect(mockUseColorScheme.setColorScheme).toHaveBeenCalledWith('dark');
  });
});
