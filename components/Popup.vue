<template lang="html">
  <div class="Popup" v-show="isVisible">
    <div class="background"></div>
    <div class="window">
      <div class="content">
        <div class="toggle header" v-on:click="isVisible = !isVisible">
          CLOSE <i class="fal fa-times"></i>
        </div>
        <slot>

        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['visible'],
  data () {
    return {
      isVisible: false
    }
  },
  watch: {
    visible () {
      this.isVisible = this.visible
    }
  }
}
</script>

<style lang="scss" scoped>
.background {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    z-index: 201;
}
.window {
  position: fixed;
  top: 2rem;
  left: 0;
  right: 0;
  z-index: 201;
  padding: 0 1rem;
}
// .grid {
//     position: fixed;
//     top: 2rem;
//     left: 0;
//     right: 0;
//     z-index: 201;
//     padding: 0 1rem;
// }
.content {
    background: white;
    width: 100%;
    margin: auto;
    padding: 2rem 1rem 1rem;
    border: 1px solid;
    border-radius: 4px;
    position: relative;
    max-width: 960px;
}
.header, .footer {
    font-size: 1.5rem;
    padding: 1rem;
    border-bottom: 1px solid;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 202;
    display: flex;
    height: 4rem;
    align-items: center;
    overflow: hidden;
}
.toggle {
    background: white;
    cursor: pointer;
    z-index: 203;
    left: auto;
    right: 0;
    width: auto;
    font-size: 1rem;
    border-radius: 0px 4px 0px 0px;
}.toggle i {margin-left: 0.3rem;}

.body {
    margin: 2rem 0 3rem;
    font-size: 1.2rem;
    padding: 1rem 0;
    height: 50vh;
    overflow: auto;
}
.footer {
  top: auto;
  bottom: 0;
  border-bottom: none;
  border-top: 1px solid;
  justify-content: space-between;
  height: 4rem;
}
</style>
