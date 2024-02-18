import { createStore } from 'vuex';
import form from './modules/form';
import formCanvas from './modules/formCanvas';
import formDesigner from './modules/formDesigner';

export default createStore({
  modules: {
    form,
    formCanvas,
    formDesigner
  }
});
