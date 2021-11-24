<template>
    <div class="ks-main__leaders">
      <div class="ks-main__title">
        <span
          v-for="(tab, index) in tabs"
          :key="index"
          class="ks-main__link"
          :class="{'ks-main__link-active': tab === selectedComponent}"
          @click="changeTab(tab)"
        >{{tab}}</span>
<!--            <router-link-->
<!--                v-on:click="linkfirst"-->
<!--                v-bind:class="{'ks-main__link-active':clicked}"-->
<!--                class="ks-main__link"-->
<!--                to="/"-->
<!--            >-->
<!--            Leaders</router-link>-->
<!--            <router-link-->
<!--            v-on:click="linksecond"-->
<!--            v-bind:class="{'ks-main__link-active':clicked2}"-->
<!--            class="ks-main__link"-->
<!--            to="/counter">-->
<!--            Counter</router-link>-->
<!--            <router-link-->
<!--            v-on:click="linkthird"-->
<!--            v-bind:class="{'ks-main__link-active':clicked3}"-->
<!--            class="ks-main__link"-->
<!--            to="/rewards">-->
<!--            Rewards</router-link>-->
        </div>
<!--        <router-view/>-->
    <component
        :is="selectedComponent"
    />
  </div>
</template>

<script>
import Leaders from "~/views/Leaders";
import Counter from "~/views/Counter";
import Rewards from "~/views/Rewards";
import { mapState } from 'vuex'

export default {
  name: 'LeadersCounter',
  components: {
    Leaders,
    Counter,
    Rewards
  },
  data() {
    return {
      selectedComponent: '',
      tabs: ['Leaders', 'Counter', 'Rewards' ]
    }
  },
  computed: {
    ...mapState(['selectedTab'])
  },
  mounted() {
    if (this.selectedTab) {
      this.selectedComponent = this.selectedTab
    } else {
      this.selectedComponent = 'Leaders'
    }
  },
  methods: {
    changeTab (tabName) {
      this.selectedComponent = tabName
      this.$store.commit('stateUpdater', { name: 'selectedTab', value: tabName })
    }
  }
}
</script>
