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
                <flickity ref="flickity" :options="flickityOptions">
                    <div class="carousel-cell">1</div>
                    <div class="carousel-cell">2</div>
                    <div class="carousel-cell">3</div>
                    <div class="carousel-cell">4</div>
                    <div class="carousel-cell">5</div>
                </flickity>
            </div>
        </div>
    </div>
</template>

<script>
import IconBase from '../components/IconBase.vue'
import IconShortArrow from '../components/icons/IconShortArrow.vue'
import Flickity from 'vue-flickity';

export default {
    name: 'Project',
    props: {
        msg: String
    },
    components: {
        IconBase,
        IconShortArrow,
        Flickity
    },
    data () {
        return {
            featuresOpen: false,
            flickityOptions: {
                initialIndex: 3,
                prevNextButtons: true,
                pageDots: true,
                wrapAround: true
                
                // any options from Flickity can be used
            }
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
        next() {
            this.$refs.flickity.next();
            },
        previous() {
            this.$refs.flickity.previous();
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
