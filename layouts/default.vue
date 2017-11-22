<template>
  <div>
    <browsers v-if="!browserSupported"/>
    <div v-if="browserSupported">
      <nuxt id="content"/>
      <sidebar color="#F44336" title="iOS Haven">
        <a href="/" class="item"><i class="fas fa-home"></i>Home</a>
        <a href="https://goo.gl/forms/PxD4jsXrInaRywwh2" class="item"><i class="fa fa-users"></i>Apply To Join Our Team</a>
        <a href="/apps" class="item"><i class="fab fa-app-store"></i>Apps</a>
        <a href="betas" class="item"><i class="fas fa-flask"></i>Betas</a>
        <a href="/jailbreaks" class="item"><i class="fas fa-user-secret"></i>Jailbreaks</a>
        <a href="/cydia" class="item"><i class="fas fa-wrench"></i>Cydia Impactor</a>
        <a href="/contact" class="item"><i class="fas fa-bug"></i>Contact Developer</a>
        <a href="/credits" class="item"><i class="fas fa-code"></i>Credits</a>
        <a href="https://discord.gg/mTbwMyQ" class="item"><i class="fab fa-discord"></i>Join our Discord</a>
        <a href="https://www.reddit.com/r/iOSHaven/" class="item"><i class="fab fa-reddit"></i>Join our subreddit</a>
      </sidebar>

      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" id="paypalDonate" v-show="false">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="E8QZHGDDUQAGY">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
      </form>
    </div>


  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import Browsers from '~/components/Browsers.vue'

export default {
  components: {
    Sidebar,
    Browsers
  },
  data () {
    return {
      browserSupported: true
    }
  },
  mounted () {
    window.goToPayPal = this.donate
    try {
      this.browserSupported = CSS.supports('display', 'grid')
    } catch (e) {
      this.browserSupported = false
    }
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
@import "~assets/main.scss";
#content {
  margin-top: 5rem;
  padding-bottom: 5rem;
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
  background: #f2f2f2;
  @media screen and (max-width: 400px){
    font-size: 12px;
  }
}

body {
  padding: 0 1rem;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--red {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid darken(#F44336, 7%);
  color: #F44336;
  text-decoration: none;
  padding: 10px 30px;
}

.button--red:hover {
  color: #fff;
  background-color: darken(#F44336, 7%);
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
