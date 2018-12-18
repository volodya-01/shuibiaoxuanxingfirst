<template>
    <div class="maincontentcustom"> 
      <div class="maincontentcustom-content">内容定制</div>
    </div>
</template>
<script>
export default {
    name:"MianContentcustom"
}
</script>
<style lang="scss" scoped>
.maincontentcustom{
    display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
/*   justify-content: space-between;
  align-items: center; */
  background:#f2f2f3;
height: 86px;
   /* margin: 0px 32px 0 32px; */
}
.maincontentcustom-content{
    height: 48px;
    font: 12px "微软雅黑";
    color: #a1a2a3;
    background-color:#fff;
    line-height: 48px;
    text-align: center;
    flex-grow: 1;
    margin-top: 20px;
}
</style>


