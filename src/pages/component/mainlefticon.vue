<template>
    <div class="mainlefticon">
       
            <ul class="rowfont">
              <li><img src="../../assets/images/icon_water_42.png" alt=""></li>
              <li><img src="../../assets/images/icon_water_43.png" alt=""></li>
              <li><img src="../../assets/images/icon_water_44.png" alt=""></li>
              <li><img src="../../assets/images/icon_water_45.png" alt=""></li>
              <li><img src="../../assets/images/icon_water_46.png" alt=""></li>
              <li><img src="../../assets/images/icon_water_47.png" alt=""></li>
              <li><img src="../../assets/images/icon_water_48.png" alt=""></li>
            </ul>
      
            <ul class="rowicon">
              <li>智慧调度平台</li>
              <li>供水管网GIS</li>
              <li>管网巡检系统</li>
              <li>客服热线系统</li>
              <li>分区计量系统</li>
              <li>水力模型系统</li>
              <li>KBI绩效管理</li>
            </ul>
    </div>
</template>
<script>
export default {
  name: "MainLefticon"
};
</script>
<style lang="scss" scoped>
.mainlefticon {
  height: 1.8rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
/*   align-items: center; */
  /* background: salmon; */
  background-color: #fff;
flex-direction: column;
  margin: 0px 32px 0 32px;
  border-bottom: 1px #acb3ba solid;
}
.rowfont{
    list-style: none;
    display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-around;
  align-items: center; 
/*   background-color: rgb(7, 77, 72); */
  flex-direction: row;
  cursor: pointer;
}
.rowicon{
    list-style: none;
    display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-around;
  align-items: center; 
/*   background-color: blue; */
  flex-direction: row;
  margin-top: 24px;
}
.rowicon>li{
  font-family:"微软雅黑";
  font-size: 14px;
  font-weight: bold;
  color: #32383f;
  cursor: pointer;
}
</style>


