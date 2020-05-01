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
    videoUrl: {
      type: String
    },
    videoType: {
      type: String
    },
  },
  data () {
    return {
      playerOptions: {
        muted: true,
        sources: [{
          type: "video/mp4",
          src: require('@/assets/videos/' + this.videoUrl + '.mp4')
        }],
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