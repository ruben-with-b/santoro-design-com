<template>
    <div>
        <div class="is-flex toggle-features cursor-pointer" @click="toggleFeatures">
            <icon-base class="acc-arrow-2" width="15" height="15" viewBox="0 0 25.12 45" icon-name="short-arrow">
                <icon-short-arrow />
            </icon-base>
            <h1 class="title is-size-4-mobile is-size-3-tablet is-family-secondary
                not-bold is-inline-block">Projektablauf</h1>
        </div>
        <div v-show-slide="featuresOpen" class="features is-family-primary has-text-black">
            <div class="container-features">
                <p class="is-family-primary has-text-black p-after-h p-anim">
                    Unser gemeinsames Projekt wird üblicherweise folgende Schritte 
                    durchlaufen. Ich freue mich schon darauf!
                </p>
                <div class="process-step">
                    <div class="header-infographic is-flex wrap vcenter hcenter">
                        <icon-base width="60" height="60" viewBox="0 0 140 140" icon-name="one">
                            <icon-number-one />
                        </icon-base>
                        <h1 class="title title-step is-size-5 is-family-primary has-text-centered">
                            Redebedarf!
                        </h1>
                    </div>
                    <div class="columns">
                        <div class="column lottie-container is-flex vcenter hcenter">
                            <div class="lottie-vp">
                                <lottie :options="defaultOptions" :height="auto" v-on:animCreated="loadAnimation"/>
                            </div>
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
                </div>
                <div class="process-step">
                    <div class="header-infographic is-flex wrap vcenter hcenter">
                        <icon-base width="60" height="60" viewBox="0 0 140 140" icon-name="one">
                            <icon-number-two />
                        </icon-base>
                        <h1 class="title title-step is-size-5 is-family-primary has-text-centered">
                            Los geht's!
                        </h1>
                    </div>
                    <div class="columns infogr-reverse">
                        <div class="column is-flex vcenter hcenter">
                            <div class="lottie-vp">
                                <lottie :options="defaultOptionsTwo" :height="auto" v-on:animCreated="loadAnimation"/>
                            </div>
                        </div>
                        <div class="column is-flex vcenter hcenter">
                            <p class="is-family-primary has-text-black p-after-h p-infographic float-right-tablet">
                                Wir stimmen uns zwecks Feinheiten wie Preis und Umfang 
                                ab, und dann kann es auch schon losgehen!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="process-step">
                    <div class="header-infographic is-flex wrap vcenter hcenter">
                        <icon-base width="60" height="60" viewBox="0 0 140 140" icon-name="one">
                            <icon-number-three />
                        </icon-base>
                        <h1 class="title title-step is-size-5 is-family-primary has-text-centered">
                            Wir hören voneinander!
                        </h1>
                    </div>
                    <div class="columns">
                        <div class="column is-flex vcenter hcenter">
                            <div class="lottie-vp">
                                <lottie :options="defaultOptionsThree" :height="auto" v-on:animCreated="loadAnimation"/>
                            </div>
                        </div>
                        <div class="column is-flex vcenter hcenter">
                            <p class="is-family-primary has-text-black p-after-h p-infographic">
                                In regelmäßigen Abständen hören Sie von mir und bekommen 
                                jede Menge Zwischenstände zu sehen. Damit Sie Bescheid 
                                wissen, Änderungswünsche äußern und Feedback geben können.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="process-step">
                    <div class="header-infographic is-flex wrap vcenter hcenter">
                        <icon-base width="60" height="60" viewBox="0 0 140 140" icon-name="one">
                            <icon-number-four />
                        </icon-base>
                        <h1 class="title title-step is-size-5 is-family-primary has-text-centered">
                            Ein letzter Feinschliff!
                        </h1>
                    </div>
                    <div class="columns infogr-reverse">
                        <div class="column is-flex vcenter hcenter">
                            <div class="lottie-vp">
                                <lottie :options="defaultOptionsFour" :height="auto" v-on:animCreated="loadAnimation"/>
                            </div>
                        </div>
                        <div class="column is-flex vcenter hcenter">
                            <p class="is-family-primary has-text-black p-after-h p-infographic float-right-tablet">
                                Nach regem Austausch und der Umsetzung Ihrer Bedürfnisse geht es an den letzten Feinschliff.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="process-step">
                    <div class="header-infographic is-flex wrap vcenter hcenter">
                        <icon-base width="60" height="60" viewBox="0 0 140 140" icon-name="one">
                            <icon-number-five />
                        </icon-base>
                        <h1 class="title title-step is-size-5 is-family-primary has-text-centered">
                            Wir haben es geschafft!
                        </h1>
                    </div>
                    <div class="columns">
                        <div class="column is-flex vcenter hcenter">
                            <div class="lottie-vp">
                                <lottie :options="defaultOptionsFive" :height="auto" v-on:animCreated="loadAnimation"/>
                            </div>
                        </div>
                        <div class="column is-flex vcenter hcenter">
                            <p class="is-family-primary has-text-black p-after-h p-infographic">
                                Im letzten Schritt erfolgt die Übergabe, beide Seiten sind
                                zufrieden und stolz, ich konnte Ihnen hoffentlich weiterhelfen. <br><br>
                                Darüber hinaus bleiben wir gerne weiter in Konatkt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="contact-teaser">
            <p class="is-family-secondary p-after-h p-infographic">
                Könnte etwas werden?<br>
                Gehen wir's an!
            </p>
            <button class="button button-santoro-white">
            <router-link to="/contact" class="menu-link is-secondary is-family-secondary">
              <div class="arrow-mask">  
                <icon-base class="santoro-arrow" width="1" height="1"
                  viewBox="0 0 616.49 167.02" icon-name="arrow"
                  iconColor="#FFFFFF">
                  <icon-arrow />
                </icon-base>
              </div>
              <span class="next-to-icon">Kontakt</span>
            </router-link>
          </button>
        </div>
    </div>
