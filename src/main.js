import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Base components
import BaseCard from './components/UI/BaseCard';
import BaseButton from './components/UI/BaseButton';
import BaseBadge from './components/UI/BaseBadge';
import BaseSpinner from './components/UI/BaseSpinner';

// Optimisation, async components
const BaseDialog = defineAsyncComponent(() =>
  import('./components/UI/BaseDialog')
);

createApp(App)
  .use(store)
  .use(router)
  .component('base-card', BaseCard)
  .component('base-button', BaseButton)
  .component('base-badge', BaseBadge)
  .component('base-spinner', BaseSpinner)
  .component('base-dialog', BaseDialog)
  .mount('#app');
