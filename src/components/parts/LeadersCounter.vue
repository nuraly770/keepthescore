<template>
    <div class="ks-main__leaders">
        <h3 class="ks-main__title">Leaders Counter</h3>        
    </div>
    <profile />
</template>

<script>
import Profile from '@/components/others/Profile'
export default {
    name: 'LeadersCounter',
    components: { 
      Profile 
    },
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss">
    @import "../../assets/scss/main";
</style>