<template>
<main-page v-if="loaded"/>
<!--<stars />-->
</template>

<script>
import { mapState } from 'vuex'
import MainPage from '@/components/MainPage'
// import Stars from '@/svg/Stars.vue'
export default {
  name: 'App',
  components: {
    MainPage,
    // Stars
  },
  mounted() {
    this.$store.dispatch('getPublicKey')
    this.$store.dispatch('getPrivateKey')
    this.$store.dispatch('getBoard')
    // this.$store.dispatch('getPlayerData')
  },
  computed: {
    // ...mapActions(['getPublicKey']),
    ...mapState(['publicKey', 'privateKey', 'playersList', 'loaded'])
  }
}
</script>

<style lang="scss">
#app {
  // background-image: url(./assets/stars.svg);
  //height: 100vh;
  width: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  @media (max-width:767px) {
    padding-bottom: 200px;
    &::after {
      content: '';
      position: absolute;
      top: auto;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(to top, rgb(255,255,255), rgba(255,255,255, 0));
    }
  }
// stify-content: center;
// tify-content: center;
// tify-content: center;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}
</style>

