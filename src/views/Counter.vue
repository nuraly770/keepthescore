<template>
    <div class="ks-profile">
        <div class="ks-profile__col">
            <div class="ks-profile__wrapper">
                <img src="../assets/profilePhoto.svg" alt="profilePhoto" class="ks-profile__image">
                <div class="ks-profile__data">
                    <h4 class="ks-profile__data-title">{{ counter.player.player_name }}</h4>
                    <p class="ks-profile__data-text">Total score:{{ counter.player.score }} </p>
                    <p class="ks-profile__data-text">Position: {{ counter.place }}</p>
                </div>
            </div>
            <h3 class="ks-profile__title">Add score</h3>
            <div class="ks-form">
                <input type="number" placeholder="0" v-model="result" class="ks-form__input">
                <button
                v-on:click="addScore"
                class="ks-form__btn">Add score</button>
            </div>
            <button
            v-on:click="number"
            class="ks-profile__circle-btn">+1</button>
        </div>
    </div>
</template>
<script>
import scoreApi from '@/scripts/scoreApi'

export default {
    name: 'Profile',
    data() {
        return {
          scoreApi: new scoreApi(),
          result: 0,
          counter: JSON.parse(localStorage.getItem('vuex')),
        }
    },
    props: ['value'],
    methods:{
      addScore(){
           this.scoreApi.getScore()
                .then(res => {
                    console.log(res)
                })
      },
      emitResult(){
        this.$emit('input', this.result)
      },
      number(){
        this.result += 1
        this.emitResult()
      }
    },
    mounted() {
      if (localStorage.result) {
        this.result = localStorage.result;
      }
    },
    watch: {
        result(newResult) {
            localStorage.result = newResult;
      }
    }
}
</script>
<style lang="scss">
    .ks-profile {
            width: 237px;
            margin: auto;
            // .ks-profile__col

            &__col {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            // .ks-profile__wrapper

            &__wrapper {
                display: flex;
                width: 100%;
                justify-content: space-between;
                 @media (max-width:575px) {
                    justify-content: space-around;
                }
            }

            // .ks-profile__image

            &__image {
                border-radius: 100%;
                @media (max-width:575px) {
                    width: 80px;
                }
            }

            // .ks-profile__data

            &__data {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            // .ks-profile__data-name

            &__data-title {
                font-size: 20px;
                font-weight: 400;
                text-transform: uppercase;
                 @media (max-width:575px) {
                    font-size: 16px;
                }
            }

            // .ks-profile__data-score

            &__data-text {
                font-size: 14px;
                text-transform: uppercase;
            }

            // .ks-profile__title

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

            // .ks-profile__circle-btn

            &__circle-btn {
                cursor: pointer;
                border: none;
                border-radius: 100%;
                width: 108px;
                height: 108px;
                background: #DAEED3;
                font-size: 40px;
                margin-top: 15px;
            }
    }
</style>