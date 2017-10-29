<template lang="html">
  <div class="">
    <loading v-if="!ready"/>

    <div class="grid grid-align" v-if="ready">

      <!-- S E L E C T   F O R M S -->
      <div class="types fullwidth" v-if="!typeOfSub">
        <div class="heading fullwidth">What would you like to contact us about?</div>
        <div class="type general" @click="changeType('general')">General</div>
        <div class="type request" @click="changeType('request')">Request</div>
        <div class="type bug" @click="changeType('bug')">Bug</div>
      </div>

      <!-- M A I N   F O R M S -->
      <div class="form fullwidth" v-if="typeOfSub">
        <div class="heading capitalize">{{typeOfSub}} form
          <div class="button" @click="changeType('')">Change form</div>
        </div>

        <div class="form-align note">
          Do you want us to contact you back?
          <a href="#" @click="contactBack = true">Yes</a> | <a href="#" @click="contactBack = false">No</a>
          <br> <strong>Note</strong> we can only contact you on Discord if you are apart of our discord server. Join <a href="https://discord.gg/mTbwMyQ">here</a>.
        </div>

        <div class="group">
          <label>Subject</label>
          <input type="text" class="field" v-model.trim="forms[typeOfSub].subject">
        </div>
        <div class="group" v-if="forms[typeOfSub].types">
          <label>Type</label>
          <select class="field" v-model.trim="forms[typeOfSub].type">
            <option disabled value="">Type of Request</option>
            <option v-for="t in forms[typeOfSub].types">{{t}}</option>
          </select>
        </div>
        <div class="group">
          <label>Message</label>
          <textarea rows="8" cols="80" v-model.trim="forms[typeOfSub].message" class="field"></textarea>
        </div>
      </div>

      <!-- C O N T A C T   F O R M -->
      <div class="form contact fullwidth" v-if="typeOfSub && contactBack">
        <div class="heading">Contact Me
          <div class="button" @click="contactBack = false">Nevermind!</div>
        </div>
        <div class="form-align note">
          <strong>Note</strong> All fields are optional and we will never share your information.
        </div>
        <div class="group" v-for="key in Object.keys(this.forms.contact)">
          <label>{{key}}</label>
          <input type="text" class="field" v-model.trim="forms.contact[key]">
        </div>
      </div>

      <!-- S U M I T   B U T T O N S -->
      <button class="button fullwidth submit" v-if="typeOfSub && !formIsValid" disabled>Submit</button>
      <button class="button fullwidth submit" @click="submitForm" v-if="typeOfSub && formIsValid">Submit</button>
    </div>

  </div>
</template>

<script>
import Loading from '~/components/Loading.vue'
export default {
  layout: 'default',
  components: {
    Loading
  },
  data () {
    return {
      submitting: false,
      contactBack: '',
      ready: false,
      typeOfSub: '',
      server: '',
      forms: {
        contact: {
          'Name': '',
          'Email': '',
          'Discord': '',
          'Twitter': '',
          'Reddit': ''
        },
        general: {
          color: '#8bc34a',
          subject: '',
          message: ''
        },
        request: {
          color: '#9c27b0',
          subject: '',
          message: '',
          type: '',
          types: ['App', 'Beta', 'Jailbreak', 'Other']
        },
        bug: {
          color: '#f44336',
          subject: '',
          message: '',
          type: '',
          types: ['App', 'Beta', 'Donating', 'Jailbreak', 'Website', 'Other']
        }
      },
      display: false
    }
  },
  mounted () {
    const client = new window.Discord.Client()
    client.login('MzcxODM5MDY1NTU5MTM4MzA1.DNbMKw.IEOg7hoUE2iyUyiZ2xaboy9kneU')
    client.on('ready', () => {
      this.server = client.channels.find('name', 'contact-requests')
      window.a = this.server
      this.ready = true
    })
  },
  computed: {
    formIsValid () {
      if (!this.typeOfSub) return false
      let valid = true
      let t = this.forms[this.typeOfSub]
      // console.log(this.$data)
      Object.keys(t).forEach(key => {
        if (!t[key]) valid = false
      })
      return valid
    }
  },
  methods: {
    changeType (x) {
      console.log(x)
      this.typeOfSub = x
    },
    submitForm () {
      this.submitting = true
      let embed = new window.Discord.RichEmbed()
      let t = this.forms[this.typeOfSub]
      embed.setColor(t.color)
      embed.setTitle('[' + this.typeOfSub + '] ' + t.subject.toUpperCase())
      embed.setDescription(t.message)
      if (t.type) embed.addField('type', t.type, true)
      embed.addField('\u200B', '\u200B', false)
      embed.addField('\u200B', '--- Contact Info ---', false)

      let c = this.forms.contact
      Object.keys(c).forEach(key => {
        if (c[key]) embed.addField(key, c[key], true)
      })
      embed.setFooter('sent via https://ioshaven.co/contact')
      this.server.send('', embed).then(res => {
        this.submitting = false
        this.ready = false
        window.setTimeout(() => {
          location.reload()
        }, 1000)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.types {
    display: grid;
    max-width: 960px;
    border: 1px solid;
    padding: 1rem;
    grid-gap: 0.5rem;
    margin: 1rem auto;
    grid-template-columns: repeat(3, 1fr);
    grid-row: 2;
    .full {
      grid-row: 1;
      grid-column: span 3
    }
}

.type {
    padding: 1rem 0;
    border: 1px solid;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 200;
    &:hover {color: white; cursor: pointer;}
    &.general:hover{
      background: #8bc34a;
    }
    &.request:hover{
      background: #9c27b0;
    }
    &.bug:hover{
      background: #f44336;
    }
}


.form {
    border: 1px solid;
    padding: 1rem;
    box-sizing: border-box;
    background: white;
}

.heading {
    font-size: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid;
    margin-bottom: 1rem;
    font-weight: 200;
    word-spacing: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &.capitalize {text-transform: capitalize}
}

.button {
    font-size: 1.2rem;
    background: #E91E63;
    color: white;
    padding: 1rem;
    cursor: pointer;
    text-align: center;
    &.submit {
      margin-top: 1rem;
      text-align: center;
      background: #03a9f4;
    }
    &:disabled {
      color: #aaa;
      background: #eee;
      cursor: not-allowed;
    }
}


.form .group {
  display: grid;
  grid-template-columns: 100px auto;
  padding: .5rem 0;
  align-items: center;
  label {
    font-size: 1.3rem;
    font-weight: 500;
    color: #888;
  }
}
.field {
    height: 100%;
    font-size: 1.5rem;
    padding: 1rem;
    width: 100%;
    background: #f2f2f2;
    border: 1px solid #666;
    @media screen and (max-width: 575px){
      grid-row: 2;
      grid-column: span 2;
    }
}

</style>
