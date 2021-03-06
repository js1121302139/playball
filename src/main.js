// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload' //懒加载插件

Vue.use(VueLazyload)
Vue.prototype.openPage = (view, item) => {
  console.log(this)
  console.log("this.$router")
  this.$router.push({ name: view, params: { ...item, Tit: 'bb' } });
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
