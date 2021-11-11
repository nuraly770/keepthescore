<template>
    <div class="ks-main__login">
        <div class="ks-main__col">
            <h3 class="ks-main__title">
                Login
            </h3>
            <div class="ks-form">
                <input
                    type="text"
                    placeholder="USERNAME"
                    class="ks-form__input"
                    v-model="username"
                >
                <input
                    type="text"
                    placeholder="PASSWORD"
                    class="ks-form__input"
                    v-model="password"
                >
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
                <button
                    class="ks-form__btn"
                    @click="login">
                    Login
                </button>
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
            username: '',
            password: '',
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
        },
        login(){
            // console.log(this.username, this.password)
            this.scoreApi.getBoard()
                .then(res => {
                    console.log(res.players);
                    console.log(this.username, this.password);
                    for(let i = 0; i < res.players.length; i++){
                        if(res.players[i].player_name == this.username || res.players[i].id == this.password){
                            console.log(res.players[i])
                        }
                    }
                })
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