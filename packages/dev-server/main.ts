import '@/styles/public/themes.css';
import { createApp } from 'vue';
import theme from '../documentation/demos/theme/theme.vue';

const isDark = localStorage.getItem('uikit-docs-theme-prefer-dark');
const isRtl = localStorage.getItem('uikit-docs-direction-prefer-rtl');
const noPadding = localStorage.getItem('uikit-dev-prefer-no-padding');

if (isDark === 'true' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
}

if (isRtl === 'true') {
  document.documentElement.classList.add('rtl');
  document.documentElement.dir = 'rtl';
}
else {
  document.documentElement.dir = 'ltr';
}

if (noPadding !== 'true') {
  document.documentElement.classList.add('padding');
}
if (__THEME__) {
  createApp(theme).mount('#app');
}
else {
  Promise.all([
    import(`./router/port-${__PORT__}.ts`),
    import('./app.vue'),
    // import('../ui/src/components/confirm'),
    // import('../ui/src/components/contextmenu'),
    // import('../ui/src/components/loading'),
    // import('../ui/src/components/message'),
    // import('../ui/src/components/notice'),
    // import('../ui/src/components/toast')
  ]).then(
    ([
      { router },
      { default: App },
      // { Confirm },
      // { Contextmenu },
      // { Loading },
      // { Message },
      // { Notice },
      // { Toast }
    ]) => {
      createApp(App)
        .use(router)
        // .use(Confirm)
        // .use(Contextmenu)
        // .use(Loading)
        // .use(Message)
        // .use(Notice)
        // .use(Toast)
        // .use(createUiKit())
        .mount('#app');
    }
  );
}
