<template>
<div>
    <section class="section webapps-section">
      <div class="container">
        <h1 class="is-family-secondary santoro-breadcrumb">
           <router-link to="/services">Leistungen </router-link>
           <span class="arrow-breadcrumb">&#10230;</span> Websites und Apps</h1>
        <p class="is-family-primary has-text-black p-after-h p-anim">
          Hier sehen Sie eine Auswahl an Projekten, die individuell von mir oder in Zusammenarbeit mit anderen lieben Menschen entstanden sind.
        </p>
        <hooper ref="carouselSp" :settings="settings" class="three-device-carousel sweety">
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile v-if="intersectedSweety" class="desktop-mockup is-hidden-tablet"
              videoUrl="sp-widescreen"
              videoType="video/mp4"
              posterUrl="sp-widescreen-poster"
              width="300px"
              height="156.41px"
            />
            <video-mockup-mobile v-if="intersectedSweety" class="desktop-mockup is-hidden-mobile is-hidden-widescreen"
              videoUrl="sp-widescreen"
              videoType="video/mp4"
              posterUrl="sp-widescreen-poster"
              width="767.2px"
              height="400px"
            />
            <video-mockup-mobile v-if="intersectedSweety" class="desktop-mockup is-hidden-touch is-hidden-desktop-only"
              videoUrl="sp-widescreen"
              videoType="video/mp4"
              posterUrl="sp-widescreen-poster"
              width="959px"
              height="500px"
            />
            <div v-else class="mockup-skeleton"></div>
          </slide>
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile v-if="intersectedSweety" class="tablet-mockup is-hidden-tablet"
              videoUrl="sp-tablet"
              videoType="video/mp4"
              posterUrl="sp-tablet-poster"
              width="300px"
              height="225px"
            />
            <video-mockup-mobile v-if="intersectedSweety" class="tablet-mockup is-hidden-mobile is-hidden-widescreen"
              videoUrl="sp-tablet"
              videoType="video/mp4"
              posterUrl="sp-tablet-poster"
              width="533.33px"
              height="400px"
            />
            <video-mockup-mobile v-if="intersectedSweety" class="tablet-mockup is-hidden-touch is-hidden-desktop-only"
              videoUrl="sp-tablet"
              videoType="video/mp4"
              posterUrl="sp-tablet-poster"
              width="666.66px"
              height="500px"
            />
            <div v-else class="mockup-skeleton"></div>
          </slide>
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile v-if="intersectedSweety" class="mobile-mockup is-hidden-desktop"
              videoUrl="sp-mobile"
              videoType="video/mp4"
              posterUrl="sp-mobile-poster"
              width="200px"
              height="400px"
            />
            <video-mockup-mobile v-if="intersectedSweety" class="mobile-mockup is-hidden-touch"
              videoUrl="sp-mobile"
              videoType="video/mp4"
              posterUrl="sp-mobile-poster"
              width="250px"
              height="500px"
            />
            <div v-else class="mockup-skeleton"></div>
          </slide>
        </hooper>
        <div class="is-flex arrow-hoo-nav">
          <icon-base @click.native="slidePrev" id="sweety-pretty" width="50" height="50" viewBox="0 0 616.49 167.02" icon-name="arrow-back">
            <icon-arrow-back />
          </icon-base>
          <icon-base @click.native="slideNext" id="sweety-pretty" width="50" height="50" viewBox="0 0 616.49 167.02" icon-name="arrow-back">
            <icon-arrow-back />
          </icon-base>
        </div>
        <h1 class="title title-step is-size-5 is-family-primary">
            Homepage für das Vintage Café Sweety Pretty 
        </h1>
        <p class="is-family-primary has-text-black p-after-h p-anim p-web-desc">
          Das »Sweety Pretty« wurde von einem dreiköpfigem Studenten-Team mit einem eigenen Webauftritt ausgestattet. Die Website
          liefert entscheidende Informationen zum Sortiment und Angebot und gibt erste essenzielle Eindrücke des
          gemütlichen Ambientes im Café. Video- und Bildmaterial wurde selbst produziert.
        </p>
        <div class="tools">
          <p>Frameworks</p>
          <icon-base width="30" height="30" viewBox="0 0 100 100" icon-name="wordpress">
            <icon-wordpress />
          </icon-base>
          <icon-base width="30" height="30" viewBox="0 0 256 256" icon-name="bootstrap">
            <icon-bootstrap />
          </icon-base>
        </div>
        <div class="line-seperator is-flex vcenter">
          <div class="line"></div>
          <div class="line"></div>  
        </div>
        <hooper ref="carouselErinnerungsort" :settings="settings" class="three-device-carousel erinnerungsort">
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile v-if="intersectedErinnerungsort" class="desktop-mockup is-hidden-tablet"
              videoUrl="er-widescreen"
              videoType="video/mp4"
              posterUrl="er-widescreen-poster"
              width="300px"
              height="156.41px"
            />
            <video-mockup-mobile v-if="intersectedErinnerungsort" class="desktop-mockup is-hidden-mobile is-hidden-widescreen"
              videoUrl="er-widescreen"
              videoType="video/mp4"
              posterUrl="er-widescreen-poster"
              width="767.2px"
              height="400px"
            />
            <video-mockup-mobile v-if="intersectedErinnerungsort" class="desktop-mockup is-hidden-touch is-hidden-desktop-only"
              videoUrl="er-widescreen"
              videoType="video/mp4"
              posterUrl="er-widescreen-poster"
              width="959px"
              height="500px"
            />
            <div v-else class="mockup-skeleton"></div>
          </slide>
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile v-if="intersectedErinnerungsort" class="tablet-mockup is-hidden-tablet"
              videoUrl="er-tablet"
              videoType="video/mp4"
              posterUrl="er-tablet-poster"
              width="300px"
              height="225px"
            />
            <video-mockup-mobile v-if="intersectedErinnerungsort" class="tablet-mockup is-hidden-mobile is-hidden-widescreen"
              videoUrl="er-tablet"
              videoType="video/mp4"
              posterUrl="er-tablet-poster"
              width="533.33px"
              height="400px"
            />
            <video-mockup-mobile v-if="intersectedErinnerungsort" class="tablet-mockup is-hidden-touch is-hidden-desktop-only"
              videoUrl="er-tablet"
              videoType="video/mp4"
              posterUrl="er-tablet-poster"
              width="666.66px"
              height="500px"
            />
            <div v-else class="mockup-skeleton"></div>
          </slide>
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile v-if="intersectedErinnerungsort" class="mobile-mockup is-hidden-desktop"
              videoUrl="er-mobile"
              videoType="video/mp4"
              posterUrl="er-mobile-poster"
              width="200px"
              height="400px"
            />
            <video-mockup-mobile v-if="intersectedErinnerungsort" class="mobile-mockup is-hidden-touch"
              videoUrl="er-mobile"
              videoType="video/mp4"
              posterUrl="er-mobile-poster"
              width="250px"
              height="500px"
            />
            <div v-else class="mockup-skeleton"></div>
          </slide>
        </hooper>
        <div class="is-flex arrow-hoo-nav">
          <icon-base @click.native="slidePrev" id="erinnerungsort" width="50" height="50" viewBox="0 0 616.49 167.02" icon-name="arrow-back">
            <icon-arrow-back />
          </icon-base>
          <icon-base @click.native="slideNext" id="erinnerungsort" width="50" height="50" viewBox="0 0 616.49 167.02" icon-name="arrow-back">
            <icon-arrow-back />
          </icon-base>
        </div>
        <icon-base width="120" height="120" viewBox="0 0 141.73 155.91"
                  class="award-badge" icon-name="logo-design-award">
          <icon-gute-gestaltung />
        </icon-base>
        <h1 class="title title-step is-size-5 is-family-primary">
            Erinnerungsort 
        </h1>
        <p class="is-family-primary has-text-black p-after-h p-anim p-web-desc">
          Im Master-Studiengang »Interaktive Mediensysteme« mit Schwerpunkt
          »Web Systems« wurde die multimediale Aufbereitung des »Außenlagerkomplexes
          Kaufering« bearbeitet. Die Webanwendung macht die unfreiwillige Entwurzelung tausender
          Menschen während des Zweiten Weltkriegs sowie die Erinnerungen
          von Zeitzeugen in einer interaktiven Karte zum Kernelement.
        </p>
        <div class="tools">
          <p>Frameworks</p>
          <icon-base width="30" height="30" viewBox="0 0 256 290" icon-name="vue-logo">
            <icon-webpack />
          </icon-base>
          <icon-base width="30" height="30" viewBox="0 0 256 221" icon-name="vue-logo">
            <icon-vue />
          </icon-base>
          <icon-base width="30" height="30" viewBox="0 0 256 256" icon-name="mapbox">
            <icon-mapbox />
          </icon-base>
        </div>
         <div class="line-seperator is-flex vcenter">
          <div class="line"></div>
          <div class="line"></div>  
        </div>
        <hooper ref="carouselPickMe" :settings="settingsSingle" class="one-device-carousel pick">
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile v-if="intersectedPick" class="mobile-mockup is-hidden-desktop"
              videoUrl="pick-me-mobile"
              videoType="video/mp4"
              posterUrl="pick-me-mobile-poster"
              width="200px"
              height="400px"
            />
            <video-mockup-mobile v-if="intersectedPick" class="mobile-mockup is-hidden-touch"
              videoUrl="pick-me-mobile"
              videoType="video/mp4"
              posterUrl="pick-me-mobile-poster"
              width="250px"
              height="500px"
            />
            <div v-else class="mockup-skeleton"></div>
          </slide>
        </hooper>
        <h1 class="title title-step is-size-5 is-family-primary">
            Pick Me – Die App für's Packen!
        </h1>
        <p class="is-family-primary has-text-black p-after-h p-anim p-web-desc">
          Mit der Progressive Web App »Pick Me« können Gepäckstücke wie Rucksäcke, Koffer oder Taschen angelegt und deren Inhalte verwaltet werden, damit nichts mehr vergessen wird.
          Das Projekt wurde von zwei Studenten durchgeführt.
        </p>
        <div class="tools">
          <p>Frameworks</p>
          <icon-base width="30" height="30" viewBox="0 0 256 290" icon-name="vue-logo">
            <icon-webpack />
          </icon-base>
          <icon-base width="30" height="30" viewBox="0 0 256 221" icon-name="vue-logo">
            <icon-vue />
          </icon-base>
        </div>
         <div class="line-seperator is-flex vcenter">
          <div class="line"></div>
          <div class="line"></div>  
        </div>
        <hooper ref="carouselWishIKnew" :settings="settings" class="one-device-carousel wish">
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile v-if="intersectedWish" class="desktop-mockup is-hidden-tablet"
              videoUrl="wishIknew-widescreen"
              videoType="video/mp4"
              posterUrl="wishIknew-widescreen-poster"
              width="300px"
              height="156.41px"
            />
            <video-mockup-mobile v-if="intersectedWish" class="desktop-mockup is-hidden-mobile is-hidden-widescreen"
              videoUrl="wishIknew-widescreen"
              videoType="video/mp4"
              posterUrl="wishIknew-widescreen-poster"
              width="767.2px"
              height="400px"
            />
            <video-mockup-mobile v-if="intersectedWish" class="desktop-mockup is-hidden-touch is-hidden-desktop-only"
              videoUrl="wishIknew-widescreen"
              videoType="video/mp4"
              posterUrl="wishIknew-widescreen-poster"
              width="959px"
              height="500px"
            />
            <div v-else class="mockup-skeleton"></div>
          </slide>
        </hooper>
        <h1 class="title title-step is-size-5 is-family-primary">
            iwishiknewthat – Webanwendung über die Speicherung von Spotify-Daten
        </h1>
        <p class="is-family-primary has-text-black p-after-h p-anim p-web-desc">
          Die Anwendung ist eine digitale Plattform, die modular aufgebaut ist. Die drei
          Grundbausteine bestehen aus Einleitung, Spiel (Grafik) und Datenanfrage.
          Der User kann durch die Sammlung von Icons erfahren, welche Daten in welcher Tagessituation gespeichert werden.
          Für die Anforderung der privaten Daten steht ein Kontaktfurmular bereit. Ein
          dreiköpfiges Team stellte das Projekt fertig.
        </p>
        <div class="tools">
          <p>Frameworks</p>
          <icon-base width="30" height="30" viewBox="0 0 256 290" icon-name="vue-logo">
            <icon-webpack />
          </icon-base>
          <icon-base width="30" height="30" viewBox="0 0 256 221" icon-name="vue-logo">
            <icon-vue />
          </icon-base>
          <icon-base width="30" height="30" viewBox="0 0 307 356" icon-name="greensock-gsap">
            <icon-greensock />
          </icon-base>
        </div>
         <div class="line-seperator is-flex vcenter">
          <div class="line"></div>
          <div class="line"></div>  
        </div>
        <hooper ref="carouselCookies" :settings="settingsSingle" class="three-device-carousel cookies">
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile v-if="intersectedCookies" class="desktop-mockup is-hidden-tablet"
              videoUrl="cookies-widescreen"
              videoType="video/mp4"
              posterUrl="cookies-widescreen-poster"
              width="300px"
              height="156.41px"
            />
            <video-mockup-mobile v-if="intersectedCookies" class="desktop-mockup is-hidden-mobile is-hidden-widescreen"
              videoUrl="cookies-widescreen"
              videoType="video/mp4"
              posterUrl="cookies-widescreen-poster"
              width="767.2px"
              height="400px"
            />
            <video-mockup-mobile v-if="intersectedCookies" class="desktop-mockup is-hidden-touch is-hidden-desktop-only"
              videoUrl="cookies-widescreen"
              videoType="video/mp4"
              posterUrl="cookies-widescreen-poster"
              width="959px"
              height="500px"
            />
            <div v-else class="mockup-skeleton"></div>
          </slide>
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile v-if="intersectedCookies" class="tablet-mockup is-hidden-tablet"
              videoUrl="cookies-tablet"
              videoType="video/mp4"
              posterUrl="cookies-tablet-poster"
              width="300px"
              height="225px"
            />
            <video-mockup-mobile v-if="intersectedCookies" class="tablet-mockup is-hidden-mobile is-hidden-widescreen"
              videoUrl="cookies-tablet"
              videoType="video/mp4"
              posterUrl="cookies-tablet-poster"
              width="533.33px"
              height="400px"
            />
            <video-mockup-mobile v-if="intersectedCookies" class="tablet-mockup is-hidden-touch is-hidden-desktop-only"
              videoUrl="cookies-tablet"
              videoType="video/mp4"
              posterUrl="cookies-tablet-poster"
              width="666.66px"
              height="500px"
            />
            <div v-else class="mockup-skeleton"></div>
          </slide>
          <slide class="mockup-slide is-flex hcenter">
            <video-mockup-mobile v-if="intersectedCookies" class="mobile-mockup is-hidden-desktop"
              videoUrl="cookies-mobile"
              videoType="video/mp4"
              posterUrl="cookies-mobile-poster"
              width="200px"
              height="400px"
            />
            <video-mockup-mobile v-if="intersectedCookies" class="mobile-mockup is-hidden-touch"
              videoUrl="cookies-mobile"
              videoType="video/mp4"
              posterUrl="cookies-mobile-poster"
              width="250px"
              height="500px"
            />
            <div v-else class="mockup-skeleton"></div>
          </slide>
        </hooper>
        <div class="is-flex arrow-hoo-nav">
          <icon-base @click.native="slidePrev" id="cookies" width="50" height="50" viewBox="0 0 616.49 167.02" icon-name="arrow-back">
            <icon-arrow-back />
          </icon-base>
          <icon-base @click.native="slideNext" id="cookies" width="50" height="50" viewBox="0 0 616.49 167.02" icon-name="arrow-back">
            <icon-arrow-back />
          </icon-base>
        </div>
        <h1 class="title title-step is-size-5 is-family-primary">
            What are cookies? – Interaktive Scroll-Infografik
        </h1>
        <p class="is-family-primary has-text-black p-after-h p-anim p-web-desc">
          Eine interaktive animierte Infografik, die unterhaltsam über
          Internet-Cookies aufklärt.
        </p>
        <div class="tools">
          <p>Frameworks</p>
          <icon-base width="30" height="30" viewBox="0 0 256 256" icon-name="bootstrap">
            <icon-bootstrap />
          </icon-base>
          <icon-base width="30" height="30" viewBox="0 0 307 356" icon-name="greensock-gsap">
            <icon-greensock />
          </icon-base>
        </div>
      </div>
    </section>
    <div class="contact-teaser">
        <p class="is-family-secondary p-after-h p-infographic">
            Lust auf ähnliches?<br>
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
import IconWordpress from '../components/icons/IconWordpress.vue'
import IconGreensock from '../components/icons/IconGreensock.vue'
import IconMapbox from '../components/icons/IconMapbox.vue'
import IconVue from '../components/icons/IconVue.vue'
import IconWebpack from '../components/icons/IconWebpack.vue'
import IconBootstrap from '../components/icons/IconBootstrap.vue'
import IconGuteGestaltung from '../components/icons/IconGuteGestaltung.vue'
import IconArrow from '../components/icons/IconArrow.vue'
import IconArrowBack from '../components/icons/IconArrowBack.vue'
import {
  Hooper,
  Slide,
} from 'hooper';
import 'hooper/dist/hooper.css';
import VideoMockupMobile from '../components/VideoMockupMobile.vue';

