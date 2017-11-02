<template lang="html">
  <div class="">
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-format="fluid"
         data-ad-layout-key="-8c+1v-dd+e2+ex"
         data-ad-client="ca-pub-4649450952406116"
         data-ad-slot="9356354427">
       </ins>

   <div class="failed" v-if="!adsLoaded">
     <h4>Ads Blocked</h4>
     <i class="fas fa-thumbs-down"></i>
     <p>Please consider allowing ads to show on this site. This will allow us to bring you better content. </p>
   </div>

    <div class="failed absolute" v-if="!adsLoaded">
      <h4>Ads Blocked</h4>
      <i class="fas fa-thumbs-down"></i>
      <p>Please consider allowing ads to show on this site. This will allow us to bring you better content. </p>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      adsLoaded: false
    }
  },
  mounted () {
    this.adsLoaded = window.adsbygoogle.loaded || false
  }
}
</script>

<style lang="scss">
.failed {
    display: grid;
    grid-template-columns: repeat(1,minmax(1px, 1fr));
    grid-gap: 1rem;
    border: 1px solid #F44336;
    background: #f443365e;
    padding: 1rem;
    opacity: 0;
    border-radius: 0.3rem;
    &.absolute{
      opacity: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      bottom: -1px;
      right: -1px;
    }
    i {
      font-size: 2.5rem;
    }
}
</style>
