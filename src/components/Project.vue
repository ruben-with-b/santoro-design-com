<template>
    <div>
        <div class="is-flex toggle-features cursor-pointer" @click="toggleFeatures">
            <icon-base class="acc-arrow-2" width="45" height="45" viewBox="0 0 616.49 167.02" icon-name="short-arrow">
                <icon-short-arrow />
            </icon-base>
            <h4 class="title is-4 is-family-secondary not-bold is-inline-block">Unser Projekt</h4>
        </div>
        <p v-show-slide="featuresOpen" class="features is-family-primary has-text-black p-after-h">
            Mit einer sauberen Webseite sind Sie und Ihre Informationen auffindbar.
            <br><br>
            Ein unverwechselbarer und wiedererkennbarer Look verpasst Ihnen endlich
            ein respektables Erscheinungsbild.
            <br><br>
            So einfach ist das!
        </p>
    </div>
</template>

<script>
import IconBase from '../components/IconBase.vue'
import IconShortArrow from '../components/icons/IconShortArrow.vue'

export default {
    name: 'Project',
    props: {
        msg: String
    },
    components: {
        IconBase,
        IconShortArrow,
        //IconArrow
    },
    data () {
        return {
        featuresOpen: false
        }
    },
    methods: {
        toggleFeatures () {
        this.featuresOpen = !this.featuresOpen
        let arrow = document.querySelector('.acc-arrow-2')
        arrow.classList.toggle('up')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.acc-arrow-2{
  transform: rotate(90deg);
  transition: 0.55s;
}

.up{
  transform: rotate(270deg)
}

</style>
