<template lang="html">
  <div class="tags">
    <span class="tag" v-for="(tag,i) in tags" @click="removeTag(i)">
      {{tag}}
      <span class="delete">&times;</span>
    </span>
    <input @input="handleInput" :value="handleValue" placeholder="add tag">
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      tags: [],
      el: ''
    }
  },
  mounted () {
    if (typeof this.value === 'object') this.tags = this.value
  },
  computed: {
    handleValue () {
      let val = this.value
      if (this.tags.length > 0) {
        this.tags.forEach(tag => {
          val = val.slice(tag.length)
        })
      }
      return val
    }
  },
  methods: {
    removeTag (i) {
      this.tags.splice(i, 1)
      this.$emit('tagmodified', this.tags)
    },
    handleInput (e) {
      this.el = e.srcElement
      let val = e.target.value
      let t = val.split(',')
      if (t.length > 1) {
        this.tags.push(t[0])
        val = ''
        this.$emit('tagmodified', this.tags)
      }
      console.log(this.tags, this.value, val)
      return this.$emit('input', this.tags)
    }
  }
}
</script>

<style lang="scss" scoped>
span.tag {
    font-size: 0.8rem;
    padding: 0.4rem 0.7rem;
    background: #2197F3;
    margin: 0.1rem;
    border-radius: 50rem;
    color: white;
    display: inline-flex;
    align-items: center;
    span.delete {
      font-size: 1.2rem;
      margin-left: 0.5rem;
      margin-top: -0.1rem;
    }
}
.tags {
    display: flex;
    align-items: center;
    border: 1px solid;
    flex-wrap: wrap;
    input {
        background: none;
        border: none;
        padding: 0;
        line-height: 1rem;
        outline: none !important;
        width: 100%;
    }
}
</style>
