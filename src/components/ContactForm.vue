<template>
  <section class="section">
    <div class="container">
      <h1 class="is-family-secondary santoro-breadcrumb-mobile is-hidden-desktop has-text-white">{{ msg }}</h1>
      <h1 class="is-family-secondary santoro-breadcrumb is-hidden-touch has-text-white">{{ msg }}</h1>
      <div class="form-body">
        <form>
          <div class="input-group">
            <input type="text" id="userField" v-model="formData.name"  class="input-area">
            <label for="userField" class="labelName">Vorname Nachname</label>
          </div>
          <div class="input-group">
            <input type="text" id="companyField" v-model="formData.company" class="input-area">
            <label for="companyField" class="labelCompany">Firma (optional)</label>
          </div>
          <div class="input-group">
            <input type="url" id="siteField" v-model="formData.homepage" class="input-area">
            <label for="siteField" class="labelSite">Homepage (optional)</label>
          </div>
          <div class="input-group">
            <input type="email" id="mailField" v-model="formData.mail"  class="input-area">
            <label for="mailField" class="labelMail">E-Mail</label>
          </div>
          <div class="input-group">
            <input type="text" id="subjectField" v-model="formData.subject"  class="input-area">
            <label for="subjectField" class="labelSubject">Betreff</label>
          </div>
          <div class="input-group">
            <textarea name="customerMessage" cols="50" rows="10" class="input-area text-area"
            v-model="formData.message" placeholder="Ihre Anfrage"/>
            <label for="customerMessage" class="labelMessage">Nachricht</label>
          </div>
          <div v-if="responseNotOk" class="error-box">
            <p>
              Ouch... Any input missing?<br>
              <b>Try again!</b>
            </p>
          </div>
        </form>
        <button class="button button-santoro-white">
            <a @click="submitForm" class="menu-link is-secondary is-family-secondary">
              <div class="arrow-mask">  
                <icon-base class="santoro-arrow" width="1" height="1"
                  viewBox="0 0 616.49 167.02" icon-name="arrow"
                  iconColor="#FFFFFF">
                  <icon-arrow />
                </icon-base>
              </div>
              <span class="next-to-icon">Abschicken</span>
            </a>
          </button>
      </div>
    </div>
  </section>
</template>

<script>
import IconBase from '../components/IconBase.vue';
import IconArrow from '../components/icons/IconArrow.vue';

export default {
  name: 'ContactForm',
  props: {
    msg: String
  },
  components: {
    IconBase,
    IconArrow
  },
  data () {
    return {
      formData: {
        name: '',
        company: '',
        homepage: '',
        mail: '',
        subject: '',
        message: ''
      },
      responseNotOk: false,
      data: null
    }
  },
  mounted () {
  },
  methods: {
    // async submitForm () {
    //   // const sendMail = require('../../server/mail.js');
    //   const sgMail = require('@sendgrid/mail');
    //   sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    //   const headers = {
    //       "Access-Control-Allow-Origin" : "*", // better change this for production
    //       "Access-Control-Allow-Methods": "POST",
    //       "Access-Control-Allow-Headers": "Content-Type"
    //   };

    //   // finally everything is fine and we can send the mail
    //   await sgMail.send({
    //       to: 'hi@santoro-design.com',
    //       from: this.formData.mail,
    //       subject: this.formData.subject,
    //       text: this.formData.message
    //   });

      // const url = '../server/mail.js';
      // // if form is not without items
      //   try{
      //     // post json to server
      //     await fetch(url, {
      //       method: 'POST',
      //       headers: {'Content-Type': 'application/json'},
      //       body: JSON.stringify(this.formData),
      //     });
      //   } catch (error) {
      //     console.error(error);
      //   }    
    //}
  }
}
</script>

<style lang="scss" scoped>
.santoro-breadcrumb-mobile::after{
  content: '';
  background: #ffffff;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  box-shadow: 0 0 0em 100em #0a0a0a inset;
  -webkit-text-fill-color: #F69F19;
}
</style>