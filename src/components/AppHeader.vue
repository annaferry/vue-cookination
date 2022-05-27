<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link to="/" class="navbar-brand">
          <img
            src="@/assets/logo.svg"
            class="img-fluid brand-logo"
            alt="Cookination logo"
          />
        </router-link>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-content">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="" class="nav-link">Recipes</router-link>
              </li>
              <li class="nav-item">
                <router-link to="" class="nav-link">Shop</router-link>
              </li>
              <li class="nav-item">
                <router-link to="" class="nav-link">Contact</router-link>
              </li>
            </ul>

            <ul v-if="!isLoggedIn" class="nav-buttons">
              <li>
                <router-link to="/register" class="btn btn-primary btn-register"
                  >Register</router-link
                >
              </li>
              <li>
                <router-link
                  to="/login"
                  class="btn btn-outline-primary btn-login"
                  >Sign in</router-link
                >
              </li>
            </ul>
            <div v-else class="header-profile">
              <span class="header-profile-email">
                {{ currentUser.email }}
              </span>
              <span class="header-avatar">
                <img
                  class="header-avatar-img"
                  src="@/assets/avatar.svg"
                  alt="Avatar"
                />
              </span>
              <button class="btn btn-logout" @click="logout">
                <img src="@/assets/icons/icon-logout.svg" alt="Logout" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
  name: "Header",
  data() {
    return {
      currentUser: null,
      isLoggedIn: null,
    };
  },
  created() {
    // auth status
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.currentUser = user;
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
        this.currentUser = null;
      }
    });
  },
  methods: {
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.isLoggedIn = false;
          this.currentUser = null;
          this.$router.push({ path: "/" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
</style>
