<template>
  <div class="ks-player">
    <div
        class="ks-player__wrapper"
        :style="{left: percent}"
    >
      <div class="ks-player__inner-col">
          <span
              class="ks-player__place"
              :style="{background: placeColor}"
          >{{place}}</span>
        <span class="ks-player__name">{{name}}</span>
        <span class="ks-player__score">{{score}}</span>
      </div>
      <div class="ks-player__image">
        <img :src="image" alt="Chel">
      </div>
    </div>
    <div class="ks-player__progress">
      <div class="ks-player__line"></div>
      <div
          class="ks-player__line"
          :style="{width: percentWidth + '%'}"
      />
    </div>
  </div>
</template>
<script>
// import scoreApi from '@/scripts/scoreApi'

export default {
    name: 'Players',
    props:["place", "name", "score", "image"],
    data() {
        return {
            // scoreApi: new scoreApi(),
            color: ['#FFD700', '#C0C0C0', '#cd7f32', '#DAD393']
        }
    },
    computed: {
      percentWidth() {
        if(this.place === 1){
            this.$store.commit('stateUpdater', { name: 'firstPlaceScore', value: this.score })
            return 100
        }else{
            // 23
            const res = 100 / this.firstPlace * this.score
            return res
        }
      },
      percent() {
          if(this.percentWidth < 23){
              return 0
          } else {
              return 'calc(' + this.percentWidth +'% - 106px )'
          }
      },
      firstPlace(){
        return this.$store.state.firstPlaceScore
      },
      placeColor(){
          if(this.place > 3){
              return this.color[3]
          }else{
              const i = this.place - 1
              return this.color[i]
          }
      },
      images() {
          console.log(this.icon[this.place-1])
          return this.icon[this.place-1]
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
  .ks-player {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
		&__wrapper {
      min-width: 120px;
      display: flex;
      position: relative;
      width: max-content;
		}
    &__progress {
      position: relative;
      width: 100%;
      height: 5px;
    }
		&__inner-col {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 0 8px 8px 0;
		}
		&__place {
      margin: 0 0 5px 17px;
      font-size: 16px;
      font-weight: 600;
      height: 28px;
      width: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
		}
		&__name {
      font-size: 12px;
      text-transform: uppercase;
      line-height: 1;
		}
		&__score {
      line-height: 1;
    }
		&__image {
      width: 53px;
      height: 62px;
      img{
        width: 100%;
        height: 100%;
      }
		}
		&__line {
      width: 100%;
      height: 5px;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 6px;
      &:first-child{
        background: #DAEED3;
      }
      &:last-child{
        background: #5A8648;
      }
		}
  }
</style>