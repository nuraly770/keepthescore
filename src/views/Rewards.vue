<template>
    <div class="ks-rewards__images">
        <div class="ks-rewards__stage">
            <img src="../assets/badge_1k.svg" alt="badge_1k">
            <img src="../assets/badge_5k.svg" alt="badge_5k">
            <img src="../assets/badge_10k.svg" alt="badge_10k">
        </div>
        <div class="ks-rewards__stage">
            <img src="../assets/badge_20k.svg" alt="badge_20k">
            <img src="../assets/badge_30k.svg" alt="badge_30k">
            <img src="../assets/badge_50k.svg" alt="badge_50k">
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
    &__stage{
        display: flex;
        justify-content: space-around;
        &:nth-child(2){
            padding-top: 20px;
        }
    }
}
</style>