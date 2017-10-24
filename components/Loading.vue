<template lang="html">
  <div class="Loading">
    <div class="">
      Loading
    </div>
    <div class="">
      <i class="fas fa-spinner-third fa-spin"></i>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.Loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 6rem;
    color: white;
    z-index: 999;
    padding: 4rem 0rem 10rem;
    background: rgba(0,0,0,0.8);
}
</style>
