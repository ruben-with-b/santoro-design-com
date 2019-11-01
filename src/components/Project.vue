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
                <hooper ref="carousel" :settings="hooperSettings">
                    <slide>
                        <div class="header-infographic is-flex wrap vcenter hcenter">
                            <icon-base class="" width="60" height="60" viewBox="0 0 140 140" icon-name="one">
                                <icon-number-one />
                            </icon-base>
                            <h1 class="title title-step is-size-5 is-family-primary has-text-centered">
                                Wir müssen reden!
                            </h1>
                        </div>
                        <div class="columns">
                            <div class="column is-flex vcenter hcenter">
                                <lottie :options="defaultOptions" :height="auto" :width="250" v-on:animCreated="loadAnimation"/>
                            </div>
                            <div class="column is-flex vcenter hcenter">
                                <p class="is-family-primary has-text-black p-after-h p-infographic">
                                    Erzählen Sie mir Ihre Wünsche, Vorstellungen, Visionen und 
                                    Erwartungen.<br><br>
                                    Am besten persönlich, gerne aber auch telefonisch oder per
                                    Videogespräch.
                                </p>
                            </div>
                        </div>
                    </slide>
                    <slide>
                        <div class="header-infographic is-flex wrap vcenter hcenter">
                            <icon-base class="" width="60" height="60" viewBox="0 0 140 140" icon-name="one">
                                <icon-number-two />
                            </icon-base>
                            <h1 class="title title-step is-size-5 is-family-primary has-text-centered">
                                Wir werden sehen!
                            </h1>
                        </div>
                        <div class="columns infogr-reverse">
                            <div class="column is-flex vcenter hcenter">
                                <lottie :options="defaultOptionsTwo" :height="auto" :width="400" v-on:animCreated="loadAnimation"/>
                            </div>
                            <div class="column is-flex vcenter hcenter">
                                <p class="is-family-primary has-text-black p-after-h p-infographic">
                                    Wir stimmen uns zwecks Feinheiten wie Preis und Umfang 
                                    ab, und dann kann es auch schon losgehen!
                                </p>
                            </div>
                        </div>
                    </slide>
                    <slide>
                        <div class="header-infographic is-flex wrap vcenter hcenter">
                            <icon-base class="" width="60" height="60" viewBox="0 0 140 140" icon-name="one">
                                <icon-number-three />
                            </icon-base>
                            <h1 class="title title-step is-size-5 is-family-primary has-text-centered">
                                Wir hören voneinander!
                            </h1>
                        </div>
                        <div class="columns">
                            <div class="column is-flex vcenter hcenter">
                                <lottie :options="defaultOptions" :height="100" :width="200" v-on:animCreated="loadAnimation"/>
                            </div>
                            <div class="column is-flex vcenter hcenter">
                                <p class="is-family-primary has-text-black p-after-h p-infographic">
                                    In regelmäßigen Abständen hören Sie von mir und bekommen 
                                    jede Menge Zwischenstände zu sehen. Damit Sie Bescheid 
                                    wissen, Änderungen äußern und mich korrigieren können.
                                </p>
                            </div>
                        </div>
                    </slide>
                    <slide>
                        <div class="header-infographic is-flex wrap vcenter hcenter">
                            <icon-base class="" width="60" height="60" viewBox="0 0 140 140" icon-name="one">
                                <icon-number-four />
                            </icon-base>
                            <h1 class="title title-step is-size-5 is-family-primary has-text-centered">
                                Wir werden es lieben!
                            </h1>
                        </div>
                        <div class="columns infogr-reverse">
                            <div class="column is-flex vcenter hcenter">
                                <lottie :options="defaultOptions" :height="100" :width="200" v-on:animCreated="loadAnimation"/>
                            </div>
                            <div class="column is-flex vcenter hcenter">
                                <p class="is-family-primary has-text-black p-after-h p-infographic">
                                    Nach regem Austausch und Produktion geht es an den letzten Feinschliff.
                                </p>
                            </div>
                        </div>
                    </slide>
                    <slide>
                        <div class="header-infographic is-flex wrap vcenter hcenter">
                            <icon-base class="" width="60" height="60" viewBox="0 0 140 140" icon-name="one">
                                <icon-number-five />
                            </icon-base>
                            <h1 class="title title-step is-size-5 is-family-primary has-text-centered">
                                Wir haben es geschafft!
                            </h1>
                        </div>
                        <div class="columns">
                            <div class="column is-flex vcenter hcenter">
                                <lottie :options="defaultOptions" :height="100" :width="200" v-on:animCreated="loadAnimation"/>
                            </div>
                            <div class="column is-flex vcenter hcenter">
                                <p class="is-family-primary has-text-black p-after-h p-infographic">
                                    Im letzten Schritt erfolgt die Übergabe, wir sind alle zufrieden, 
                                    glücklich und ich konnte Ihnen hoffentlich helfen. <br><br>
                                    Darüber hinaus bleiben wir gerne weiter in Konatkt.
                                </p>
                            </div>
                        </div>
                    </slide>
                </hooper>
                <div class="infographic-navigation">
                    <button class="button button-santoro" @click="slidePrev">
                        <icon-base class="santoro-arrow slide-up" width="15" height="15"
                        viewBox="0 0 25.12 45" icon-name="arrow"
                        iconColor="#0a0a0a">
                            <icon-short-arrow />
                        </icon-base>
                    </button>
                    <button class="button button-santoro" @click="slideNext">
                        <icon-base class="santoro-arrow" width="15" height="15"
                        viewBox="0 0 25.12 45" icon-name="arrow"
                        iconColor="#0a0a0a">
                            <icon-short-arrow />
                        </icon-base>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import IconBase from '../components/IconBase.vue'
import IconShortArrow from '../components/icons/IconShortArrow.vue'
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
import IconNumberOne from '../components/icons/IconNumberOne.vue'
import IconNumberTwo from '../components/icons/IconNumberTwo.vue'
import IconNumberThree from '../components/icons/IconNumberThree.vue'
import IconNumberFour from '../components/icons/IconNumberFour.vue'
import IconNumberFive from '../components/icons/IconNumberFive.vue'
import Lottie from '../components/animation/LottieBase.vue';
import * as animationData1 from '@/assets/talk/data.json';
import * as animationData2 from '@/assets/start/data.json';

export default {
    name: 'Project',
    props: {
        msg: String
    },
    components: {
        IconBase,
        IconShortArrow,
        IconNumberOne,
        IconNumberTwo,
        IconNumberThree,
        IconNumberFour,
        IconNumberFive,
        Hooper,
        Slide,
        Lottie,
        'lottie': Lottie
    },
    data () {
        return {
            featuresOpen: false,
            hooperSettings: {
                centerMode: true,
                vertical: true,
                infiniteScroll: true,
                mouseDrag: false,
                wheelControl: false,
                touchDrag: false
            },
            defaultOptions: {animationData: animationData1.default},
            defaultOptionsTwo: {animationData: animationData2.default},
            animationSpeed: 1
        }
    },
    methods: {
        toggleFeatures () {
            this.featuresOpen = !this.featuresOpen
            let arrow = document.querySelector('.acc-arrow-2')
            let bg = document.querySelector('.body-bg')

            arrow.classList.toggle('up')
            bg.classList.toggle('toggle-bg')
        },
        slideNext() {
            this.$refs.carousel.slideNext();
        },
        slidePrev() {
            this.$refs.carousel.slidePrev();
        }
    }
}
</script>

<style lang="scss" scoped>

.title-step{
    width: 100%;
    margin-top: 1em;
}

.column-illustration{
    width: 100%;
}
</style>
