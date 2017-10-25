<template>
  <div>
    <nuxt id="content"/>
    <sidebar color="#F44336" title="Dashboard">
      <div class="section">
        <h1>General</h1>
        <a href="/" class="item"><i class="fas fa-home"></i>home</a>
        <a href="#" class="item"><i class="fas fa-info-circle"></i>announcements</a>
        <a href="/help" class="item"><i class="fas fa-inbox"></i>Contact Submissions</a>
        <a href="/apps" class="item"><i class="fas fa-bolt"></i>log</a>
      </div>
      <div class="section">
        <h1>Moderation</h1>
        <a href="/apps" class="item"><i class="fab fa-app-store"></i>apps</a>
        <a href="#" class="item"><i class="fas fa-flask"></i>betas</a>
        <a href="#" class="item"><i class="fas fa-user-secret"></i>jailbreaks</a>
        <a href="#" class="item"><i class="fas fa-dollar-sign"></i>promotions</a>
      </div>


    </sidebar>


  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'

export default {
  components: {
    Sidebar
  },
  mounted () {
    window.goToPayPal = this.donate
  },
  methods: {
    donate (e) {
      e.preventDefault()
      document.getElementById('paypalDonate').submit()
    }
  }
}
</script>



<style lang="scss">
#content {
  margin-top: 4rem;
  padding: 2rem 0;
  background-color: #f2f2f2;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
