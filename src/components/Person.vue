<template>
    <div>
        <div class="is-flex toggle-features cursor-pointer" @click="toggleFeatures">
            <icon-base class="acc-arrow" width="15" height="15" viewBox="0 0 25.12 45" icon-name="short-arrow">
                <icon-short-arrow />
            </icon-base>
            <h1 class="title is-size-4-mobile is-size-3-tablet is-family-secondary
            not-bold is-inline-block">Meine Person
            </h1>
        </div>
        <div v-show-slide="featuresOpen" class="features is-family-primary has-text-black">
            <div class="container-features">
                <div class="columns columns-head is-mobile">
                    <div class="column is-two-third">
                        <h1 class="title title-o-underline title-o-underline-toggle is-family-secondary not-bold">
                            Hi, <br> ich bin Ruben.
                        </h1>
                    </div>
                    <div class="column d-exposure is-flex">
                        <div class="layerOne"></div>
                        <div class="layerTwo"></div>
                        <div class="layerOverlay"></div>
                        
                    </div>
                </div>
                <p class="is-family-primary has-text-black p-after-h p-anim p-person">
                    Hinter SANTORO Design steckt ein motivierter, leidenschaftlicher
                    und kreativer Master-Student, der heiß darauf ist, Ihnen einen
                    ästhetisch ansprechenden und gewinn-bringenden Dienst leisten zu
                    können.
                </p>
                <div class="is-flex edu-logo hcenter">
                    <icon-base class="education-logo" width="60" height="60" viewBox="0 0 150 150" icon-name="rubens-education">
                        <icon-education />
                    </icon-base>
                </div>
                <div class="edu-timeline">
                    <div class="school">
                        <p class="has-text-weight-bold start-point">
                            <span class="end-point">
                                Medien & Informationswesen
                            </span>
                        </p>
                        <p>Hochschule Offenburg</p>
                        <p>Bachelor of Science (03/2017)</p>
                    </div>
                    <div class="school">
                        <p class="has-text-weight-bold start-point master">
                            <span class="end-point">
                                Interaktive Mediensysteme
                            </span>
                        </p>
                        <p>Hochschule Augsburg</p>
                        <p class="has-text-grey">Master of Arts (07/2020)</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import IconBase from '../components/IconBase.vue'
import IconShortArrow from '../components/icons/IconShortArrow.vue'
import IconEducation from '../components/icons/IconEducation.vue'

export default {
    name: 'Person',
    props: {
        msg: String
    },
    components: {
        IconBase,
        IconShortArrow,
        IconEducation
    },
    mounted () {
        document.addEventListener('mousemove', function(e) {
            const x = e.pageX / (window.innerWidth * 10),
                    y = e.pageY / (window.innerHeight * 10);
            const bg = document.querySelector('.layerOne');
            let pos1 = -500 * x + 40;
            let pos2 = 500 * y - 5;

            bg.style.backgroundPosition = pos1 + '% ' + pos2 + '%';
        });
    },
    data () {
        return {
        featuresOpen: false
        }
    },
    methods: {
        toggleFeatures () {
            this.featuresOpen = !this.featuresOpen
            let arrow = document.querySelector('.acc-arrow')
            let bg = document.querySelector('.body-bg')

            arrow.classList.toggle('up')
            bg.classList.toggle('toggle-bg')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
