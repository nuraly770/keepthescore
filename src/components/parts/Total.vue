<template>
    <div class="ks-total__wrapper">
        <div class="ks-total__inner-wrapper">
            <div
            id="kscore"
            class="ks-total__total-number"
            >{{ allscore }}</div>
            <div
            class="ks-total__target-number"
            >{{ totalnumber }}</div>
        </div>
        <div class="ks-total__cylon"></div>
    </div>
</template>

<script>
import scoreApi from '@/scripts/scoreApi.js'
export default {
    name: 'Total',
    data() {
        return {
            scoreApi: new scoreApi(),
            allscore:0,
            totalnumber:'570000'
        }
    },
    mounted(){
        this.scoreApi.getBoard().then(res => {
            for(let i = 0; i < res.players.length; i++){
                this.allscore += res.players[i].score
            }
            const kscore = document.getElementById('kscore')
            kscore.style.width = this.allscore / this.totalnumber * 100 + '%'
        })
    },
}
</script>
<style lang="scss">
  .ks-total{
    &__wrapper{
        position: absolute;
        background-color: #DAEED3;
        width: 37.5%;
        @media (max-width:767px) {
            width: 100%;
        }
    }
    &__inner-wrapper{
        padding: 0 5px;
        display: flex;
        justify-content: space-between;
    }
    &__total-number{
        margin-left: -5px;
        padding-left: 5px;
        color: #ffff;
        // width: 37.5%;
        background: #5A8648;
    }
    &__target-number{
        color: #5A8648;
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