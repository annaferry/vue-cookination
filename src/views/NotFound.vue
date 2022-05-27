<template>
  <main class="page-notfound">
    <h1 class="title">404</h1>
    <h2>We're sorry the page you requested cannot be found</h2>

    <router-link class="alink" to="/"> Back home </router-link>
  </main>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped >
.page-notfound {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

h1 {
  font-size: 150px;
  margin-bottom: 10px;
  line-height: 1em;
  color: var(--accent-color);
}

h2 {
  margin-bottom: 70px;
  max-width: 600px;
  text-align: center;
}
</style>
