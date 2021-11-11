<template>
    <div class="ks-main__content">
        <div class="ks-main__content-item">
            <h1 class="ks-main__content-title">target</h1>
            <h2 class="ks-main__content-subtitle">{{ totalnumber }}</h2>
        </div>
        <img src="../../assets/logo.svg" alt="group" class="ks-main__content-image">
        <div class="ks-main__content-item">
            <h2 class="ks-main__content-title">total</h2>
            <h2 class="ks-main__content-subtitle">{{ allscore }}</h2>
        </div>
    </div>
</template>
<script>
import scoreApi from '@/scripts/scoreApi.js'

export default {
    name: 'Statistics',
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
            })
    },
}
</script>
