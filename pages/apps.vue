<template lang="html">
  <div class="">

    <loading v-if="loading"/>
    <div class="search-bar-wrapper">
      <searchbar v-on:result="filterApps" v-if="!loading"/>
    </div>
    <ad-banner class="grid autorow"/>
    <div :class="{'apps': true, 'loading': searching}" id="apps">
        <app :data="app" :isapp="app.isapp" v-for="app in searchResults":key="app.id"/>
    </div>
    <div class="grid autorow" v-if="chunk <= searchResults.length">
      <div class="fullwidth more" @click="moreChunk">
        Load more apps
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import App from '~/components/App.vue'
import Loading from '~/components/Loading.vue'
import Searchbar from '~/components/Searchbar.vue'
import AdBanner from '~/components/ads/AdBanner.vue'

export default {
  components: {
    App,
    Loading,
    Searchbar,
    AdBanner
  },
  layout: 'default',
  async asyncData ({ params }) {
    let { data } = await axios.get('https://dashboard.ioshaven.co')
    return { apps: data }
  },
  data () {
    return {
      loading: true,
      searching: true,
      chunk: 7,
      searchResults: {},
      apps: {},
      searchData: {}
    }
  },
  created () {
    this.filterApps(this.searchResults, false)
  },
  methods: {
    moreChunk () {
      console.log('asdf')
      this.chunk += 7
      this.filterApps(this.searchData, true)
      setTimeout(function () {
        window.dispatchEvent(new Event('resize'))
      })
    },
    filterApps (search, resize = true) {
      this.searchData = search
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

      this.searchResults = this.searchResults.slice(0, this.chunk)

      let withads = []
      this.searchResults.forEach((app, index) => {
        app.isapp = true
        if (index % 7 === 4) withads.push({isapp: false})
        else withads.push(app)
      })

      // this.searchResults = withads

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
    // setTimeout(this.resizeAllGridItems, 10)
    window.onload = function () {
      setTimeout(function () {
        window.dispatchEvent(new Event('resize'))
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.apps{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  grid-auto-flow: dense;
  grid-auto-rows: 1px;
  max-width: 960px;
  &.autorow {
    grid-auto-rows: auto;
  }
}
.apps, .search-bar-wrapper {
  margin: auto;
  @media screen and (max-width: 575px){
    grid-template-columns: repeat(1, minmax(1px, 1fr));
    max-width: 350px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    grid-template-columns: repeat(1, minmax(1px, 1fr));
    max-width: 576px;
  }
  @media screen and (min-width: 768px) and (max-width: 1099px) {
    grid-template-columns: repeat(2, minmax(1px, 1fr));
    max-width: 768px;
  }
  @media screen and (min-width: 1100px) and (max-width: 1399px) {
    grid-template-columns: repeat(3, minmax(1px, 1fr));
    max-width: 1100px;
  }
  @media screen and (min-width: 1400px) {
    grid-template-columns: repeat(4, minmax(1px, 1fr));
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

.more {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
  margin-top: 1rem;
  border-radius: 0.5rem;
  color: #2196F3;
  background: white;
  cursor: pointer;
}

</style>
