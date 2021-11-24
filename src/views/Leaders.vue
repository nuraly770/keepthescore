<template>
  <transition
      name="component-fade"
      mode="out-in"
  >
    <div
      v-if="show"
      class="ks-leaders"
    >
      <Player
        v-for="(player, index) in playersList"
        :key="player.id"
        :place="index+1"
        :name="player.player_name"
        :score="player.score"
        :image="icon[index]"
      />
    </div>
  </transition>
</template>
<script>
// import scoreApi from '@/scripts/scoreApi'
import Player from '@/views/Player.vue'
export default {
  components: {
    Player
  },
  name: 'Leaders',
  data() {
    return {
      show: false,
      // scoreApi: new scoreApi(),
      icon: [require('../assets/img/boy6.svg'), require('../assets/img/boy2.svg'), require('../assets/img/boy3.svg'), require('../assets/img/boy4.svg'), require('../assets/img/boy5.svg'), require('../assets/img/boy1.svg'), require('../assets/img/boy2.svg'), require('../assets/img/boy3.svg'), require('../assets/img/boy4.svg'), require('../assets/img/boy5.svg'), require('../assets/img/boy6.svg')]
    }
  },
  computed:{
    playersList () {
      return this.$store.state.playersList
    }
  },
  mounted(){
    this.show = true
    // this.$store.dispatch('getBoard')
    // this.scoreApi.getBoard().then(res =>{
        //  for(let i = 0; i < res.players.length; i++){
            // console.log(res.players[i].score)
            // console.log(res.players[i].player_name)
            // console.log(res.players[i].id)
        // }
    // })
  }
}
</script>
<style lang="scss">
.ks-leaders {
  margin-bottom: 120px;
  @media (max-width: 767px) {
    margin-bottom: 0;
  }
//    //height: 51vh;
//    //overflow-y: auto;
//     &::-webkit-scrollbar {
//        width: 0px;
//        display: none;
//    }
}
</style>