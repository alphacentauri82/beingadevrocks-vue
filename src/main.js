import Vue from "vue";
import App from "./App.vue";

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faCubes,
  faBook,
  faCoffee,
  faBolt,
  faUsers,
  faThumbsUp,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCoffee,
  faCode,
  faCubes,
  faBook,
  faBolt,
  faUsers,
  faThumbsUp,
  faGlobe
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
