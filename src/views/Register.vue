<template>
  <main class="page-register">
    <section class="box-auth">
      <router-link to="/"
        ><img class="logo" alt="logo" src="@/assets/icon.svg"
      /></router-link>
      <h1 class="main-title">Register</h1>
      <p class="auth-intro">Not a member? sign up today</p>

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
        <button v-on:click="register" class="btn btn-primary btn-lg">
          Register
        </button>

        <p class="auth-error" v-if="error != null">
          Error {{ error.code }} : {{ error.message }}
        </p>
      </form>

      <p class="auth-bottom">
        Already have an account?
        <router-link to="/login" class="alink">Sign in</router-link>
      </p>
    </section>
  </main>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: "register",
  data: function () {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    register: function (e) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          console.log(`New user created: ${userCredential.user.email}`);
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