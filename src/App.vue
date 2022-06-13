<template>
  <link
    rel="stylesheet"
    href="https://unpkg.com/ress@4.0.0/dist/ress.min.css"
  />
  <div v-bind:class="{ responsive: isResponsiveActive }">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isResponsiveActive: false,
    };
  },
  methods: {
    resize() {
      if (window.innerWidth < 940) {
        this.isResponsiveActive = true;
      } else {
        this.isResponsiveActive = false;
      }
    },
  },
  mounted() {
    this.resize();
    window.addEventListener("resize", this.resize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.resize);
  },
};
</script>

<style>
#app {
  margin-top: 3vh;
  margin-left: 20vh;
  margin-right: 20vh;
}

@media screen and (max-width: 768px) {
  #app {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-top: 2vh;
    background: yellow;
  }
  html {
    font-size: 30%;
  }
}

@media screen and (min-width: 768px) {
  #app {
    background: blue;
  }
  html {
    font-size: 45%;
  }
}

@media screen and (min-width: 1000px) {
  #app {
    background: blue;
  }
  html {
    font-size: 50%;
  }
}

@media screen and (min-width: 1000px) {
  html {
    font-size: 62.5%;
  }
  #app {
    background: red;
  }
}
</style>
