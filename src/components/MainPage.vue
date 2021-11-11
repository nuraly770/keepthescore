<template>
<total />
    <div class="ks-main">
        <div class="ks-main__wrapper">
            <statistics />
            <login v-if="false"/>
            <leaders-counter v-if="true"/>
            <leaders v-if="false" />
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
}
</script>
