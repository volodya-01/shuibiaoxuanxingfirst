<template>
   <div class="to">
            <div class="fir">水表水量数据</div>
            <ul class="two">
                <li class="gs" id="gssm" @click="gssm" :style="{borderBottom:border-bottom}">格式说明</li>
                <li @click="sldata" id="sldata" :style="{borderBottom:border-bottom}">水量数据</li>
            </ul>
           <top-geshism v-show="a"></top-geshism>
           <top-sldata v-show="b"></top-sldata>
          
   </div>
      
</template>
<script>
import TopGeshism from '@/tool/geshism'
import TopSldata from '@/tool/sldata'
export default {
  name: "ContenttopOne",
  components:{
    TopGeshism,
    TopSldata
  },
  data(){
   return{
    a:true,
    borderBottom:"#548ff6"
   }
  },
   methods:{
  sldata:function(){
     /*  alert("跳到水里数据组件") */
      document.getElementById("sldata").style.borderBottom="2px #548ff6 solid"
     document.getElementById("sldata").style.color="#548ff6"
      document.getElementById("gssm").style.color="#6e7b8b"
        document.getElementById("gssm").style.borderBottom="#fff"
if(this.b==false||this.a==true){
  this.b=true
  this.a=false
}else{
  this.b=true
  
}
    },
    gssm:function(){
         document.getElementById("gssm").style.borderBottom="2px #548ff6 solid"
        document.getElementById("sldata").style.borderBottom="#fff"
      document.getElementById("sldata").style.color="#6e7b8b"
      document.getElementById("gssm").style.color="#548ff6"
      if(this.a==false||this.b==true){
        this.a=true
        this.b=false
      }else{
        this.a=true
      }
    }
    //上传水表数据
    
   }  
};
</script>
<style scoped>
.to{
    display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content:center;
  flex-direction: column;
  background-color: #fff;

}
.fir {
  font-family: "微软雅黑";
  font-weight: bold;
  font-size: 18px;
  color: #548ff6;
  margin-top: 20px;
  margin-left: 20px;
}
.two {
  list-style: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  /* justify-content: space-around; */
  flex-direction: row;
  font-family: "微软雅黑";
  /* font-weight: bold; */
  font-size: 14px;
  color: #6e7b8b;
  margin-top: 20px;
  margin-left: 20px;
  border-bottom: 1px #eef0f2 solid;
}
.two > li {
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}
.gs {
  margin-right: 20px;
  color: #548ff6;
  border-bottom: 2px #548ff6 solid;
}

</style>


