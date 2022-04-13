<template>
  <app-header />
  <div class="app-container">
    <Home />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    Home,
  },
};
</script>