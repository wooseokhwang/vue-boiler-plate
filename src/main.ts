import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18nPlugin from '@/plugins/i18n';

const app = createApp(App);
const i18nStrings = {
  greetings: {
    hi: 'Hallo!',
  },
};
app.use(store).use(router).use(i18nPlugin, i18nStrings).mount('#app');
