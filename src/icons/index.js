import SvgIcon from '@/components/SvgIcon'// svg component

// register globally - this will be handled by the app instance in main.js
export { SvgIcon }

// Import all svg files
const modules = import.meta.glob('./svg/*.svg', { eager: true })
const requireAll = () => Object.keys(modules).map(key => modules[key])
requireAll()
