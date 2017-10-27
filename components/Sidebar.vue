<template lang="html">
  <div class="Sidebar">
    <div id="backdrop"  v-if="isVisible" v-on:click="toggle"></div>
    <a href="/" id="title">{{title}}</a>
    <div class="menu hidden" v-if="!isVisible" v-on:click="toggle">
      <div class="toggle">
        MENU <i class="fal fa-bars"></i>
      </div>
    </div>
    <div :style="{'background-color': color}" :class="{'menu': true, 'visible': isVisible, 'translate':!isVisible}">
      <div class="toggle" v-on:click="toggle">
        CLOSE <i class="fal fa-times"></i>
      </div>

      <slot>
        please put content in me.
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['color', 'title'],
  data () {
    return {
      isVisible: false
    }
  },
  mounted () {
    window.addEventListener('toggleSidebar', () => {
      this.isVisible = !this.isVisible
    }, false)
  },
  methods: {
    toggle () {
      window.dispatchEvent(new Event('toggleSidebar'))
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
.toggle {
    color: inherit;
    font-size: 1.2rem;
    line-height: 2rem;
    text-align: right;
    padding: 1rem 4rem;
    position: absolute;
    top: 0;
    right: 0;
    color: inherit;
    cursor: pointer;
}
#backdrop{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 101;
}
#title {
    background: #141a1d;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 1rem 3rem;
    box-sizing: border-box;
    color: white;
    height: 4rem;
    font-size: 1.5rem;
    text-decoration: none;
    z-index: 100;
}
.menu {
    position: fixed;
    top: 0;
    padding: 4rem 2rem 2rem;
    box-sizing: border-box;
    z-index: 101;
    color: white;
    right: -15rem;
}
.menu.hidden{
  width: auto;
  right: 0;
  padding: 0;
  background-color: transparent !important;
  .toggle {
    position: relative;
    padding: 1rem 2rem;
  }
}

.menu.translate{
  bottom: 0;
  right: -400px;
  opacity: 0;
  transition: all 0.5s;
}
.menu.visible{
  bottom: 0;
  width: 400px;
  right: -3rem;
  overflow-y: scroll;
  transition: right 0.5s;
  opacity: 1;
  @media screen and (max-width: 575px){
    width: 350px;
  }
}

.item {
    padding: 1rem;
    color: inherit;
    font-size: 1.2rem;
    border-bottom: 1px solid;
    text-transform: uppercase;
    display: block;
    text-decoration: none;
}
.item:last-child {
  border-bottom: none;
}
.item:hover{
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.item > svg, .item > i {
  margin-right: 1rem
}

</style>
