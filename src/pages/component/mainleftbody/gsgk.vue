<template>
  <div class="gsgk">
     <div class="partone"> 供水概况</div>
     <ul class="gsgklist">
       <li class="gswlength">供水管网总长度</li>
       <li class="daywatersum">日供水总量</li>
       <li class="biaosum">水表总数</li>
     </ul>
   <div class="content">
         <div class="befor-left">
             <div class="toplist">
                  <div class="num">654892</div>
                 <div class="sumlength">供水管网总长度/m</div>
                <div class="bilei">
                  <img class="img1" src="@/assets/images/tbi.png" alt="">
                  <img class="img2" src="@/assets/images/hbi.png" alt="">
                </div>
             </div>
            <ul class="meslist">
              <li>
                  <span class="samecolor">DN100以下</span>
                  <span class="one">64621</span>
              </li>
              <li>
                  <span class="samecolor">DN100-300</span>
                  <span class="two">2654</span>
              </li>
              <li>
                  <span class="samecolor">300-500</span>
                  <span class="three">45156</span>
              </li>
              <li>
                  <span class="samecolor">500以上</span>
                  <span class="four">651</span>
              </li>
          </ul>
        </div> 
       <div class="befor-right">
         <img src="@/assets/images/首页01_a.png" alt="">
      </div>
   </div>
  </div>
</template>

<script>
export default {
  name: "LeftbodyGsgk"
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
.num {
  font: 900 24px "微软雅黑";
  color: #32383f;
  /*   margin-top:5px; */
  /*   margin-left: 20px; */
}
.sumlength {
  font: 900 14px "微软雅黑";
  color: #c2c8cc;
  margin-top: 5px;
  /*  margin-left: 20px; */
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
</style>
