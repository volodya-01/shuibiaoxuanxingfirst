<template>
  <div class="demo">
    <!-- 成功引入的三种方法： -->
    <!-- 图1 -->
    <div class="img1"></div>
    <!-- 图2 -->
    <div class="img2" :style="{backgroundImage: 'url(' + bg2 + ')' }"></div>
    <!-- 图3 -->
    <img src="~@/../static/images/logo3.png" width="100">
  </div>
</template>

<script>
import Bg2 from '@/../static/images/logo2.png'

export default {
    name: 'App',
    data () {
        return {
            bg2: Bg2,
        }
    }
}
</script>

<style>
    .demo{width: 100px;margin: 50px auto;}
    .img1{
        width: 100px;
        height: 100px;
        background: url('~@/../static/images/logo1.png') center center no-repeat;
        background-size: 100px auto;
    }
    .img2{
        width: 100px;
        height: 100px;
        background-position: center center;
        background-repeat:  no-repeat;
        background-size: 100px auto;
    }
</style>