import Vue from 'vue'
import Router from 'vue-router'
import menu from '@/config/menu-config.js'
import BasicLayout from '@/components/BasicLayout.vue'
import BasicContainer from '@/components/BasicContainer.vue'
import FormRadio from '@/components/FormRadio.vue'
import FormCheckBox from '@/components/FormCheckBox.vue'
import Login from '@/components/Login.vue'

Vue.use(Router)

// var routes = []
// menu.forEach((item) => {
//   item.sub.forEach((sub) => {
//     routes.push({
//       path: `/${sub.componentName}`,
//       name: sub.componentName,
//       component: () => import (`@/components/${sub.componentName}`)
//     })
//   })
// })

var routes = [
  { path: '/', redirect: '/Login'},
  { path: '/BasicLayout', component: BasicLayout, name: 'Layout 布局' },
  { path: '/BasicContainer', component: BasicContainer, name: 'Container 布局' },
  { path: '/FormRadio', component: FormRadio, name: 'Radio 单选框' },
  { path: '/FormCheckBox', component: FormCheckBox, name: 'CheckBox 多选框' },
  { path: '/Login', component: Login, name: '登录'}
]


export default new Router({ routes })
