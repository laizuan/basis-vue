import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'

import
{
    Carousel,
    CarouselItem,
    Dropdown,
    DropdownItem,
    DropdownMenu
}
    from 'element-ui';
import '../theme/index.css'
import "./assets/css/main.less";
import i18n from './lang'

Vue.prototype.$ELEMENT = { size: (localStorage.getItem('size') || 'medium'),  i18n: (key, value) => i18n.t(key, value)};

Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)


Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
