<template>
    <div class="footer">
        <div class="left" @click="clear">清空列表</div>
        <div class="right" @click="slect">水表选型</div>
    </div>
</template>
<script>
export default {
  name: "ToolFooter",
  methods:{
    clear:function(){
      alert("清空列表")
    },
    slect:function(){
     alert("水表选型")
    }
  }
};
</script>
<style scoped>
.footer {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  /*  background-color: aqua; */
  background-color: #fff;
}
.left {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 135px;
  height: 40px;
  color: #768292;
  font-family: "微软雅黑";
  font-weight: bold;
  font-size: 14px;
  margin-left: 30px;
  border-radius: 2px;
  background-color: #e7eaee;
  cursor: pointer;
}
.right {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 135px;
  height: 40px;
  color: #fff;
  font-family: "微软雅黑";
  font-weight: bold;
  font-size: 14px;
  margin-right: 30px;
  border-radius: 2px;
  background-color: #548ff6;
  cursor: pointer;
}
</style>

