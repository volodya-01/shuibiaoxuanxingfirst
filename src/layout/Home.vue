<template>
    <div class="home">
        <home-header></home-header>
        <home-levelbar></home-levelbar>
        <home-main></home-main>
        <home-footer></home-footer>
    </div>
</template>
<script>
import HomeHeader from '@/layout/header'
import HomeLevelbar from '@/layout/levelbar'
import HomeMain from '@/layout/main'
import HomeFooter from '@/layout/footer'
export default {
    name:"Home",
    components:{
        HomeHeader,
        HomeLevelbar,
        HomeMain,
        HomeFooter
    }
}
</script>
<style lang="scss" scoped>
.home{
   /*  background-color: aqua; */
     background-color: #f2f2f3;
    width: 100%;
    min-width: 10.24rem;
}
</style>

