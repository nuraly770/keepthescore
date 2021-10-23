<template>
    <div class="ks-main__login">
        <div class="ks-main__col">
            <h3 class="ks-main__title">
                Login
            </h3>
            <div class="ks-form">
                <input type="text" placeholder="Username" class="ks-form__input">
                <input type="text" placeholder="Password" class="ks-form__input">
                <button class="ks-form__btn">Login</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Login',
    data() {
        return {
            
        }
    },
}
</script>
<style lang="scss">
    @import "../../assets/scss/main";
    @import "../../assets/scss/form";
    input::-webkit-input-placeholder { 
        color: #000; 
    }
</style>