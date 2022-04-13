<template>
  <main class="page-register">
    <section class="box-auth">
      <img class="logo" alt="logo" src="@/assets/icon.svg" />
      <h1 class="main-title">Register</h1>
      <p class="auth-intro">Not A Member? Sign Up Today</p>

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
        <button class="btn btn-primary btn-lg">Register</button>
      </form>

      <p class="auth-bottom">
        Already have an account? <span class="alink">Sign in</span>
      </p>
    </section>
  </main>
</template>

<script>
// Descomentar & completar:

/*
import { *** } from "firebase/auth"; // completar import

export default {
  name: "register",
  data: function () {
    return {
      // Completar
    };
  },
  methods: {
    register: function (e) {
      const auth = getAuth();
        createUserWithEmailAndPassword(auth, "***completar***", "***completar***")
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