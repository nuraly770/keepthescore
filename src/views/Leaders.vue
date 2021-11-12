<template>
<div class="ks-leaders">
    <Player
        v-for="(player, index) in playersList"
        :key="player.id"
        :place="index+1"
        :title="player.player_name"
        :score="player.score"
    />
</div>
</template>
<script>
import scoreApi from '@/scripts/scoreApi'
import Player from '@/views/Player.vue'
export default {
    components: {
        Player
    },
    name: 'Leaders',
    data() {
        return {
            scoreApi: new scoreApi(),
        }
    },
    computed:{
        playersList () {
            return this.$store.state.playersList
        }
    },
    mounted(){
        this.$store.dispatch('getBoard')
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

</style>