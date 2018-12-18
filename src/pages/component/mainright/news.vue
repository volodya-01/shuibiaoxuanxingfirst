<template>
    <div class="news">
      <div class="gg">新闻</div>
       <ul class="lis">
       <li>【升级】7月27日新BGP高防升级通知</li>
       <li>【升级】7月27日新BGP高防升级通知</li>
       <li>【升级】7月26日云盾高防升级通知</li>
          <li>【升级】7月26日云盾高防升级通知</li>
          <li>【升级】7月27日新BGP高防升级通知</li>
       <li>【升级】7月27日新BGP高防升级通知</li>
       <li>【升级】7月26日云盾高防升级通知</li>
          <li>【升级】7月26日云盾高防升级通知</li>
          <li>【升级】7月27日新BGP高防升级通知</li>
      
          <li>【升级】7月26日云盾高防升级通知</li>
      
     </ul>
    <div class="more">更多</div>
    </div>
</template>
<script>
export default {
  name: "MainrightNews"
};
</script>
<style lang="scss" scoped>
.news {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
justify-content: flex-start;
align-items: center;
  height: 340px;
  background-color: #fff;
  margin-top: 20px;
}
.gg{
 margin-left: 90px;
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
