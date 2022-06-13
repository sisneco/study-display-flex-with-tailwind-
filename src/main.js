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
  .directive("width", {
    created: (el) => {
      const resize = () => {
        const DispWidth = window.innerWidth;
        if (DispWidth < 768) {
          el.classList.add("responsive");
        } else {
          for (let i = 0; el.classList.length; i++) {
            if (el.classList.item(i) === "responsive") {
              console.log("hoge");
            }
          }
        }
      };
      window.addEventListener("resize", resize);
    },
  })
  .mount("#app");
