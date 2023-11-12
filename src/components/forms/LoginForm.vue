<script setup>
</script>

<template>
  <section class="wrapper">
    <video class="video-bg" playsinline autoplay muted loop>
      <source src="@assets/video/first-screen.mp4" type="video/mp4">
    </video>

    <div class="login-form">
      <div class="login-form__title">Please login</div>
      <div class="login-form__body">
        <v-input title="E-mail" placeholder="Enter E-mail" />
        <v-input title="Password" placeholder="Enter password" />
      </div>
      <div class="login-form__actions">
        <v-button title="Login" primary />
        <div class="login-form__divider">
          <span>Or</span>
        </div>
        <v-button title="Sign up" />
        <a href="#" class="login-form__forgot">Forget password? Restore</a>
      </div>
    </div>
  </section>
</template>

<style>
.wrapper {
  position: relative;
  width: 100vw;
  height: calc(100vh - 10vh);
  padding-top: 10vh;
}

.video-bg {
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -99;
}
</style>
