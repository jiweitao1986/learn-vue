import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
Vue.config.productionTip = false


// el可以使用$mount代替
// render接收的参数是一个createElement方法定义
// new Vue({
//   el: '#app',
//   render: function(createElement) {
//     return createElement(App);
//   }
// })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
