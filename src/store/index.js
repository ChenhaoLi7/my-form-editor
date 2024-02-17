import Vue from 'vue';
import Vuex from 'vuex';
import form from './modules/form';
import formCanvas from './modules/formCanvas';
import formDesigner from './modules/formDesigner';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    form,
    formCanvas,
    formDesigner
  }
});
