<template lang="html">
  <div :class="{
    'ad-wrapper': true,
    'fullwidth': true,
    'failed': !adsLoaded
  }">

    <div class="ad">
      <ins class="adsbygoogle"
       :style="{
         display:'inline-block',
         width: width || '250px',
         height:'100px'
       }"
       data-ad-client="ca-pub-4649450952406116"
       data-ad-slot="2078970955"></ins>
    </div>

     <div :class="{
       'adblock': adsLoaded
     }" v-if="!adsLoaded">
       <h3>Ads Blocked</h3>

       <p>Please consider allowing ads to show on this site. This will allow us to bring you better content. </p>
     </div>
  </div>

</template>

<script>
export default {
  props: ['width'],
  data () {
    return {
      adsLoaded: true
    }
  },
  mounted () {
    this.adsLoaded = window.adsbygoogle.loaded || false
  }
}
</script>

<style lang="scss" scoped>
.ad-wrapper {
  margin: 2rem 0;
  position: relative;
}
.failed {
    border-radius: 0.5rem;
    border: 1px solid rgb(220,180,180);;
    background: rgb(255,220,220);
    padding: 1rem;
  }
.ad{
  text-align: center;
  // position: absolute;
  //   top: 0;
  //   left: 50%;
  //   transform: translateX(-50%);
}
.adblock {
  opacity: 0;
}
</style>
