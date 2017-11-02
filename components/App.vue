<template lang="html">
  <div class="App" @click="showPopup">
    <div class="content" v-if="!isapp">
        <ad-fluid/>
    </div>

    <div class="content" v-if="isapp">
      <div class="title">{{data.title}}</div>
      <div class="image" :style="{'background-image': 'url(' + link('image') + ')'}"></div>
      <div class="version">Version: {{data.version}}</div>
      <a class="ipa button" :href="link('dl')" v-if="data.dl">Download .ipa</a>
      <a class="signed button" :href="link('signed')" v-if="data.signed">Install Signed</a>
    </div>

    <popup :visible="popupVisible" v-if="isapp">
      <div class="header">{{data.title}}</div>
      <div class="body">
        <span v-html="data.desc" class="markdown-body"></span>
      </div>
      <div class="footer">
        <span class="version">Version: {{data.version}}</span>
        <span id="popup-button-wrapper">
          <a class="ipa button smaller" :href="link('dl')" v-if="data.dl">Download .ipa</a>
          <a class="signed button smaller" :href="link('signed')" v-if="data.signed">Install Signed</a>
        </span>
      </div>
    </popup>
  </div>
</template>

<script>
import Popup from '~/components/Popup.vue'
import AdFluid from '~/components/ads/AdFluid.vue'

export default {
  components: {
    Popup,
    AdFluid
  },
  props: ['data', 'isapp'],
  data () {
    return {
      popupVisible: false
    }
  },
  methods: {
    link (type) {
      var t = this.data[type] || ''
      if (this.data[type] && this.data[type].slice(0, 4) === 'http') return this.data[type]
      else if (t.length > 0) {
        if (type === 'image') return 'https://dashboard.ioshaven.co/image/' + this.data[type]
        if (type === 'dl') return 'https://dashboard.ioshaven.co/ipa/' + this.data[type]
        if (type === 'signed') return this.data[type]
      } else return ''
    },
    showPopup (e) {
      console.log(this.link('dl'))
      if (e.target.href) return
      this.popupVisible = !this.popupVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.App {
  $color: #fff;
  background: $color;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    box-shadow: 0px 6px 6px darken($color, 50%);
  }
  position: relative;
  // width: 100%;
  // display: block;
}
.content {
  display: grid;
  grid-gap: 1rem;
  text-align: center;
  padding: 1em;
  // width: 100%;
  grid-template-columns: repeat(1,minmax(1px, 1fr))
}
.image {
    height: 13rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}

.title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-transform: none;
    font-size: 1.6rem;
    padding-bottom: 1rem;
    font-weight: bold;
    border-bottom:1px solid #ccc
}
.button {
  text-decoration: none;
  display: block;
  padding: 1.5rem;
  border: 0.06rem solid;
  border-radius: .5rem;
  outline: none !important;
  font-weight: bold;
  font-size: 1.1rem;
  position: relative;
  border-bottom-width: 0.2625rem;
  &.smaller {
    padding: 0.5rem;
    display: inline-flex;
    align-items: center;
  }
}


.ipa {
  $color: #2196f3;
  background: $color;
  color: white;
  border-color: darken($color, 15%);
  text-shadow: 0px 1px darken($color, 20%);
  transition: all 0.5s;
  &:hover {
    background: darken($color, 7%);
  }
  &:focus {
    border-width: 0.06rem;
  }
}
.signed {
  $color: #8bc34a;
  background: $color;
  color: white;
  border-color: darken($color, 15%);
  text-shadow: 0px 1px darken($color, 20%);
  transition: all 0.5s;
  &:hover {
    background: darken($color, 7%);
  }
  &:focus {
    border-width: 0.06rem;
  }
}
.footer .button {
  // display: inline-block;
  margin-left: 0.5rem;
  font-size: 0.9rem;
}
.version {
  opacity: 0.6;
  font-size: 0.7rem;
}
#popup-button-wrapper{
  display: flex;
}
// #version{font-size: 0.5rem}

</style>
