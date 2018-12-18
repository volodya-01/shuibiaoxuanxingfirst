<template>
    <div>
         <ul class="bot">
               <li class="bot1"></li>
               <li class="bot2">
                   <div class="bot2-top">请上传用户水表型号数据</div>
                   <div class="bot2-down">仅支持上传xls格式的数据</div>
               </li>
               <li class="bot3" @click="upyh"><span class="iconfont icon-shangchuan"></span> 上传水表数据</li>
            </ul>
    </div>
</template>
<script>
export default {
    name:"DownYhsbk",
    methods:{
        upyh:function(){
            alert("上传用户水表型号数据")
        }
    }
    
}
</script>

<style scoped>
.bot {
  list-style: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-grow: 9;
  margin-top: 5%;
  margin-bottom: 5%;
margin-right: 80px;
}

.bot2 {
  list-style: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  font-family: "微软雅黑";
  font-size: 18px;
  text-align: left;
  color: #6e7b8b;
  position: relative;

}
.bot2::before {
  content: url("~@/assets/img/01-大用户水表选型_未上传_03.png");
  position: absolute;
  right: 180px;
}
.bot2 > div {
  display: inline-block;
}
.bot2-top {
  font-family: "微软雅黑";
  font-size: 14px;
  color: #548ff6;
  margin-bottom: 10px;
}
.bot2-down {
  font-family: "微软雅黑";
  font-size: 12px;
  color: #6e7b8b;
  margin-bottom: 20px;
  margin-left: -15px;
}

.bot3 {
  width: 165px;
  height: 42px;
  line-height: 42px;
  font-family: "微软雅黑";
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  text-align: center;
  background-color: #548ff6;
  border-radius: 2px;
  cursor: pointer;
}
.bot3 > span {
  margin-right: 8px;
}
</style>

