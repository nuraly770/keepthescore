<template>
        <span>{{ number }}</span>
    <div class="ks-rewards__images">
        <div class="ks-rewards__image" >
            <div class="ks-rewards__first" id="first"></div>
            <img src="../assets/badge_1k_new.svg" alt="badge_1k">
        </div>
        <div class="ks-rewards__image">
            <div class="ks-rewards__first" id="second"></div>
            <img src="../assets/badge_5k_neww.svg" alt="badge_5k">
        </div>
        <div class="ks-rewards__image">
            <div class="ks-rewards__first" id="third"></div>
            <img src="../assets/10k.svg" alt="badge_10k">
        </div>
        <div class="ks-rewards__image">
            <div class="ks-rewards__first" id="fourth"></div>
            <img src="../assets/badge_20k_new.svg" alt="badge_20k">
        </div>
        <div class="ks-rewards__image">
            <div class="ks-rewards__first" id="fiveth"></div>
            <img src="../assets/badge_30k_new.svg" alt="badge_30k">
        </div>
        <div class="ks-rewards__image">
            <div class="ks-rewards__first" id="sixth"></div>
            <img src="../assets/badge_50k_new.svg" alt="badge_50k">
        </div>
    </div>
</template>
<script>
export default {
    name: 'Leaders',
    data() {
        return {
            number: '60000'
        }
    },
    mounted(){
        const first = document.getElementById('first')
        const second = document.getElementById('second')
        const third = document.getElementById('third')
        const fourth = document.getElementById('fourth')
        const fiveth = document.getElementById('fiveth')
        const sixth = document.getElementById('sixth')
        if(this.number < 1000){
            first.style.height = 100 - (this.number / 1000*100)+ '%'
        } else if( this.number >= 1000){
            first.style.height = '0'
        }
        if(this.number < 5000){
            console.log(second.style.height = 100 - (this.number / 5000 *100)+ '%')
        } else if( this.number >= 5000){
            second.style.height = '0'
        }
        if(this.number < 10000){
            console.log(third.style.height = 100 - (this.number / 10000 *100)+ '%')
        } else if( this.number >= 10000){
            third.style.height = '0'
        }
        if(this.number < 20000){
            console.log(fourth.style.height = 100 - (this.number / 20000 *100)+ '%')
        } else if( this.number >= 20000){
            fourth.style.height = '0'
        }
        if(this.number < 30000){
            console.log(fiveth.style.height = 100 - (this.number / 30000 *100)+ '%')
        } else if( this.number >= 30000){
            fiveth.style.height = '0'
        }
        if(this.number < 50000){
            sixth.style.height = 100 - (this.number / 50000 *100)+ '%'
        } else if( this.number >= 50000){
            sixth.style.height = '0'
        }
    }
}
</script>
<style lang="scss">
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
        @media (max-width: 575px) {
            padding: 10px;
        }
    }
}
</style>