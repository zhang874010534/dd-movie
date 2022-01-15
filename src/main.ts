import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { HeaderBar } from './components/index'
import { Dropdown, Menu, DatePicker} from 'ant-design-vue'
const app = createApp(App)
app.component(HeaderBar.name, HeaderBar)
app.component(Dropdown.name, Dropdown)
app.component(Menu.name, Menu)
app.component(DatePicker.name, DatePicker)
app.use(store)
app.use(router)
app.mount('#app')
