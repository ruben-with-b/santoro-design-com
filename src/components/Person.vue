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
                        <h1 class="title title-o-underline title-o-underline-toggle  is-size-2-mobile is-family-secondary not-bold">
                            Hi, <br> ich bin Ruben.
                        </h1>
                    </div>
                    <div class="column d-exposure is-flex">
                        Second column
                    </div>
                </div>
                <p class="is-family-primary has-text-black p-after-h p-anim">
                    Hinter SANTORO Design steckt ein motivierter, leidenschaftlicher
                    und kreativer Master-Student, der heiß darauf ist, Ihnen einen
                    ästhetisch ansprechenden und gewinn-bringenden Dienst leisten zu
                    können.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import IconBase from '../components/IconBase.vue'
import IconShortArrow from '../components/icons/IconShortArrow.vue'

export default {
    name: 'Person',
    props: {
        msg: String
    },
    components: {
        IconBase,
        IconShortArrow
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
.toggle-features{
    margin-bottom: 3rem;
}
.d-exposure{
    background: yellow;
    align-items: center;
    justify-content: center;
    transform: translateY(3em);
}
.container-features{
    margin: 0 0 3rem 2rem !important;
}

.columns-head{
    margin-bottom: 5em !important;
}
</style>
