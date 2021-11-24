<template>
  <div class="ks-total">
    <div class="ks-total__wrapper">
      <div
        id="kscore"
        class="ks-total__total-number"
      >
        <span>Total: {{ allscore }}</span>
      </div>
      <div class="ks-total__target-number">
        <span>Goal: {{ totalNumber }}</span>
      </div>
    </div>
    <div class="ks-total__cylon"></div>
  </div>
</template>

<script>
// import scoreApi from '@/scripts/scoreApi.js'
import { mapState } from 'vuex'
export default {
    name: 'Total',
    data() {
      return {
        // scoreApi: new scoreApi(),
        allscore:0,
        // totalnumber:'570000'
      }
    },
    computed: {
      ...mapState(['apiRes']),
      totalNumber () {
        return this.apiRes.board.goal_value
      }
    },
    mounted(){
      // this.scoreApi.getBoard().then(res => {
        for(let i = 0; i < this.apiRes.players.length; i++){
          this.allscore += this.apiRes.players[i].score
        }
        const kscore = document.getElementById('kscore')
        kscore.style.width = this.allscore / this.totalNumber * 100 + '%'
      // })
    },
}
</script>
<style lang="scss">
  .ks-total{
    position: relative;
    background-color: #DAEED3;
    width: 100%;
    //width: 720px;
    //@media (min-width: 1281px) {
    //  width: 36vw;
    //}
    //@media (max-width:767px) {
    //  width: 100%;
    //}
    &__wrapper{
      padding: 0 5px;
      display: flex;
      justify-content: space-between;
    }
    &__total-number{
      margin-left: -5px;
      padding-left: 5px;
      font-weight: 200;
      // width: 37.5%;
      background: #5A8648;
      text-transform: uppercase;
      span {
        color: #ffff;
      }
    }
    &__target-number{
      //color: #5A8648;
      font-weight: 400;
      text-transform: uppercase;
      position: absolute;
      top: 0;
      right: 5px;
      bottom: 0;
      left: auto;
      margin: auto;
      span {
        color: #8cb37f;
      }
    }
    &__cylon{
      top: 0;
      height: 100%;
      position: absolute;
      width: 141px;
      background: linear-gradient(270deg, rgba(90, 134, 72, 0) 0%, rgba(218, 238, 211, 0.6) 24.74%, rgba(213, 234, 205, 0.6) 25.78%, rgba(90, 134, 72, 0) 50%);
      animation: 3s linear 1s infinite running move_eye;
    }
    @keyframes move_eye { from { margin-left: -5vw; } to { margin-left: 10vw; }  }
}
</style>