<template lang="html">
  <div class="">
    <loading v-if="loading"/>
    <div class="edit-buttons align">
      <div class="item" v-if="!editing" @click="toggleEdit">
        <i class="fas fa-pencil"></i> Edit
      </div>

      <div class="item" v-if="editing" @click="toggleEdit">
        <i class="fas fa-eye"></i> Preview
      </div>

      <div class="item" v-if="!editing" @click="changeView">
        <i class="fas fa-eye"></i> View {{changeViewTo}}
      </div>

      <div class="item" v-if="editing" @click="createApp">
        <i class="fas fa-plus"></i> Create
      </div>

      <div class="item" v-if="editing" @click="saveApps('save')">
        <i class="fas fa-save"></i> Save
      </div>

      <div class="item" v-if="editing" @click="saveApps('live')">
        <i class="fas fa-cloud-upload"></i> Go Live
      </div>

    </div>
    <div class="search-bar-wrapper align">
      <searchbar v-on:result="filterApps"/>
    </div>

    <div :class="{'apps': true, 'align': true, 'loading': searching, 'editing': editing}" id="apps">
        <app :edit="editing" :data="app" v-for="(app, key) in searchResults":key="app.uid" @remove="removeApp"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import App from '~/components/App.vue'
import Loading from '~/components/Loading.vue'
import Searchbar from '~/components/Searchbar.vue'
import random from 'randomatic'

export default {
  components: {
    App,
    Loading,
    Searchbar
  },
  layout: 'default',
  async asyncData ({ params }) {
    let { data } = await axios.get('http://localhost:4433/api/apps/saved')
    return { apps: data, searchResults: data }
  },
  data () {
    return {
      loading: true,
      searching: true,
      editing: false,
      changeViewTo: 'live'
    }
  },
  methods: {
    removeApp (app) {
      this.loading = true
      let key = app.title + '#' + app.uid
      delete this.apps[key]
      this.filterApps('', true)
      this.loading = false
    },
    changeView () {
      this.loading = true
      axios.get('http://localhost:4433/api/apps/' + this.changeViewTo).then(res => {
        this.apps = this.apps = Object.assign({}, res.data)
        this.apps = this.searchResults = Object.assign({}, res.data)
        this.changeViewTo = (this.changeViewTo === 'live') ? 'saved' : 'live'
        this.filterApps('', true)
        this.loading = false
      })
    },
    saveApps (mode) {
      console.log(mode)
      this.loading = true
      let obj = {}
      Object.keys(this.apps).forEach(key => {
        let app = this.apps[key]
        if (!app.uid) app.uid = random('0', 4)
        obj[app.title + '#' + app.uid] = this.apps[key]
      })
      this.apps = Object.assign({}, obj)
      axios.post('http://localhost:4433/api/apps/' + mode, {
        apps: this.apps
      }).then(response => {
        this.loading = false
      })
    },
    createApp () {
      let app = {
        title: 'Untitled',
        image: '',
        version: '',
        desc: '',
        dl: '',
        signed: '',
        tags: []
      }
      // console.log(this.apps)
      let uid = random('0', 4)
      this.apps['untitled#' + uid] = app
      this.searchResults['untitled#' + uid] = app
      this.filterApps({text: 'untitled'}, true)
    },
    toggleEdit () {
      this.editing = !this.editing
      this.loading = true
      setTimeout(function () {
        window.dispatchEvent(new Event('resize'))
      })
    },
    filterApps (search, resize = true) {
      this.searchResults = []
      let sorted = Object.keys(this.apps).sort((a, b) => {
        return a.toLowerCase().localeCompare(b.toLowerCase())
      })
      sorted.forEach((key, index) => {
        this.searchResults.push(this.apps[key])
      })

      if (search.text) {
        this.searchResults = this.searchResults.filter(app => {
          let found = false
          let t = app.title.toLowerCase()
          let s = search.text.toLowerCase()

          if (t.includes(s.toLowerCase())) found = true
          if (app.tags) {
            app.tags.forEach(tag => {
              if (tag.toLowerCase().includes(s.toLowerCase())) found = true
            })
          }
          return found
        })
      }

      if (search.unsigned) {
        this.searchResults = this.searchResults.filter(app => {
          return app.dl
        })
      }

      if (search.signed) {
        this.searchResults = this.searchResults.filter(app => {
          return app.signed
        })
      }

      if (search.tags) {
        this.searchResults = this.searchResults.filter(app => {
          if (!app.tags) return false
          let found = false
          app.tags.forEach(tag => {
            if (tag.toLowerCase() === 'game' || tag.toLowerCase() === 'games') found = true
          })
          return found
        })
      }

      if (resize) {
        this.searching = true
        setTimeout(function () {
          window.dispatchEvent(new Event('resize'))
        })
      }
    },
    resizeGridItem (item) {
      let grid = document.getElementsByClassName('apps')[0]
      let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'))
      let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'))
      let rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap))
      item.style.gridRowEnd = 'span ' + rowSpan
    },
    resizeAllGridItems () {
      let allItems = document.getElementsByClassName('App')
      for (let x = 0; x < allItems.length; x++) {
        this.resizeGridItem(allItems[x])
      }
      this.loading = false
      this.searching = false
      // document.getElementById('apps').style.visibilty = 'visible'
    },
    resizeInstance (instance) {
      let item = instance.elements[0]
      this.resizeGridItem(item)
    }
  },
  mounted () {
    // this.loading = true
    window.addEventListener('resize', this.resizeAllGridItems)
    // window.random = random
    // setTimeout(this.resizeAllGridItems, 10)
    window.onload = function () {
      this.filterApps('', true)
      setTimeout(function () {
        window.dispatchEvent(new Event('resize'))
      })
    }.bind(this)
  }
}
</script>

<style lang="scss" scoped>
.edit-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 1rem;
}
.item {
  font-size: 1.1rem;
  border: 1px solid #000;
  padding: 0.5rem;
  text-align: center;
  background: white;
  border-radius: 4px;
  &:hover{
    cursor: pointer;
    box-shadow: 0px 2px 2px darken(white, 50%);
  }
}

.apps{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  grid-auto-flow: dense;
  grid-auto-rows: 1px;
  max-width: 960px;
  &.editing{
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  }
}
.align {
  margin: auto;
  @media screen and (max-width: 575px){
    grid-template-columns: repeat(1, 1fr);
    max-width: 350px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 576px;
  }
  @media screen and (min-width: 768px) and (max-width: 1099px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 768px;
  }
  @media screen and (min-width: 1100px) and (max-width: 1399px) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1100px;
  }
  @media screen and (min-width: 1400px) {
    grid-template-columns: repeat(5, 1fr);
    max-width: 1400px;
  }
}
.apps.loading {
  visibility: hidden;
}

.search-bar-wrapper {
  padding-bottom: 1rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid;
}

</style>
