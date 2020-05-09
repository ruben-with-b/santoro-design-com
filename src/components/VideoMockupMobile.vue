<template>  
   <video-player  class="video-player-box"
    ref="videoPlayer"
    :options="playerOptions"
    :playsinline="true">
  </video-player>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'

export default {
  components: {
    videoPlayer
  },
  props: {
    posterUrl: {
      type: String
    },
    videoUrl: {
      type: String
    },
    videoType: {
      type: String
    },
    width: {
      type: String
    },
    height: {
      type: String
    },
  },
  data () {
    return {
      playerOptions: {
        autoplay: false,
        controls: true,
        muted: true,
        loop: true,
        width: this.width,
        height: this.height,
        sources: [{
          type: "video/mp4",
          src: require('@/assets/videos/' + this.videoUrl + '.mp4')
        }],
        poster: require('@/assets/videos/poster/' + this.posterUrl + '.jpg'),
        responsive: true
      },
    }
  },
  computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
}
</script>

<style lang="scss" scoped>
.smartphone-mockup, .cls-3 {
  fill: none;
}

.smartphone-mockup {
  stroke: #070707;
  stroke-width: 7px;
}

.cls-2 {
  stroke: none;
}
</style>