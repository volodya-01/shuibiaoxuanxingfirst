<template>
  <div class="gsgk">
     <div class="partone"> 供水运行数据</div>
     <ul class="gsgklist">
       <li class="gswlength">水量运行数据</li>
       <li class="daywatersum">管网运行数据</li>
       <li class="biaosum">产销差数据</li>
     </ul>
   <div class="content">
         <div class="befor-left">
             <div class="toplist">
                  <div class="num">9654215 <span>异常</span></div>
                 <div class="newsum">当前供水总量/m3</div>
                  <div class="weilai">未来24小时水量<span class="tuchu">2654</span>m3</div>
                <div class="bilei">
                  <img class="img1" src="@/assets/images/tbi.png" alt="">
                  <img class="img2" src="@/assets/images/hbi.png" alt="">
                </div>
             </div>
            <div class="toplist">
                  <div class="num2">654215 </div>
                 <div class="newsum">供水总耗电量/kwh</div>
                  <div class="weilai">供水总单耗<span class="tuchu">2654</span>m3</div>
                <div class="bilei">
                  <img class="img1" src="@/assets/images/tbi.png" alt="">
                  <img class="img2" src="@/assets/images/hbi.png" alt="">
                </div>
             </div>
        </div> 
       <div class="befor-right">
         <img src="@/assets/images/首页01_b.png" alt="">
      </div>
   </div>
  </div>
</template>

<script>
export default {
  name: "LeftbodyGsyxdata"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.gsgk {
  margin-top: 72px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background: #fff;
}
.partone {
  font: 30px "微软雅黑";
  font-weight: 900;
  color: #32383f;
  font-weight: 900;
}
.gsgklist {
  list-style: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  margin-top: 6px;
  border-bottom: 1px #bbbfc5 solid;
  height: 60px;
}
.gsgklist > li {
  height: 60px;
  line-height: 60px;
  margin-right: 40px;
}
.gswlength {
  font: 14px "微软雅黑";
  color: #32383f;
  border-bottom: 2px #000 solid;
}
.daywatersum {
  font: 14px "微软雅黑";
  color: #bbbfc5;
}
.biaosum {
  font: 14px "微软雅黑";
  color: #bbbfc5;
}
.content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.toplist{
  margin-top: 60px;
    display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background: #fff;
}
.num{
        font: 900 24px "微软雅黑";
        color: red;
        margin-top:8px;
       

    }
    .num>span{
         font: 900 14px "微软雅黑";
        color: red;
        margin-top:8px;
       
    }
    .tuchu{
        color: #32383f;
        margin: 0 5px 0 5px;
        font-weight: 900;
    }
    .newsum{
         font:  14px "微软雅黑";
        color: #c2c8cc;
        margin-top:8px;
       
    }
    .weilai{
         font:  14px "微软雅黑";
        color: #c2c8cc;
        margin-top:8px;
       
    }
.bilei {
  font: 900 12px "微软雅黑";
  color: #fff;
  margin-top: 15px;
  /*  margin-left: 20px; */
}
.one {
  margin-left: 5px;
}
.two {
  margin-left: 8px;
}
.three {
  margin-left: 23px;
}
.four {
  margin-left: 45px;
}

.img1 {
  margin: 2px 0px 0px 0px;
}
.img2 {
  margin: 2px 0px 0px 0px;
}
.meslist {
  margin-top: 50px;
    display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background: #fff;
  /*  margin-left: -20px; */
}
.meslist > li {
  list-style: none;
  margin-top: 10px;
}
.meslist > li > span {
  font: 900 14px "微软雅黑";
  margin-right: 45px;
}
.samecolor {
  color: #c2c8cc;
}
.befor-right{
  margin-top: 5px;
   margin-top: 50px;
    display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
 .num2{
        font: 900 24px "微软雅黑";
        color: #000;
      

    }
</style>
