<template>
    <div class="xinpin">
      <div class="gg" id="xp">新品发布</div>
       <ul class="lis">
        <li>云计量平台将于本月底正式发布</li>
        <li>度量云平台将于8月底正式发布</li>
       <li>度量云平台将于8月底正式发布</li>
       <li>云计量平台将于本月底正式发布</li>
      
     </ul>
    <div class="more" id="mor">更多</div>
    </div>
</template>
<script>
export default {
  name: "MainrightXinpin"
};
</script>
<style lang="scss" scoped>
.xinpin {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
justify-content: flex-start;
align-items: center;
  height: 180px;
  background-color: #fff;
  margin-top: 20px;
}
#xp{
  padding-left: 20px;
}
#mor{
padding-left: 20px;
}
.gg{
 margin-left: 80px;
    font-family:'微软雅黑';
    font-weight: 900;
    font-size: 14px;
    color: #787883;
   min-width: 2.8rem;
    padding-top: 5px;
    padding-bottom: 5px;
    cursor: pointer;
  }
  .lis{
    margin-left: -10px;
  }
  .lis>li{
     display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
justify-content: center;
/* align-items: center; */
    list-style: none;
     font: 900 '微软雅黑';
    font-size: 12px;
    color: #aeaeae;
  padding-bottom: 10px;
    cursor: pointer;
  }
   .more{
   font: 14px 900 '微软雅黑';
    color: #548ff6;
    cursor: pointer;
      padding-top: 5px;
      margin-left: -180px;
   }
</style>
