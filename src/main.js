import { createApp } from 'vue'
import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/element-variables.scss'
import enLang from 'element-plus/es/locale/lang/en'

import '@/styles/index.scss' // global css

import App from './App.vue'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (import.meta.env.PROD) {
  const { mockXHR } = await import('../mock')
  mockXHR()
}

const app = createApp(App)

app.use(ElementPlus, {
  size: Cookies.get('size') || 'default',
  locale: enLang
})

app.use(store)
app.use(router)

// register global utility filters as global properties
Object.keys(filters).forEach(key => {
  app.config.globalProperties[`$${key}`] = filters[key]
})

app.mount('#app')
