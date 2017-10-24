<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        iOS Haven
      </h1>
      <h2 class="subtitle">
        Download IPAS, signed apps, apple developer betas, and Jailbreaks.
      </h2>
      <div class="links">
        <a href="#main-side-bar" class="button--green" @click="showSide">Launch</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">Donate</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  methods: {
    showSide () {
      window.dispatchEvent(new Event('toggleSidebar'))
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 1px;
  margin-top: 2rem;
}

.subtitle {
  font-weight: 300;
  font-size: 20px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  text-transform: uppercase;
}

.links {
  padding-top: 15px;
}
</style>
