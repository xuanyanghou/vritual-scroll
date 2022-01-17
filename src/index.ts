import { App } from 'vue'
import VritualScroll from './components/VritualScroll.vue'

export default {
  install(app: App<Element>): any {
    app.component(VritualScroll.name, VritualScroll)
  }
}
