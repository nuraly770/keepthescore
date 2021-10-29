<template>
   <div class="ks-leaders__wrapper">
       <div class="ks-leaders__inner-wrapper">
           <div class="ks-leaders__place">1</div>
           <div class="ks-leaders__name">Gurban</div>
           <div class="ks-leaders__number">2312</div>
       </div>
       <div class="ks-leaders__image">
           <img src="../assets/man.svg" alt="man">
       </div>
   </div>
   <div class="ks-leaders__line">
       <div class="ks-leaders__color"></div>
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
.ks-leaders{
    &__wrapper{
        display: flex;
        justify-content: flex-start;
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