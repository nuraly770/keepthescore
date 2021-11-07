<template>
    <div class="ks-main__login">
        <div class="ks-main__col">
            <h3 class="ks-main__title">
                Login
            </h3>
            <div class="ks-form">
                <input type="text" placeholder="Username" class="ks-form__input">
                <input type="text" placeholder="Password" class="ks-form__input">
                <span class="ks-form__text">Select Your Gender</span>
                <div class="ks-form__gender">
                    <span
                    :class="{'ks-form__gender-active': clicked}"
                    @click ="showmale"
                    class="ks-form__gender-list"
                    >M</span>
                    <span
                    :class="{'ks-form__gender-active':clicked2}"
                    @click ="showfemale"
                    class="ks-form__gender-list">F</span>
                </div>
                <button class="ks-form__btn">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
import ScoreApi from '@/scripts/scoreApi'
export default {
    name: 'Login',
    data() {
        return {
            clicked:false,
            clicked2:false,
            scoreApi: new ScoreApi()
        }
    },
    methods:{
        showmale(){
            this.clicked=true,
            this.clicked2=false
        },
        showfemale(){
            this.clicked2=true,
            this.clicked=false
        },
        getInfoBoard(){
            this.scoreApi.getBoard();
        }
    }
}
</script>
<style lang="scss">
    @import "../../assets/scss/main";
    @import "../../assets/scss/form";
    input::-webkit-input-placeholder {
        color: #000;
    }
</style>