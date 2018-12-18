<template>
    <div class="dow">
        <div class="fir">水表型号数据</div>
            <ul class="two tabs">
               <li class="li-tab gs" v-for="(item,index) in tabsParam" :key="item.id"
            @click="toggleTabs(index)"
            :class="{active:index===nowIndex}">{{item}}
      </li>
                <!-- <li class="gs" @click="one" id="gs">格式说明</li>
                <li class="yh" @click="two" id="yhdata">用户水表库</li>
                <li @click="three" id="xt">系统水表库</li>
                <li @click="four" id="yhxt">用户系统水表叠加库</li> -->
            </ul>
            <down-dgeshism v-show="nowIndex===0"></down-dgeshism>
            <down-yhsbk v-show="nowIndex===1"></down-yhsbk>
            <down-xtsbk v-show="nowIndex===2"></down-xtsbk>
            <down-djyhxtsb v-show="nowIndex===3"></down-djyhxtsb>
    </div>
</template>
<script>
import DownDgeshism from "@/tool/dgeshism";
import DownYhsbk from "@/tool/yhsbk";
import DownXtsbk from "@/tool/xtsbk";
import DownDjyhxtsb from '@/tool/djyhxtsb'
export default {
  name: "ContentdownOne",
  data() {
    return {
      tabsParam:['格式说明','用户水表库','系统水表库','用户系统水表叠加库'],
                nowIndex:0,
                isShow:false,
    };
  },
  methods: {
     //切换tab项
             toggleTabs(index){
   
                 this.nowIndex = index;
                 $(window).resize();
              
            },
    one: function() {
      /* alert("123") */
        document.getElementById("gs").style.borderBottom="2px #548ff6 solid"
        document.getElementById("yhdata").style.borderBottom="#fff"
      document.getElementById("yhdata").style.color="#6e7b8b"
      document.getElementById("gs").style.color="#548ff6"
       document.getElementById("xt").style.color="#6e7b8b"
        document.getElementById("xt").style.borderBottom="#fff"
          document.getElementById("yhxt").style.color="#6e7b8b"
        document.getElementById("yhxt").style.borderBottom="#fff"
      if (this.aa == false || this.bb == true) {
        this.aa = true
        this.bb == false
      } else {
        this.aa = true
      }
    },
    two: function() {
      /* alert("123456") */
       document.getElementById("yhdata").style.borderBottom="2px #548ff6 solid"
     document.getElementById("yhdata").style.color="#548ff6"
      document.getElementById("gs").style.color="#6e7b8b"
        document.getElementById("gs").style.borderBottom="#fff"
         document.getElementById("xt").style.color="#6e7b8b"
        document.getElementById("xt").style.borderBottom="#fff"
          document.getElementById("yhxt").style.color="#6e7b8b"
        document.getElementById("yhxt").style.borderBottom="#fff"
      if (this.bb == false || this.aa == true) {
        this.bb = true
        this.aa == false
      } else {
        this.b = true
      }
    },
     three: function() {
      /* alert("123456") */
       document.getElementById("xt").style.borderBottom="2px #548ff6 solid"
     document.getElementById("xt").style.color="#548ff6"
      document.getElementById("yhdata").style.color="#6e7b8b"
        document.getElementById("yhdata").style.borderBottom="#fff"
      document.getElementById("gs").style.color="#6e7b8b"
        document.getElementById("gs").style.borderBottom="#fff"
       document.getElementById("yhxt").style.color="#6e7b8b"
        document.getElementById("yhxt").style.borderBottom="#fff"
    },
    four: function() {
      /* alert("123456") */
       document.getElementById("yhxt").style.borderBottom="2px #548ff6 solid"
     document.getElementById("yhxt").style.color="#548ff6"
      document.getElementById("yhdata").style.color="#6e7b8b"
        document.getElementById("yhdata").style.borderBottom="#fff"
      document.getElementById("gs").style.color="#6e7b8b"
        document.getElementById("gs").style.borderBottom="#fff"
        document.getElementById("xt").style.color="#6e7b8b"
        document.getElementById("xt").style.borderBottom="#fff"
      
    }
  },
  components: {
    DownDgeshism,
    DownYhsbk,
    DownXtsbk,
    DownDjyhxtsb
  }
};
</script>
<style scoped>
.dow {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  /* justify-content: space-around; */
  flex-direction: column;
  height: 100%;
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
 /*  color: #548ff6;
  border-bottom: 2px #548ff6 solid; */
}

.yh {
  margin-right: 20px;
}
#yhxt {
  margin-left: 20px;
}
.active{
  color:#548ff6;
   border-bottom: 2px #548ff6 solid;
}
</style>


