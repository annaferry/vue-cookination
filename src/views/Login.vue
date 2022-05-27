<template>
  <main class="page-login">
    <section class="box-auth">
      <router-link to="/"
        ><img class="logo" alt="logo" src="@/assets/icon.svg"
      /></router-link>
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
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label class="form-label" for="password">Password</label>
          <input
            placeholder="Password"
            type="password"
            id="password"
            class="form-control"
            v-model="password"
          />
        </div>
        <button v-on:click="login" class="btn btn-primary btn-lg">
          Sign in
        </button>

        <p class="auth-error" v-if="error != null">
          Error {{ error.code }} : {{ error.message }}
        </p>
      </form>

      <p class="auth-bottom">
        Not a member?
        <router-link to="/register" class="alink">Register</router-link>
      </p>
    </section>
  </main>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  name: "login",
  data: function () {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    login: function (e) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          console.log(`User signed in: ${userCredential.user.email}`);
          this.$router.push("/");
        })
        .catch((error) => {
          this.error = error;
          console.log(error.code);
          console.log(error.message);
        });

      e.preventDefault();
    },
  },
};
</script>