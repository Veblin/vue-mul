import Vue from 'vue';
import {
  Row,
  Col,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(Row);
Vue.use(Col);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});

// use vue devtools
Vue.config.devtools = process.env.NODE_ENV === 'production';