export default {
  name: 'WebsitesApps',
  components: {
    IconBase,
    IconWordpress,
    IconGreensock,
    IconMapbox,
    IconVue,
    IconWebpack,
    IconBootstrap,
    IconGuteGestaltung,
    IconArrow,
    IconArrowBack,
    Hooper,
    Slide,
    VideoMockupMobile
  },
  data () {
    return {
      settings: {
        initialSlide: 2,
        itemsToShow: 0.5,
        infiniteScroll: true,
        centerMode: true,
        transition: 500,
        wheelControl: false,
        breakpoints: {
          500: {
            initialSlide: 1 
          },
          1600: {
            initialSlide: 0
          }
        }
      },
      settingsSingle: {
        initialSlide: 2,
        touchDrag: false,
        itemsToShow: 0.5,
        infiniteScroll: true,
        centerMode: true,
        transition: 500,
        wheelControl: false,
        breakpoints: {
          500: {
            initialSlide: 1 
          },
          1600: {
            initialSlide: 0
          }
        }
      },
      observer: null,
      intersectedSweety: false,
      intersectedErinnerungsort: false,
      intersectedPick: false,
      intersectedWish: false,
      intersectedCookies: false,
    }
  },
  computed: {
    
  },
  mounted () {
    // if route
    let bg = document.querySelector('.body-bg');
    bg.classList.add('pure-bg');

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.className.includes('sweety')) {
            this.intersectedSweety = true;
          } else if (entry.target.className.includes('erinnerungsort')) {
            this.intersectedErinnerungsort = true;
          } else if (entry.target.className.includes('pick')) {
            this.intersectedPick = true;
          } else if (entry.target.className.includes('wish')) {
            this.intersectedWish = true;
          } else if (entry.target.className.includes('cookies')) {
            this.intersectedCookies = true;
          }
        }
      });
    });
    const allMockups = document.querySelectorAll(".hooper");
    allMockups.forEach(mockup => {
      this.observer.observe(mockup);
    });
  },
  methods: {
    slidePrev(event) {
      if (event.target.id === "sweety-pretty") {
        this.$refs.carouselSp.slidePrev();  
      } else if (event.target.id === "erinnerungsort") {
        this.$refs.carouselErinnerungsort.slidePrev();
      } else if (event.target.id === "cookies") {
        this.$refs.carouselCookies.slidePrev();
      }
    },
    slideNext() {
      if (event.target.id === "sweety-pretty") {
        this.$refs.carouselSp.slideNext();  
      } else if (event.target.id === "erinnerungsort") {
        this.$refs.carouselErinnerungsort.slideNext();
      } else if (event.target.id === "cookies") {
        this.$refs.carouselCookies.slideNext();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  
  .contact-teaser{
    opacity: 1;
  }

</style>
