<template>
    <div class="ks-main">
        <div class="ks-main__wrapper">
            <statistics />
            <login v-if="false"/>
            <leaders-counter v-if="false"/>
            <div class="ks-main__players">
                
            </div>
        </div>
    </div>
</template>
<script>
import LeadersCounter from '@/components/parts/LeadersCounter'
import Login from '@/components/parts/Login'
import Statistics from '@/components/parts/Statistics'

export default {
  components: {
        LeadersCounter,
        Login,
        Statistics
    },
    name:'Main',
    data() {
        return {
            
        }
    },
}
</script>
<style lang="scss">
    @import "../assets/scss/main";
</style>