<template>
<total />
    <div class="ks-main">
        <div class="ks-main__wrapper">
            <statistics />
            <login v-if="logIn==false"/>
            <leaders-counter v-if="logIn==true"/>
            <!-- <leaders v-if="true" /> -->
            <div class="ks-main__players">
            </div>
        </div>
    </div>
</template>
<script>
import LeadersCounter from '@/components/parts/LeadersCounter'
import Login from '@/components/parts/Login'
import Statistics from '@/components/parts/Statistics'
import Total from '@/components/parts/Total'

export default {
  components: {
        LeadersCounter,
        Login,
        Statistics,
        Total,
    },
    name:'Main',
    data() {
        return {

        }
    },
    computed: {
        logIn(){
            return this.$store.state.session
        }
    }
}
</script>
