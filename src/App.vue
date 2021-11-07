<template>
<main-page v-if="true" />
<stars />
</template>

<script>
import MainPage from '@/components/MainPage'
import Stars from '@/svg/Stars.vue'
export default {
  name: 'App',
  components: {
    MainPage,
    Stars
 }
}
</script>

<style lang="scss">
#app {
  // background-image: url(./assets/stars.svg);
  height: 100vh;
  width: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
stify-content: center;
tify-content: center;
tify-content: center;
}
</style>

