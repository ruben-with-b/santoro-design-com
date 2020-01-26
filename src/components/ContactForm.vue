<template>
  <section class="section">
    <div class="container">
      <h1 class="is-family-secondary santoro-breadcrumb-mobile is-hidden-desktop has-text-white">{{ msg }}</h1>
      <h1 class="is-family-secondary santoro-breadcrumb is-hidden-touch">{{ msg }}</h1>
      

      <div class="sign-body">
        <h1 class="sign-headline">Sign Up</h1>
        <form action="" method="POST">
          <div class="input-group">
            <input type="text" id="userField" v-model="userData.username" required class="input-area">
            <label for="userField" class="labelUser">Username</label>
          </div>
          <div class="input-group">
            <input type="email" id="mailField" v-model="userData.mail" required class="input-area">
            <label for="mailField" class="labelMail">E-Mail</label>
          </div>
          <div class="input-group">
            <input type="password" id="passwordField" v-model="userData.password" required class="input-area">
            <label for="passwordField" class="labelPassword">Password</label>
            <router-link class="login" to="/login">
              Login &nbsp;›
            </router-link>
          </div>
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

.sign-body{
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
  width: 100vw;
  height: 85vh;

  .sign-headline{
    margin: 2em 0 2em 0;
  }

  .input-group{
    display: flex;
    flex-direction: column;
    margin: 0 0 1em 0;
    width: 18em;

    .input-area{
      outline: none;
      padding: 0.5em 0;
      border: none;
      background: none;
      border-bottom: 2px solid #ffffff;
      font-size: 1.1rem;
      &:focus{
        border-bottom: 2px solid orange;
      }
      &:focus + .labelUser,
      &:focus + .labelMail,
      &:focus + .labelPassword{
        top: -4em;
        font-size: 0.9rem;
      }
      &:valid + .labelUser,
      &:valid + .labelPassword,
      &:valid + .labelMail{
        top: -4em;
        font-size: 0.9rem;
      }
    }

    .labelUser,
    .labelMail,
    .labelPassword{
      position: relative;
      top: -2em;
      font-size: 1.1rem;
      transition: 100ms all ease-in-out;
    }
  }
  .error-box{
    color: orange;
    margin: 4em 0 0 0;
  }
}
</style>