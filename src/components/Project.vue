<template>
    <div>
        <div class="is-flex toggle-features cursor-pointer" @click="toggleFeatures">
            <icon-base class="acc-arrow-2" width="15" height="15" viewBox="0 0 25.12 45" icon-name="short-arrow">
                <icon-short-arrow />
            </icon-base>
            <h1 class="title is-size-4-mobile is-size-3-tablet is-family-secondary
                not-bold is-inline-block">Unser nächstes Projekt</h1>
        </div>
        <div v-show-slide="featuresOpen" class="features is-family-primary has-text-black">
            <div class="container-features">
                <p class="is-family-primary has-text-black p-after-h p-anim">
                    Unser gemeinsames Projekt wird üblicherweise folgende Schritte 
                    durchlaufen. Ich freue mich schon darauf!
                </p>
                <div class="columns">
                    <div class="column number-column is-flex wrap vcenter hcenter">
                        <div class="">
                            <icon-base class="" width="60" height="60" viewBox="0 0 140 140" icon-name="one">
                                <icon-number />
                            </icon-base>
                        </div>
                        <h1 class="title title-step is-size-5 is-family-primary has-text-centered">
                            Wir müssen reden!
                        </h1>
                    </div>
                    <div class="column column-illustration is-flex vcenter hcenter">
                        Here the illustration, please!
                    </div>
                    <div class="column">
                        <p class="is-family-primary has-text-black p-after-h p-anim">
                            Erzählen Sie mir Ihre Wünsche, Vorstellungen, Visionen und 
                            Erwartungen.<br><br>
                            Am besten persönlich, gerne aber auch telefonisch oder per
                            Videogespräch.
                        </p>
                    </div>
                    <div class="column number-column is-flex wrap vcenter hcenter">
                        <div class="">
                            <icon-base class="" width="60" height="60" viewBox="0 0 140 140" icon-name="one">
                                <icon-number />
                            </icon-base>
                        </div>
                        <h1 class="title title-step is-size-5 is-family-primary has-text-centered">
                            Wir werden sehen!
                        </h1>
                    </div>
                    <div class="column column-illustration is-flex vcenter hcenter">
                        Here the illustration, please!
                    </div>
                    <div class="column">
                        <p class="is-family-primary has-text-black p-after-h p-anim">
                            Wir stimmen uns zwecks Feinheiten wie Preis und Umfang 
                            ab, und dann kann es auch schon losgehen!
                        </p>
                    </div>
                    <div class="column number-column is-flex wrap vcenter hcenter">
                        <div class="">
                            <icon-base class="" width="60" height="60" viewBox="0 0 140 140" icon-name="one">
                                <icon-number />
                            </icon-base>
                        </div>
                        <h1 class="title title-step is-size-5 is-family-primary has-text-centered">
                            Wir hören voneinander!
                        </h1>
                    </div>
                    <div class="column column-illustration is-flex vcenter hcenter">
                        Here the illustration, please!
                    </div>
                    <div class="column">
                        <p class="is-family-primary has-text-black p-after-h p-anim">
                            In regelmäßigen Abständen hören Sie von mir und bekommen 
                            jede Menge Zwischenstände zu sehen. Damit Sie Bescheid 
                            wissen, Änderungen äußern und mich korrigieren können.
                        </p>
                    </div>
                    <div class="column number-column is-flex wrap vcenter hcenter">
                        <div class="">
                            <icon-base class="" width="60" height="60" viewBox="0 0 140 140" icon-name="one">
                                <icon-number />
                            </icon-base>
                        </div>
                        <h1 class="title title-step is-size-5 is-family-primary has-text-centered">
                            Wir werden es lieben!
                        </h1>
                    </div>
                    <div class="column column-illustration is-flex vcenter hcenter">
                        Here the illustration, please!
                    </div>
                    <div class="column">
                        <p class="is-family-primary has-text-black p-after-h p-anim">
                            Nach regem Austausch und Produktion geht es an den letzten Feinschliff.
                        </p>
                    </div>
                    <div class="column number-column is-flex wrap vcenter hcenter">
                        <div class="">
                            <icon-base class="" width="60" height="60" viewBox="0 0 140 140" icon-name="one">
                                <icon-number />
                            </icon-base>
                        </div>
                        <h1 class="title title-step is-size-5 is-family-primary has-text-centered">
                            Wir haben es geschafft!
                        </h1>
                    </div>
                    <div class="column column-illustration is-flex vcenter hcenter">
                        Here the illustration, please!
                    </div>
                    <div class="column">
                        <p class="is-family-primary has-text-black p-after-h p-anim">
                            Im letzten Schritt erfolgt die Übergabe, wir sind alle zufrieden, 
                            glücklich und ich konnte Ihnen hoffentlich helfen. <br><br>
                            Darüber hinaus bleiben wir gerne weiter in Konatkt.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import IconBase from '../components/IconBase.vue'
import IconShortArrow from '../components/icons/IconShortArrow.vue'
import IconNumber from '../components/icons/IconNumber.vue'

export default {
    name: 'Project',
    props: {
        msg: String
    },
    components: {
        IconBase,
        IconShortArrow,
        IconNumber
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
            let bg = document.querySelector('.body-bg')

            arrow.classList.toggle('up')
            bg.classList.toggle('toggle-bg')
        }
    }
}
</script>

<style lang="scss" scoped>

.number-column{
    margin: 4em 0 0 0;
}
.title-step{
    width: 100%;
    margin-top: 1em;
}

.column-illustration{
    width: 100%;
}
</style>
