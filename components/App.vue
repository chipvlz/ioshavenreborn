<template lang="html">
  <div :class="{'App': true, 'editing': edit}" @click="showPopup($event, edit)">
    <div class="content" >

      <div class="title" v-if="!edit">{{data.title}}</div>
      <div class="image" v-if="!edit" :style="{'background-image': 'url(' + link('image') + ')'}"></div>
      <div class="version" v-if="!edit">Version: {{data.version}}</div>
      <a class="ipa button" :href="link('dl')" v-if="data.dl && !edit">Download .ipa</a>
      <a class="signed button" :href="link('signed')" v-if="data.signed && !edit">Install Signed</a>


      <div class="group" v-if="edit" v-for="key in Object.keys(data)">
        <label>{{key}}</label>
        <input v-model="data[key]" v-if="key !== 'desc' && key !== 'tags'">
        <textarea rows="8" cols="80" v-model="data[key]" v-if="key === 'desc'"></textarea>
        <tags class="input" v-model="data[key]" v-if="key === 'tags'" @tagmodified="tagUpdate"></tags>
      </div>

      <a class="danger button" v-if="edit">Delete App</a>

    </div>

    <popup :visible="popupVisible">
      <div class="header">{{data.title}}</div>
      <div class="body">
        <span v-html="data.desc" class="markdown-body"></span>
      </div>
      <div class="footer">
        <span></span>
        <span id="popup-button-wrapper">
          <a class="ipa button" :href="link('dl')" v-if="data.dl">Download .ipa</a>
          <a class="signed button" :href="link('signed')" v-if="data.signed">Install Signed</a>
        </span>

      </div>
    </popup>
  </div>
</template>

<script>
import Popup from '~/components/Popup.vue'
import Tags from '~/components/Tags.vue'

export default {
  components: {
    Popup,
    Tags
  },
  props: ['data', 'edit'],
  data () {
    return {
      popupVisible: false
    }
  },
  methods: {
    tagUpdate () {
      setTimeout(function () {
        window.dispatchEvent(new Event('resize'))
      })
    },
    link (type) {
      var t = this.data[type] || ''
      if (this.data[type] && this.data[type].slice(0, 4) === 'http') return this.data[type]
      else if (t.length > 0) {
        if (type === 'image') return 'https://dashboard.ioshaven.co/image/' + this.data[type]
        if (type === 'dl') return 'https://dashboard.ioshaven.co/ipa/' + this.data[type]
        if (type === 'signed') return this.data[type]
      } else return ''
    },
    showPopup (e, edit = false) {
      if (edit) return
      console.log(this.link('dl'))
      if (e.target.href) return
      this.popupVisible = !this.popupVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.group {
  label {
    display: block;
    text-align: left;
    margin-bottom: 0.2rem;
    font-size: 0.7rem;
    text-transform: uppercase;
  }
  .input, input, textarea {
    width: 100%
  }
}
.App {
  $color: #fff;
  background: $color;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.5s;
  &.editing {
    border: 3px dashed #607D8B;
    background: #e6eef7;
    .input, input, textarea {
      color: black;
      border: none;
      text-align: left;
      background: #f4f6f9;
      text-overflow: unset;
      padding: 1rem;
      height: auto;
      font-size: 1rem;
      resize: none;
    }
  }
  &:hover {
    box-shadow: 0px 6px 6px darken($color, 50%);
  }
  // width: 300px;
}
.content {
  display: grid;
  grid-gap: 1rem;
  text-align: center;
  padding: 1em;
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
    overflow-x: hidden;
    text-transform: none;
    font-size: 1.6rem;
    padding-bottom: 1rem;
    font-weight: bold;
}
.button {
  text-decoration: none;
  display: block;
  padding: 1rem;
  border: 1px solid;
  border-radius: 4px;
  outline: none !important;
  font-weight: bold;
  font-size: 1.1rem;
}


.ipa {
  $color: #2196f3;
  background: $color;
  color: white;
  border-color: darken($color, 10%);
  text-shadow: 0px 1px darken($color, 20%);
  &:hover {
    background: darken($color, 10%);
  }
}
.signed {
  $color: #8bc34a;
  background: $color;
  color: white;
  border-color: darken($color, 10%);
  text-shadow: 0px 1px darken($color, 20%);
  &:hover {
    background: darken($color, 10%);
  }
}
.danger {
  $color: #F44336;
  background: $color;
  color: white;
  border-color: darken($color, 10%);
  text-shadow: 0px 1px darken($color, 20%);
  &:hover {
    background: darken($color, 10%);
  }
}
.footer .button {
  display: inline-block;
  margin-left: 0.5rem;
  font-size: 0.9rem;
}
#popup-button-wrapper{
  display: flex;
}
#version{font-size: 0.5rem}

</style>
