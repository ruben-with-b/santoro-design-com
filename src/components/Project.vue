<template>
    <div>
        <div class="is-flex toggle-features cursor-pointer" @click="toggleFeatures">
            <icon-base class="acc-arrow-2" width="15" height="15" viewBox="0 0 25.12 45" icon-name="short-arrow">
                <icon-short-arrow />
            </icon-base>
            <h1 class="title is-size-4-mobile is-size-3-tablet is-family-secondary
                not-bold is-inline-block">Unser nächstes Projekt</h1>
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

</style>
