<template>
  <transition
    name="component-fade"
    mode="out-in"
  >
    <div
      v-if="show"
      class="ks-profile"
    >
      <div class="ks-profile__col">
          <div class="ks-profile__wrapper">
              <div class="ks-profile__image-wrapper">
                <img
                    :src="userPhoto[gender]"
                    alt="profilePhoto"
                    class="ks-profile__image"
                >
                <button
                    @click="logout"
                    class="ks-profile__button"
                >
                  <IconLogout />
                </button>
              </div>
              <div class="ks-profile__data">
                  <p class="ks-profile__data-title">{{ player.player_name }}</p>
                  <p class="ks-profile__data-text">Total score:{{ player.score }} </p>
                  <p class="ks-profile__data-text">Position: {{ place }}</p>
              </div>
          </div>
          <h3 class="ks-profile__title">Add score</h3>
          <div class="ks-form">
            <input type="number" placeholder="0" v-model="counter" class="ks-form__input">
            <button
              @click="addScore"
              class="ks-form__btn"
            >
              <span>Add score</span>
            </button>
          </div>
          <button
            @click="increment"
            class="ks-profile__circle-btn"
          >
            <span>+1</span>
          </button>
      </div>
    </div>
  </transition>
</template>
<script>
// import scoreApi from '@/scripts/scoreApi'
import { mapState } from 'vuex'
import IconLogout from "@/svg/IconLogout";

export default {
    name: 'Profile',
    data() {
      return {
        show: false,
        // scoreApi: new scoreApi(this.publicKey, this.privateKey),
        counter: 0,
        // counter: JSON.parse(localStorage.getItem('vuex')),
        userPhoto: {
          male: require('@/assets/img/profilePhotoM.svg'),
          female: require('@/assets/img/profilePhotoW.svg')
        }
      }
    },
    props: ['value'],
    components: { IconLogout },
    computed:{
      ...mapState(['publicKey','privateKey','gender', 'player', 'place', 'counterNumber'])
    },
    methods:{
      addScore(){
        if (this.counter !== 0) {
          this.$store.dispatch('addScore')
        } else {
          console.log('Empty')
        }
       // this.scoreApi.addScore(this.player.id, this.counter)
       //  .then(res => {
       //      console.log(res)
       //  })
      },
      // emitResult(){
      //   this.$emit('input', this.counter)
      //   this.$store.commit('stateUpdater', { name: 'counterNumber', value: this.counter })
      // },
      increment(){
        this.counter++
        this.$store.commit('stateUpdater', { name: 'counterNumber', value: this.counter })
        // this.emitResult()
      },
      logout () {
        this.$store.commit('stateUpdater', { name: 'player', value: {} })
        this.$store.commit('stateUpdater', { name: 'place', value: null })
        this.$store.commit('stateUpdater', { name: 'gender', value: 'male' })
        this.$store.commit('stateUpdater', { name: 'session', value: false })
        this.$store.commit('stateUpdater', { name: 'selectedTab', value: null })
      }
    },
    mounted() {
      this.show = true
      if (this.counterNumber) {
        this.counter = this.counterNumber;
        // this.$store.commit('stateUpdater', { name: 'counterNumber', value: this.counter })
      }
    },
    watch: {
      counterNumber(newResult) {
        this.counter = newResult;
      }
    }
}
</script>
<style lang="scss">
  .ks-profile {
    width: 237px;
    margin: auto;
    &__col {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__wrapper {
      display: flex;
      width: 100%;
      justify-content: space-between;
      @media (max-width:575px) {
        justify-content: space-around;
      }
    }
    &__image {
      border-radius: 100%;
      @media (max-width:575px) {
        width: 80px;
      }
    }
    &__data {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__data-title {
      font-size: 20px;
      font-weight: 400;
      text-transform: uppercase;
      @media (max-width:575px) {
        font-size: 16px;
      }
    }
    &__data-text {
      font-size: 14px;
      text-transform: uppercase;
    }
    &__title {
      margin: 40px 0 20px;
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 400;
      text-align: center;
      @media (max-width:575px) {
        margin: 20px 0 10px;
      }
    }
    &__circle-btn {
      font-family: 'Cairo', sans-serif;
      cursor: pointer;
      border: none;
      border-radius: 100%;
      width: 108px;
      height: 108px;
      background: #DAEED3;
      font-size: 40px;
      margin-top: 15px;
      -webkit-tap-highlight-color: transparent;
    }
    &__image-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &__button {
      background-color: #FFFFFF;
      border: 1px solid #FF4444;
      color: #FF4444;
      border-radius: 100%;
      height: 30px;
      width: 30px;
      font-family: 'Cairo', sans-serif;
      text-transform: uppercase;
      margin-top: -12px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        fill: #FF4444;
      }
    }
  }
</style>