<template>
  <main class="page-login">
    <section class="box-auth">
      <img class="logo" alt="logo" src="@/assets/icon.svg" />
      <h1 class="main-title">Sign in</h1>
      <p class="auth-intro">Log in to your account.</p>

      <form>
        <div class="form-group">
          <label class="form-label" for="username">E-mail</label>
          <input
            placeholder="E-mail"
            type="email"
            id="email"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label class="form-label" for="password">Password</label>
          <input
            placeholder="Password"
            type="password"
            id="password"
            class="form-control"
          />
        </div>
        <button class="btn btn-primary btn-lg">Sign in</button>
      </form>

      <p class="auth-bottom">
        Not a member? <span class="alink">Register</span>
      </p>
    </section>
  </main>
</template>

<script>
// Descomentar & completar:

/*
import { *** } from "firebase/auth"; // completar import

export default {
  name: "login",
  data: function () {
    return {
      // Completar
    };
  },
  methods: {
    login: function (e) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, "***completar***", "***completar***")
        .then((userCredential) => {
          // Completar
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });

      e.preventDefault();
    },
  },
};
*/
</script>