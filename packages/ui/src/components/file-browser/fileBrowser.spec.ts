import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import FileBrowser from './fileBrowser.vue';
import type { AcvFileBrowserProps } from './fileBrowser';

describe('test FileBrowser component', () => {
  it('default props', () => {
    const wrapper = mount(FileBrowser);
    expect(wrapper.props()).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "title": undefined,
      }
    `);
  });

  it('pass props', () => {
    const wrapper = mount(FileBrowser, {
      props: {
        title: 'test',
      } as AcvFileBrowserProps,
    });

    expect(wrapper.props()).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "title": "test",
      }
    `);
  });

  it('renders', () => {
    const wrapper = mount(FileBrowser);

    expect(wrapper.html()).toMatchInlineSnapshot(`"<div data-v-8fc6ce04="" class="acv-file-browser"></div>"`);
  });
});
