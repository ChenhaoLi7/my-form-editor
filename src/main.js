import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 如果使用Vue Router
import store from './store'; // 如果使用Vuex

const app = createApp(App);

app.use(router); // 安装路由器
app.use(store); // 安装Vuex存储

app.mount('#app'); // 挂载应用
