<template>
  <footer>
    <div class="container">
      <div class="footer-top">
        <p>Simple recipes that make you feel good</p>
        <div class="footer-social">
          <p>Follow us on</p>

          <ul class="footer-menu footer-menu-social">
            <li>
              <a href="" title="Follow us on twitter"
                ><img src="@/assets/icons/icon-twitter.svg" alt="logo twitter"
              /></a>
            </li>
            <li>
              <a href="" title="Follow us on instagram"
                ><img
                  src="@/assets/icons/icon-instagram.svg"
                  alt="logo instagram"
              /></a>
            </li>
            <li>
              <a href="" title="Follow us on youtube"
                ><img src="@/assets/icons/icon-youtube.svg" alt="logo youtube"
              /></a>
            </li>
            <li>
              <a href="" title="Follow us on facebook"
                ><img
                  src="@/assets/icons/icon-facebook.svg"
                  alt="logo facebook"
              /></a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="footer-bottom">
        <p>2022 cookination</p>
        <ul class="footer-menu">
          <li>
            <router-link to="" title="Terms and conditions"
              >Terms and conditions</router-link
            >
          </li>
          <li>
            <router-link to="" title="Privacy policy"
              >Privacy policy</router-link
            >
          </li>
          <li><router-link to="" title="Cookies">Cookies</router-link></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss"></style>
