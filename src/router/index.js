import Vue from 'vue';
import Router from 'vue-router';
import FormEditor from '@/views/FormEditor.vue';
import FormPreview from '@/views/FormPreview.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'FormEditor',
      component: FormEditor
    },
    {
      path: '/preview',
      name: 'FormPreview',
      component: FormPreview
    }
    // You can add more routes here as needed.
  ]
});
