// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
/*import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'*/
/*添加或修改别名之后需要重启服务*/
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
/*npm install fastclisk -save   添加依赖避免点击事件300毫秒延时
 *以上命令不对使用：npm install --save fastclick可以安装
 * 
 * */

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
