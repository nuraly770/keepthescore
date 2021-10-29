<template>
    <div class="ks-main__leaders">
        <div class="ks-main__title">
             <router-link to="/">Leaders</router-link>
            <router-link to="/counter">Counter</router-link>
            <router-link to="/rewards">Rewards</router-link>
        </div>
        <router-view/>
    </div>
    <profile v-if="false" />
    <leaders v-if="false" />
    <rewards v-if="false" />
</template>

<script>
export default {
    name: 'LeadersCounter',
    components: {
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