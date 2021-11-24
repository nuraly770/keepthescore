<template>
    <div class="ks-main__content">
        <div class="ks-main__content-item">
            <span class="ks-main__content-title">target</span>
            <span class="ks-main__content-subtitle">{{ totalnumber }}</span>
        </div>
        <img src="../../assets/img/logo.svg" alt="group" class="ks-main__content-image">
        <div class="ks-main__content-item">
            <span class="ks-main__content-title">total</span>
            <span class="ks-main__content-subtitle">{{ allscore }}</span>
        </div>
    </div>
</template>
<script>
// import scoreApi from '@/scripts/scoreApi.js'
import { mapState } from 'vuex'

export default {
  name: 'Statistics',
  data() {
    return {
      // scoreApi: new scoreApi(),
      allscore:0,
      totalnumber:'570000'
    }
  },
  computed: {
    ...mapState(['apiRes']),
  },
  mounted(){
    // this.scoreApi.getBoard().then(res => {
    for (let i = 0; i < this.apiRes.players.length; i++){
      this.allscore += this.apiRes.players[i].score
    }
    // })
  },
}
</script>