</template>

<script>
import IconBase from '../components/IconBase.vue'
import IconArrow from '../components/icons/IconArrow.vue'
import IconShortArrow from '../components/icons/IconShortArrow.vue'
import IconNumberOne from '../components/icons/IconNumberOne.vue'
import IconNumberTwo from '../components/icons/IconNumberTwo.vue'
import IconNumberThree from '../components/icons/IconNumberThree.vue'
import IconNumberFour from '../components/icons/IconNumberFour.vue'
import IconNumberFive from '../components/icons/IconNumberFive.vue'
import Lottie from '../components/animation/LottieBase.vue';
import * as animationData1 from '@/assets/talk/data.json';
import * as animationData2 from '@/assets/start/data.json';
import * as animationData3 from '@/assets/notification/data.json';
import * as animationData4 from '@/assets/cleanup/data.json';
import * as animationData5 from '@/assets/shipment/data.json';

export default {
    name: 'Project',
    props: {
        msg: String
    },
    components: {
        IconBase,
        IconArrow,
        IconShortArrow,
        IconNumberOne,
        IconNumberTwo,
        IconNumberThree,
        IconNumberFour,
        IconNumberFive,
        Lottie,
        'lottie': Lottie
    },
    data () {
        return {
            featuresOpen: false,
            defaultOptions: {animationData: animationData1.default},
            defaultOptionsTwo: {animationData: animationData2.default},
            defaultOptionsThree: {animationData: animationData3.default},
            defaultOptionsFour: {animationData: animationData4.default},
            defaultOptionsFive: {animationData: animationData5.default},
            animationSpeed: 1
        }
    },
    mounted(){
        let arrow = document.querySelector('.acc-arrow-2');
        let bg = document.querySelector('.body-bg');
        
        // on refresh & reload
        if(this.$route.query.section === 'project'){
            this.featuresOpen = true;
            arrow.classList.toggle('up');
            bg.classList.add('pure-bg');
            this.toggleTeaser()
        }
        
    },
    methods: {
        toggleFeatures () {
            let arrowPerson = document.querySelector('.acc-arrow');
            let arrowProject = document.querySelector('.acc-arrow-2');
            let bg = document.querySelector('.body-bg');
            this.featuresOpen = !this.featuresOpen;
            this.featuresOpen ? this.$router.push({name: 'about', query: { section: 'project' }}) : this.$router.push({name: 'about', query : '' });
            arrowProject.classList.toggle('up');

            if(this.$route.query.section === 'project'){
                bg.classList.add('pure-bg');
            } else if(Object.keys(this.$route.query).length === 0
                    && !arrowPerson.classList.contains('up')){
                setTimeout(() => {
                    bg.classList.remove('pure-bg');
                }, 400);
            }
            setTimeout(this.toggleTeaser(), 3000);
        },
        toggleTeaser() {
            let teaser = document.querySelector('.contact-teaser');
            teaser.classList.toggle('toggle-teaser');
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

.lottie-container{
    margin: 0 0 2em 0;
}

</style>
