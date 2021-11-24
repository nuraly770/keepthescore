<template>
  <div class="ks-main">
    <div class="bg-image bg-image_left">
      <Stars/>
    </div>
    <div class="ks-main__outer-wrapper">
      <total />
      <div class="ks-main__wrapper">
        <statistics />
        <login v-if="logIn === false"/>
        <leaders-counter v-if="logIn === true"/>
        <!-- <leaders v-if="true" /> -->
        <div class="ks-main__players">
        </div>
      </div>
    </div>
    <div class="bg-image bg-image_right">
      <Stars/>
    </div>
  </div>
</template>
<script>
import Stars from '@/svg/Stars.vue'
import LeadersCounter from '@/components/parts/LeadersCounter'
import Login from '@/components/parts/Login'
import Statistics from '@/components/parts/Statistics'
import Total from '@/components/parts/Total'

export default {
  name:'Main',
  data() {
    return {
    }
  },
  components: {
    LeadersCounter,
    Login,
    Statistics,
    Total,
    Stars
  },
  computed: {
    logIn(){
      return this.$store.state.session
    }
  }
}
</script>
<style scoped lang="scss">
.ks-main {
  position: relative;
}
.bg-image {
  width: 400px;
  height: 100%;
  //width: 100vw;
  //height: 100vh;
  position: absolute;
  top: 0;
  bottom: auto;
  overflow: hidden;
  z-index: -1;
  @media (max-width: 767px) {
    top: auto;
    bottom: -375px;
    height: 400px;
    width: 50%;
  }
  .image {
    height: 100%;
  }
  &_left {
    left: -400px;
    right: auto;
    @media (max-width: 767px) {
      left: 0;
    }
  }
  &_right {
    left: auto;
    right: -400px;
    @media (max-width: 767px) {
      right: 0;
    }
  }
}
</style>
