<template>
  <transition
    name="component-fade"
    mode="out-in"
  >
    <div
      v-if="show"
      class="ks-rewards__images"
    >
      <div
        class="ks-rewards__image"
        :style="[ score > 0 ? '--height:' + parseInt(100 - score / 10) + '%;' : '', score > 1000 ? '--height:0%;' : '' ]"
      >
        <img src="../assets/img/badge_1k_new.svg" alt="badge_1k">
        <div
          class="ks-rewards__percent"
          v-if="parseInt(score / 10) > 0 && parseInt(score / 10) < 100 && score < 1000"
        >
          <span>{{ parseInt(score / 10) }}%</span>
        </div>
      </div>
      <div
        class="ks-rewards__image"
        :style="[ score > 1000 ? '--height:' + parseInt(100 - score / 50) + '%;' : '', score > 5000 ? '--height:0%;' : '' ]"
      >
        <img src="../assets/img/badge_5k_new.svg" alt="badge_5k">
        <div
          class="ks-rewards__percent"
          v-if="parseInt(score / 50) > 0 && parseInt(score / 50) < 100  && score < 5000 && score > 1000"
        >
          <span>{{ parseInt(score / 50) }}%</span>
        </div>
      </div>
      <div
        class="ks-rewards__image"
        :style="[ score > 5000 ? '--height:' + parseInt(100 - score / 100) + '%;' : '', score > 10000 ? '--height:0%;' : '' ]"
      >
        <img src="../assets/img/10k.svg" alt="badge_10k">
        <div
          class="ks-rewards__percent"
          v-if="parseInt(score / 100) > 0 && parseInt(score / 100) < 100  && score < 10000 && score > 5000"
        >
          <span>{{ parseInt(score / 100) }}%</span>
        </div>
      </div>
      <div
        class="ks-rewards__image"
        :style="[ score > 10000 ? '--height:' + 100 - score / 200 + '%;' : '', score > 20000 ? '--height:0%;' : '' ]"
      >
        <img src="../assets/img/badge_20k_new.svg" alt="badge_20k">
        <div
            class="ks-rewards__percent"
            v-if="parseInt(score / 200) > 0 && parseInt(score / 200) < 100 && score < 20000 && score > 10000"
        >
          <span>{{ parseInt(score / 200) }}%</span>
        </div>
      </div>
      <div
        class="ks-rewards__image"
        :style="[ score > 20000 ? '--height:' + 100 - score / 300 + '%;' : '', score > 30000 ? '--height:0%;' : '' ]"
      >
        <img src="../assets/img/badge_30k_new.svg" alt="badge_30k">
        <div
            class="ks-rewards__percent"
            v-if="parseInt(score / 300) > 0 && parseInt(score / 300) < 100 && score < 30000 && score > 20000"
        >
          <span>{{ parseInt(score / 300) }}%</span>
        </div>
      </div>
      <div
        class="ks-rewards__image"
        :style="[ score > 30000 ? '--height:' + 100 - score / 500 + '%;' : '', score > 50000 ? '--height:0%;' : '' ]"
      >
        <img src="../assets/img/badge_50k_new.svg" alt="badge_50k">
        <div
            class="ks-rewards__percent"
            v-if="parseInt(score / 500) > 0 && parseInt(score / 500) < 100 && score < 50000 && score > 30000"
        >
          <span>{{ parseInt(score / 500) }}%</span>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Leaders',
  data() {
    return {
      show: false,
      counter: JSON.parse(localStorage.getItem('vuex'))
    }
  },
  computed: {
    score () {
      return this.counter.player.score
    }
  },
  mounted(){
    this.show = true
    this.$nextTick(() => {
        // const first = document.getElementById('first')
        // const second = document.getElementById('second')
        // const third = document.getElementById('third')
        // const fourth = document.getElementById('fourth')
        // const fiveth = document.getElementById('fiveth')
        // const sixth = document.getElementById('sixth')
        // if(this.counter.player.score < 1000){
        //   first.style.height = 100 - (this.counter.player.score / 1000*100)+ '%'
        // } else if( this.counter.player.score >= 1000){
        //   first.style.height = '0'
        // }
        // if(this.counter.player.score < 5000){
        //   // console.log(second.style.height = 100 - (this.counter.player.score / 5000 *100)+ '%')
        // } else if( this.counter.player.score >= 5000){
        //   second.style.height = '0'
        // }
        // if(this.counter.player.score < 10000){
        //   // console.log(third.style.height = 100 - (this.counter.player.score / 10000 *100)+ '%')
        // } else if( this.counter.player.score >= 10000){
        //   third.style.height = '0'
        // }
        // if(this.counter.player.score < 20000){
        //   // console.log(fourth.style.height = 100 - (this.counter.player.score / 20000 *100)+ '%')
        // } else if( this.counter.player.score >= 20000){
        //   fourth.style.height = '0'
        // }
        // if(this.counter.player.score < 30000){
        //   // console.log(fiveth.style.height = 100 - (this.counter.player.score / 30000 *100)+ '%')
        // } else if( this.counter.player.score >= 30000){
        //   fiveth.style.height = '0'
        // }
        // if(this.counter.player.score < 50000){
        //   sixth.style.height = 100 - (this.counter.player.score / 50000 *100)+ '%'
        // } else if( this.counter.player.score >= 50000){
        //   sixth.style.height = '0'
        // }
    })
  }
}
</script>
<style scoped lang="scss">
.ks-rewards{
  &__first{
    position: absolute;
    height: 100%;
    width: 100%;
    background: #FFFFFF;
    opacity: 70%;
  }
  &__images{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  &__image{
    position: relative;
    padding: 20px;
    --height: 100%;
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: var(--height);
      width: 100%;
      background: #FFFFFF;
      opacity: .7;
    }
    @media (max-width: 575px) {
      padding: 10px;
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
  &__percent {
    //position: relative;
    z-index: 1;
    height: 40px;
    width: 40px;
    background-color: #DAEED3;
    border-radius: 100%;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: auto;
    position: absolute;
    top: auto;
    right: auto;
    left: 10%;
    bottom: 10%;
    @media (max-width: 575px) {
      left: 0%;
      bottom: 0%;
    }
  }
}
</style>