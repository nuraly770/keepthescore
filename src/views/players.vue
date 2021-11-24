<template>
    <div class="ks-leaders__outer-wrapper">
        <div
            class="ks-leaders__wrapper"
            :style="{left: 'calc(' + percentWidth +'% - 24%)'}"
        >
            <div class="ks-leaders__inner-wrapper">
                <div class="ks-leaders__place">{{place}}</div>
                <div class="ks-leaders__name">{{title}}</div>
                <div class="ks-leaders__number">{{score}}</div>
            </div>
            <div class="ks-leaders__image">
                <img src="../assets/man.svg" alt="man">
            </div>
        </div>
        {{percentWidth}}
        <div class="ks-leaders__line">
            <div
              class="ks-leaders__color"
              :style="{width: percentWidth + '%'}"
            ></div>
        </div>
    </div>
</template>
<script>
// import scoreApi from '@/scripts/scoreApi'

export default {
    name: 'Players',
    props:["place", "title", "score"],
    data() {
        return {
            // scoreApi: new scoreApi(),
        }
    },
    computed: {
      percentWidth() {
        if(this.place === 1){
            this.$store.commit('stateUpdater', { name: 'firstPlaceScore', value: this.score })
            return 100
        }else{
            const res = 100 / this.firstPlace * this.score
            return res
        }
      },
      firstPlace(){
        return this.$store.state.firstPlaceScore
      }
    },
    mounted(){
        // this.scoreApi.getBoard().then(res =>{
        //      for(let i = 0; i < res.players.length; i++){
                // console.log(res.players[i].score)
                // console.log(res.players[i].player_name)
                // console.log(res.players[i].id)
            // }
        // })
    }
}
</script>
<style lang="scss">
.ks-leaders{
    height: 60vh;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 0px;
        display: none;
    }
    &__wrapper{
        display: flex;
        justify-content: flex-start;
        position: relative;
    }
    &__line{
        width: 100%;
        height: 5px;
        background: #DAEED3;
        border-radius: 10px;
    }
    &__color{
        background: #5A8648;
        border-radius: 10px;
        width: 25%;
        height: 5px;
    }
    &__inner-wrapper{
        text-align: right;
        color: #000000;
        margin-right: 7px;
    }
    &__outer-wrapper{
        margin-bottom: 25px;
    }
    &__place{
        margin: 0 0 5px 17px;
        font-size: 16px;
        font-weight: 600;
        height: 28px;
        width: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF191;
        border-radius: 50%;
    }
    &__name{
        line-height: 15px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
    }
    &__number{
        font-size: 20px;
        font-weight: 400;
        line-height: 16px;
    }
}
</style>