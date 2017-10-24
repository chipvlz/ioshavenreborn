<template lang="html">
  <div class="Contact-Page" v-if="ready">
    <div class="types" v-if="!typeOfSub">
      <div class="heading full">Choose Type</div>
      <div class="type general" @click="changeType('general')">General</div>
      <div class="type request" @click="changeType('request')">Request</div>
      <div class="type bug" @click="changeType('bug')">Bug</div>
    </div>


    <div class="form general" v-if="typeOfSub == 'general'">
      <div class="heading">General form
        <div class="button" @click="changeType('')">Change form</div>
      </div>
      <div class="group">
        <label>Subject</label>
        <input type="text" class="field" v-model.trim="general.subject">
      </div>
      <div class="group">
        <label>Message</label>
        <textarea rows="8" cols="80" v-model.trim="general.message" class="field"></textarea>
      </div>
    </div>



    <div class="form request" v-if="typeOfSub == 'request'">
      <div class="heading">Request form
        <div class="button" @click="changeType('')">Change form</div>
      </div>
      <div class="group">
        <label>Subject</label>
        <input type="text" class="field" v-model.trim="request.subject">
      </div>
      <div class="group">
        <label>Type</label>
        <select class="field" v-model.trim="request.type">
          <option disabled value="">Type of Request</option>
          <option>App</option>
          <option>Beta</option>
          <option>Jailbreak</option>
          <option>Other</option>
        </select>
      </div>
      <div class="group">
        <label>Message</label>
        <textarea rows="8" cols="80" v-model.trim="request.message" class="field"></textarea>
      </div>
    </div>



    <div class="form bug" v-if="typeOfSub == 'bug'">
      <div class="heading">Bug form
        <div class="button" @click="changeType('')">Change form</div>
      </div>
      <div class="group">
        <label>Subject</label>
        <input type="text" class="field" v-model.trim="bug.subject">
      </div>
      <div class="group">
        <label>Type</label>
        <select class="field" v-model.trim="bug.type">
          <option disabled value="">Type of bug</option>
          <option>App</option>
          <option>Beta</option>
          <option>Donating</option>
          <option>Jailbreak</option>
          <option>Website</option>
          <option>Other</option>
        </select>
      </div>
      <div class="group">
        <label>Message</label>
        <textarea rows="8" cols="80" v-model.trim="bug.message" class="field"></textarea>
      </div>
    </div>



    <div class="form-align note" v-if="typeOfSub && contactBack !== 'no'">
      Do you want us to contact you back?
      <a href="#" @click="contactBack = 'yes'">Yes</a> | <a href="#" @click="contactBack = 'no'">No</a>
      <br> <strong>Note</strong> we can only contact you on Discord if you are apart of our discord server. Join <a href="https://discord.gg/mTbwMyQ">here</a>.
    </div>
    <div class="form contact" v-if="typeOfSub && contactBack === 'yes'">
      <div class="heading">Contact Methods</div>
      <div class="group">
        <label>Name</label>
        <input type="text" class="field" v-model.trim="contact.name">
      </div>
      <div class="group">
        <label>Email</label>
        <input type="text" class="field" v-model.trim="contact.email">
      </div>
      <div class="group">
        <label>Twitter</label>
        <input type="text" class="field" v-model.trim="contact.twitter">
      </div>
      <div class="group">
        <label>Discord</label>
        <input type="text" class="field" v-model.trim="contact.discord">
      </div>
      <div class="group">
        <label>Reddit</label>
        <input type="text" class="field" v-model.trim="contact.reddit">
      </div>
    </div>

    <button class="button form-align submit" v-if="typeOfSub && !formIsValid" disabled>Submit</button>
    <button class="button form-align submit" @click="submitForm" v-if="typeOfSub && formIsValid">Submit</button>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data () {
    return {
      contactBack: '',
      ready: false,
      typeOfSub: '',
      server: '',
      contact: {},
      general: {
        subject: '',
        message: ''
      },
      request: {
        subject: '',
        message: '',
        type: ''
      },
      bug: {
        subject: '',
        message: '',
        type: ''
      },
      display: false
    }
  },
  mounted () {
    const client = new window.Discord.Client()
    client.login('')
    client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`)
      this.server = client.channels.find('name', 'general')
      this.ready = true
    })
  },
  computed: {
    formIsValid () {
      if (!this.typeOfSub) return false
      let valid = true
      let t = this[this.typeOfSub]
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
      let str = ''
      let t = this[this.typeOfSub]
      Object.keys(t).forEach(key => {
        str += `\n**${key.toUpperCase()}:**`
        str += '\n```\n' + t[key] + '```\n'
      })
      str += '\n\n***---Contact Info---***\n'
      Object.keys(this.contact).forEach(key => {
        str += `\n**${key.toUpperCase()}:**`
        str += '\n```\n' + this.contact[key] + '```\n'
      })
      str += '---------\n'
      str += 'submitted via https://ioshaven.co/contact'

      this.server.send(str).then(message => {
        console.log('sent')
      }).catch(console.error)
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
    grid-gap: 1rem;
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
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
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

.form, .form-align {
  display: block;
  max-width: 960px;
  width: 100%;
  margin: auto;
}
.form {
    border: 1px solid;
    padding: 1rem;
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
}

.button {
    font-size: 1.2rem;
    background: #E91E63;
    color: white;
    padding: 1rem;
    cursor: pointer;
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

.note {
    font-size: 1rem;
    color: #666;
    font-weight: 100;
    padding-left: 1rem;
    border-left: 5px solid gold;
    background: cornsilk;
    padding: 1rem;
    margin: 1rem auto;
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
    background: white;
    @media screen and (max-width: 575px){
      grid-row: 2;
      grid-column: span 2;
    }
}

</style>
