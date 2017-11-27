import Vue from 'vue'{{#airbnb}};{{/airbnb}}
import ElementUI from 'element-ui'{{#airbnb}};{{/airbnb}}
import 'element-ui/lib/theme-chalk/index.css'{{#airbnb}};{{/airbnb}}
import App from './App.vue'{{#airbnb}};{{/airbnb}}

Vue.use(ElementUI){{#airbnb}};{{/airbnb}}
{{#airbnb}}
/* eslint-disable no-new */
{{/airbnb}}
new Vue({
  el: '#app',
  render: h => h(App){{#airbnb}},{{/airbnb}}
}){{#airbnb}};{{/airbnb}}
