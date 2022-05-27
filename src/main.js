import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

// styles
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap
import "./css/styles.css";

// firebase
import "./firebase";

// init app
const app = createApp(App);
app.use(router);
app.mount("#app")