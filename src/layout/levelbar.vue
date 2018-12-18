<template>
    <div class="levelbar">
        <div class="leverbarleft">松阳区吴淞路阀御街发生漏水松阳区吴淞路阀御街发生漏水松阳区吴淞路阀御街发生漏水</div>
        <div class="leverbarright">
             <span class="re1"></span>
             <span class="re2"></span>
        </div>
    </div>
</template>
<script>
export default {
  name: "HomeLevelbar"
};
</script>
<style lang="scss" scoped>
.levelbar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.6rem;
  width: 87.5%;
  min-width: 10.24rem;
  margin: 0 auto;
  margin-top: 0.2rem;
  background: #bbdefa;
}
.leverbarleft {
  color: #0a0b0d;
  font: 14px "微软雅黑";
  font-weight: 900;
  line-height: 60px;
  margin-left: 52px;
}
.leverbarleft::before {
  content: url(~@/assets/images/icon_yunjiliang_51.png);
  position: relative;
  top: 5px;
  left: -15px;
}
.leverbarright{
    margin-right: 20px;
}
.re1::before{
   content: url("~@/assets/images/icon_yunjiliang_54.png");
   margin-right: 15px;

 }
  .re1::after{
   content: url("~@/assets/images/icon_yunjiliang_56.png");
   margin-right: 25px; 
 }
  .re2::before{
   content: url("~@/assets/images/icon_yunjiliang_58.png");


 }
</style>

