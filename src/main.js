// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {
  Upload,
  Button,
  Dialog,
  Input,
  Form,
  FormItem,
  Row,
  Col,
  Icon,
  Message

} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

Vue.config.productionTip = false
Vue.use(Upload);
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Icon);
// Vue.use(Message);
Vue.prototype.$message = Message
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
