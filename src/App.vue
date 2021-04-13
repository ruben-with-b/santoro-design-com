<template>
  <div id="app">
    <router-view></router-view>
      <cookie-law
        message="Ich liebe Cookies 🍪 Sie sorgen dafür, dass diese Website sauber
          läuft und ich über deinen Besuch informiert werde."
        buttonText="Ok, passt!"
        buttonLink="/privacy"
        buttonLinkText="Datenschutzerklärung"
        buttonClass="santoro-cookie-button"
      >
      </cookie-law>
  </div>
</template>

<script>
import CookieLaw from 'vue-cookie-law'

export default {
  name: 'app',
    components: { CookieLaw }
}
</script>

<style lang="scss">
.Cookie{
  background: #f69f19;
}

</style>
