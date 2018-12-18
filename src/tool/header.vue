<template>
    <div class="header">
            <div class="left">大用户水表选型</div>
            <ul class="right">
             <li class="iconfont icon-shezhi"></li>
             <li class="iconfont icon-ren"></li>
             <li class="three">钟云飞</li>
             <li class="iconfont icon-xiala"></li>
            </ul>
    </div>
</template>
<script>
export default {
  name: "ToolHeader"
};
</script>
<style scoped>
.header {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  background-color: #6e7b8b;
}
.left {
  font-family: "微软雅黑";
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  margin-left: 20px;
  flex-grow: 2;
  flex-shrink: 2;
}
.right {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  list-style: none;
  margin-right: 20px;
}

.icon-shezhi{
 margin-right: 20px;
 margin-top: 3px;
 width: 14px;
 height: 14px;
}
.icon-ren{
margin-right: 8px;
 margin-top: 3px;
 width: 14px;
 height: 14px;
}
.three{
   font-family: "微软雅黑";
  font-weight: bold;
  font-size: 14px;
  color: #fff; 
  margin-right: 8px;
}
.icon-xiala{
     margin-top: 3px;
     width: 14px;
 height: 14px;
}
</style>


