import "core-js/stable";
import "regenerator-runtime/runtime";
import Vue from "vue";
import router from "./router";
import { store } from "./store/store";
import App from "./App.vue";
import uswds from "uswds";
import browserDetect from "vue-browser-detect-plugin";
import Vuetify from "vuetify";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "vuetify/dist/vuetify.min.css";
import VueCarousel from 'vue-carousel';
import VueImg from 'v-img';
import VueSvg from 'vue-svg-loader';


// social icons
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFlickr } from "@fortawesome/free-brands-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


const vueImgConfig = {
  altAsTitle: true
}

Vue.component("font-awesome-icon", FontAwesomeIcon);

// social icons
library.add(faTwitterSquare);
library.add(faFacebookSquare);
library.add(faGithub);
library.add(faFlickr);
library.add(faYoutubeSquare);
library.add(faInstagram);

Vue.config.productionTip = false;
Vue.use(uswds);
Vue.use(browserDetect);
Vue.use(Vuetify);
Vue.use(VueCarousel);
Vue.use(VueImg, vueImgConfig)

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
