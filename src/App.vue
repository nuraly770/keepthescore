<template>
<main-page />
</template>

<script>
import MainPage from '@/components/MainPage'

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style lang="scss">
#app {
  background-image: url(./assets/backgroundImage.jpg);
  height: 720px;
  width: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
}
</style>
