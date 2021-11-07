<template>
    <div class="ks-rewards__images">
        <div class="ks-rewards__image">
            <img src="../assets/badge_1k_new.svg" alt="badge_1k">
        </div>
        <div class="ks-rewards__image">
            <img src="../assets/badge_5k_neww.svg" alt="badge_5k">
        </div>
        <div class="ks-rewards__image">
            <img src="../assets/10k.svg" alt="badge_10k">
        </div>
        <div class="ks-rewards__image">
            <img src="../assets/badge_20k_new.svg" alt="badge_20k">
        </div>
        <div class="ks-rewards__image">
            <img src="../assets/badge_30k_new.svg" alt="badge_30k">
        </div>
        <div class="ks-rewards__image">
            <img src="../assets/badge_50k_new.svg" alt="badge_50k">
        </div>
    </div>
</template>
<script>
export default {
    name: 'Leaders',
    data() {
        return {

        }
    },
}
</script>
<style lang="scss">
.ks-rewards{
    &__images{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    &__image{
        position: relative;
            &::before{
                content: '';
                position: absolute;
                height: 100%;
                width: 100%;
                background: #FFFFFF;
                opacity: 70%;
            }
        &:nth-child(2){
            padding: 0 20px;
        }
        &:nth-child(4){
            padding-top: 20px;
        }
         &:nth-child(6){
            padding-top: 20px;
        }
        &:nth-child(5){
            padding: 20px 20px 0 20px;
        }
    }
}
</style>