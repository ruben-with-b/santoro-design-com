<template>
  <section class="section">
    <div class="container">
      <h1 class="is-family-secondary santoro-breadcrumb-mobile is-hidden-desktop has-text-white">{{ msg }}</h1>
      <h1 class="is-family-secondary santoro-breadcrumb is-hidden-touch">{{ msg }}</h1>
      

      <div class="form-body">
        <form action="" method="POST">
          <div class="input-group">
            <input type="text" id="userField" v-model="userData.username" required class="input-area">
            <label for="userField" class="labelName">Vorname Nachname</label>
          </div>
          <div class="input-group">
            <input type="text" id="companyField" v-model="userData.password" required class="input-area">
            <label for="companyField" class="labelCompany">Firma (optional)</label>
          </div>
          <div class="input-group">
            <input type="text" id="siteField" required class="input-area">
            <label for="siteField" class="labelSite">Homepage (optional)</label>
          </div>
          <div class="input-group">
            <input type="email" id="mailField" v-model="userData.mail" required class="input-area">
            <label for="mailField" class="labelMail">E-Mail</label>
          </div>
          <div class="input-group">
            <input type="text" id="subjectField" required class="input-area">
            <label for="subjectField" class="labelSubject">Betreff</label>
          </div>
          <div class="input-group">
            <textarea name="customerMessage" cols="50" rows="10" class="input-area text-area"
            placeholder="Ihre Anfrage"/>
            <label for="customerMessage" class="labelMessage">Nachricht</label>
          </div>
          <button class="button button-santoro-white">
            <router-link to="/contact" class="menu-link is-secondary is-family-secondary">
              <div class="arrow-mask">  
                <icon-base class="santoro-arrow" width="1" height="1"
                  viewBox="0 0 616.49 167.02" icon-name="arrow"
                  iconColor="#FFFFFF">
                  <icon-arrow />
                </icon-base>
              </div>
              <span class="next-to-icon">Abschicken</span>
            </router-link>
          </button>
          <div v-if="responseNotOk" class="error-box">
            <p>
              Ouch... Any input missing?<br>
              <b>Try again!</b>
            </p>
          </div>
        </form>
      </div>



    </div>
  </section>
</template>

<script>
import IconBase from '../components/IconBase.vue'
import IconArrow from '../components/icons/IconArrow.vue'


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
      userData: {
        username: '',
        mail: '',
        password: ''
      },
      responseNotOk: false
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