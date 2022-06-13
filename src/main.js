import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(router)
  .directive("scroll", {
    mounted: () => {
      const handleOnScroll = () => {
        console.log(window.scrollY);
      };
      window.addEventListener("scroll", handleOnScroll);
    },
  })
  .mount("#app");
