import QSelect from './vue';
// eslint-disable-next-line
import { VueConstructor } from 'vue';
import VueCompositionApi from '@vue/composition-api';
import '@qymh/q-select/dist/q-select.css';
interface Options {
  name?: string;
}

export let VueSlash: VueConstructor;

export default {
  install(Vue: VueConstructor, options: Options = {}) {
    VueSlash = Vue;
    Vue.use(VueCompositionApi);
    Vue.component(options.name || 'QSelect', QSelect as any);
  }
};
