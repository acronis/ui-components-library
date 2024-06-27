import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Tabs from './tabs.vue';
import type { AcvTabsProps } from './tabs';

describe('test Tabs component', () => {
  it('default props', () => {
    const wrapper = mount(Tabs);
    expect(wrapper.props()).toMatchInlineSnapshot();
  });

  it('pass props', () => {
    const wrapper = mount(Tabs, {
      props: {
        title: 'test',
      } as AcvTabsProps,
    });

    expect(wrapper.props()).toMatchInlineSnapshot();
  });

  it('renders', () => {
    const wrapper = mount(Tabs);

    expect(wrapper.html()).toMatchInlineSnapshot();
  });
});
