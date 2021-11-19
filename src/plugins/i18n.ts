import { Plugin } from 'vue';

const plugin: Plugin = {
  install: (app, options) => {
    app.config.globalProperties._$translate = (key: string) => {
      return key.split('.').reduce((o, i) => {
        if (o) return o[i];
      }, options);
    };

    app.provide('i18n', options);
  },
};

export default plugin;
