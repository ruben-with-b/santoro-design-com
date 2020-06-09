<template>
  <section class="section">
    <div class="container">
      <h1 class="is-family-secondary santoro-breadcrumb-mobile is-hidden-desktop has-text-white">{{ msg }}</h1>
      <h1 class="is-family-secondary santoro-breadcrumb is-hidden-touch has-text-white">{{ msg }}</h1>
      <div class="form-body">
        <form>
          <div class="input-group">
            <input  type="text" id="userField" v-model="formData.name"
                    class="input-area" placeholder=" ">
            <label for="userField" class="labelName">Vorname Nachname</label>
          </div>
          <div class="input-group">
            <input  type="text" id="companyField" v-model="formData.company"
                    class="input-area" placeholder=" ">
            <label for="companyField" class="labelCompany">Firma (optional)</label>
          </div>
          <div class="input-group">
            <input  type="url" id="siteField" v-model="formData.homepage"
                    class="input-area" placeholder=" ">
            <label for="siteField" class="labelSite">Homepage (optional)</label>
          </div>
          <div class="input-group">
            <input  type="email" id="mailField" v-model="formData.mail"
                    class="input-area" placeholder=" ">
            <label for="mailField" class="labelMail">E-Mail</label>
          </div>
          <div class="input-group">
            <input  type="text" id="subjectField" v-model="formData.subject"
                    class="input-area" placeholder=" ">
            <label for="subjectField" class="labelSubject">Betreff</label>
          </div>
          <div class="input-group">
            <textarea name="customerMessage" cols="50" rows="10"
            class="input-area text-area" v-model="formData.message"
            placeholder="Ihre Anfrage"/>
            <label for="customerMessage" class="labelMessage">Nachricht</label>
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
          <div class="error-box">
            <p v-if="responseNotOk">
              <span v-for="error in errors" :key="error">{{ error }}</span>
            </p>
            <p v-else>
              <span v-if="success">Prima, Ihre Nachricht kam an!</span>
            </p>
          </div>
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
      success: false,
      data: null,
      errors: []
    }
  },
  methods: {
    async submitForm () {
      if (!this.formData.name || this.formData.name.length < 3) {
        this.errors.push('Wie heißen Sie denn? ');
      }
      const mailFormat = /\S+@\S+\.\S+/;
      if (!this.formData.mail || !mailFormat.test(this.formData.mail)) {
        this.errors.push('Stimmt die Mailadresse? ');
      }
      if (!this.formData.subject) {
        this.errors.push('Fällt Ihnen noch ein Betreff ein? ');
      }
      if (!this.formData.message || this.formData.message.length < 10) {
        this.errors.push('Schreiben Sie ruhig etwas. Frei raus!');
      }

      if (this.errors.length === 0) {
        this.errors = [];
        try{
          const url = '../server/mailer.php';
          // post json to server
          await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.formData),
          });
          // clear formData
          for (let input in this.formData){
            this.formData[input] = "";
          }
          this.responseNotOk = false;
          this.success = true;
        } catch (error) {
          console.error(error);
        }
      } else this.responseNotOk = true;
    }
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