<template>
        <div class="header">
            <div class="itemleft item">
              <span><img src="../assets/images/icon_water_09.png" alt=""></span>
              <span>智慧水务综合管理平台</span>
            </div>
            <div class="itemmodle item">
              <ul>
                <li class="gsxt">
                 <img src="../assets/images/icon_water_03.png" alt="">
                 供水系统
                </li>
                 <li class="psxt">
                  <img src="../assets/images/icon_water_06.png" alt="">
                排水系统
                </li>
              </ul>
            </div>
            <div class="itemright item">
              <ul>
                <li class="mes">
                  <span class="num"></span>
                  消息
                </li>
                <li>
                 <img class="pic" src="../assets/images/icon_yunjiliang_35.png" alt="">
                 张丽君
                </li>
                <li>
                  <span class="exit"></span>
              
                </li>
              </ul>
            </div>
       </div>
</template>
<script>
export default {
  name: "HomeHeader"
};
</script>
<style lang="scss" scoped>
.header {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.8rem;
  width: 100%;
  min-width: 10.24rem;
  background-color: #fff;
}
.itemleft {
  margin-left: 0.5rem;
  flex-grow: 1;
}
.itemleft > span {
  font-size: 18px;
  font-weight: bold;
  font-family: "微软雅黑";
  color: #548ff6;
  margin-right: 0.15rem;
  line-height: 0.8rem;
}
.itemleft > span > img {
  position: relative;
  top: 5px;
}
.itemmodle {
  flex-grow: 9;
}
.itemmodle > ul {
  list-style: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  justify-content: flex-start;
  display: flex;
}
.itemmodle > ul > li {
  font-size: 14px;
  font-family: "微软雅黑";
  font-weight: bold;
  margin-right: 0.5rem;
  height: 0.8rem;
  width: 0.8rem;
  line-height: 0.8rem;
  cursor: pointer;
}
.gsxt {
  color: #548ff6;
  border-bottom: 2px #548ff6 solid;
}
.psxt {
  color: #32383f;
}
.itemmodle > ul > li > img {
  position: relative;
  top: 2px;
  margin-right: 2px;
}
.itemright {
  flex-grow: 1;
  margin-right: 0.4rem;
}
.itemright > ul {
  list-style: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  justify-content: space-between;
  display: flex;
}
.itemright > ul > li {
  font-size: 14px;
  font-family: "微软雅黑";
  font-weight: bold;
  line-height: 0.8rem;
  cursor: pointer;
}
.num {
  font-size: 14px;
  font-family: "微软雅黑";
  font-weight: bold;
  color: #000;
}
.mes{
margin-top: -15px;
}
.num::before {
  display: block;
  content: "15";
  width: 25px;
  height: 15px;
  color: #fff;
  line-height: 15px;
  text-align: center;
  position:relative;
  top: 48px;
  right: 32px;
  background-color: #548ff6;
  border-radius: 2px;
}
.pic{
 position: relative;
 top: 2px;
 right: 5px;
}
.exit::before {
  display: block;
  content: "退出";
  width: 130px;
  height: 36px;
  color: #fff;
  line-height: 36px;
  text-align: center;
  position: relative;
  top: 20px;
  
  background-color: #548ff6;
  border-radius: 2px;
}
</style>

