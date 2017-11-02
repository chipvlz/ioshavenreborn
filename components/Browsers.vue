<template lang="html">
  <div class="Browser">
    <h1 class="heading">Sorry</h1>
    <h4>Your current browser is not supported.</h4>
    <p>To have the best viewing experience, please ensure you are using the lastest version of one of the browsers listed below. Some browsers can only be updated by updating your operating system. If you are having troubles installing your browser. Please contact us on our discord server. <a href="https://discord.gg/mTbwMyQ">Join our Disord by clicking here.</a></p>
    <div class="browsers">
      <div class="b">
        <h4>Chrome</h4>
        <i class="fab fa-chrome"></i>
        <small>Version: 60+</small>
      </div>
      <div class="b">
        <h4>Firefox</h4>
        <i class="fab fa-firefox"></i>
        <small>Version: 55+</small>
      </div>
      <div class="b">
        <h4>Edge</h4>
        <i class="fab fa-edge"></i>
        <small>Version: 16+</small>
      </div>
      <div class="b">
        <h4>Safari</h4>
        <i class="fab fa-safari"></i>
        <small>Version: 10.3+</small>
      </div>
      <div class="b">
        <h4>Opera</h4>
        <i class="fab fa-opera"></i>
        <small>Version: 47+</small>
      </div>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.Browser {
  max-width: 960px;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 0rem 3rem 3rem;
}
.b * {
    display: block;
    text-align: center;
    margin-bottom: 0.3rem;
}
.b {
  display: inline-block;
  margin: 1rem;
  i {
    font-size: 3rem;
  }
}
.browsers {
    text-align: center;
    margin-top: 2rem;
}
</style>
