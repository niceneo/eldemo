import Vue from 'vue'
import Router from 'vue-router'
import menu from '@/config/menu-config.js'


Vue.use(Router)

var routes = []

menu.forEach((item) => {
  item.sub.forEach((sub) => {
    routes.push({
      path: `/${sub.componentName}`,
      name: sub.componentName,
      component: () => import (`@/components/${sub.componentName}`)
    })
  })
})

export default new Router({ routes })
