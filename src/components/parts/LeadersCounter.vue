<template>
    <div class="ks-main__leaders">
        <div class="ks-main__title">
            <router-link
                v-on:click="linkfirst"
                v-bind:class="{'ks-main__link-active':clicked}"
                class="ks-main__link"
                to="/"
            >
            Leaders</router-link>
            <router-link
            v-on:click="linksecond"
            v-bind:class="{'ks-main__link-active':clicked2}"
            class="ks-main__link"
            to="/counter">
            Counter</router-link>
            <router-link
            v-on:click="linkthird"
            v-bind:class="{'ks-main__link-active':clicked3}"
            class="ks-main__link"
            to="/rewards">
            Rewards</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'LeadersCounter',
    components: {
    },
    data() {
        return {
            clicked:false,
            clicked2:false,
            clicked3:false
        }
    },
    methods: {
        linkfirst(){
            this.clicked=true,
            this.clicked2=false,
            this.clicked3=false
        },
        linksecond(){
            this.clicked=false,
            this.clicked2=true,
            this.clicked3=false
        },
        linkthird(){
            this.clicked=false,
            this.clicked2=false,
            this.clicked3=true
        }
  }
}
</script>
