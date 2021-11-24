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
                    type="password"
                    placeholder="PASSWORD"
                    class="ks-form__input"
                    v-model="password"
                >
                <span class="ks-form__text">Select Your Gender</span>
                <div class="ks-form__gender">
                    <button
                      :class="{'ks-form__gender-active': this.gender === 'male'}"
                      @click ="selectGender('male')"
                      class="ks-form__gender-list"
                    >
                      <span>M</span>
                    </button>
                    <button
                      :class="{'ks-form__gender-active': this.gender === 'female'}"
                      @click ="selectGender('female')"
                      class="ks-form__gender-list">
                      <span>F</span>
                    </button>
                </div>
                <button
                    class="ks-form__btn"
                    :disabled="disabled"
                    @click="login"
                >
                  <span>Login</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
// import ScoreApi from '@/scripts/scoreApi'
import { mapState } from 'vuex'
export default {
    name: 'Login',
    data() {
        return {
            clicked:false,
            clicked2:false,
            username: '',
            password: '',
            // scoreApi: new ScoreApi(this.publicKey, this.privateKey),
            score:''
        }
    },
    computed:{
      ...mapState(['apiRes', 'gender']),
      disabled(){
        if(this.username == '' || this.password == ''){
            return true
        } else {
            return false
        }
      }
    },
    methods:{
        selectGender (gender) {
          this.$store.commit('stateUpdater', { name: 'gender', value: gender })
        },
        login(){
          this.$store.commit('stateUpdater', { name: 'userName', value: this.username })
          const players = this.apiRes.players
          const index = players.findIndex(c => c.player_name === this.username)
          if ( players[index].id === parseInt(this.password)  ) {
            this.$store.commit('stateUpdater', { name: 'session', value: true })
            this.$store.commit('stateUpdater', { name: 'player', value: players[index]})
            this.$store.commit('stateUpdater', { name: 'place', value: index+1 })
          } else {
            console.log('User not found')
          }
          // for(let i = 0; i < this.apiRes.players.length; i++){
          //   if(this.apiRes.players[i].player_name == this.username && this.apiRes.players[i].id == this.password){
          //     this.$store.commit('stateUpdater', { name: 'session', value: true })
          //     this.$store.commit('stateUpdater', { name: 'player', value: this.apiRes.players[i]})
          //     console.log(i+1)
          //     this.$store.commit('stateUpdater', { name: 'place', value: i+1 })
          //   } else {
          //     console.log('kodyn ya parolyn yalnysh bratishka')
          //   }
          // }
            // console.log(this.username, this.password)
            // this.scoreApi.getBoard()
            //     .then(res => {
            //         // 3748470
            //         for(let i = 0; i < res.players.length; i++){
            //             if(res.players[i].player_name == this.username && res.players[i].id == this.password){
            //                 this.$store.commit('stateUpdater', { name: 'session', value: true })
            //                 this.$store.commit('stateUpdater', { name: 'player', value: res.players[i]})
            //                 console.log(i+1)
            //                 this.$store.commit('stateUpdater', { name: 'place', value: i+1 })
            //             } else {
            //                 console.log('kodyn ya parolyn yalnysh bratishka')
            //             }
            //         }
            //     })
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