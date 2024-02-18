import { createRouter, createWebHistory } from 'vue-router';
import FormEditor from '@/views/FormEditor.vue';
import FormPreview from '@/views/FormPreview.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
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
    // 其他路由...
  ]
});

export default router;
