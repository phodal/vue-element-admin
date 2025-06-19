import { createStore } from 'vuex'
import getters from './getters'

// https://vitejs.dev/guide/features.html#glob-import
const modules = {}
const moduleFiles = import.meta.glob('./modules/*.js', { eager: true })

Object.keys(moduleFiles).forEach((path) => {
  const moduleName = path.replace(/^\.\/(.*)\.\w+$/, '$1').replace('modules/', '')
  modules[moduleName] = moduleFiles[path].default
})

const store = createStore({
  modules,
  getters
})

export default store
