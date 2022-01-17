import { App } from 'vue'
import VritualTable from './components/VritualTable.vue'

export default {
  install(app: App<Element>): any {
    app.component(VritualTable.name, VritualTable)
  }
}
