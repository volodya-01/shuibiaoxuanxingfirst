<template>
    <div class="content" :style="{minHeight:minHeight+'px'}">
       <div class="top" :style="{minHeight:lowHeight+'px'}">
            <contenttop-one></contenttop-one>
           
       </div>
        <div class="down" :style="{minHeight:lowHeight+'px'}">
          <contentdown-one></contentdown-one>
        </div>
    </div>
</template>
<script>
import ContenttopOne from "@/tool/contenttopone";
import ContentdownOne from "@/tool/contentdownOne";
export default {
  name: "ToolContent",
  components: {
    ContenttopOne,
    ContentdownOne
  },
  data() {
    return {
      minHeight: 0,
      lowHeight: 0,
    };
  },
  mounted() {
    this.minHeight = document.documentElement.clientHeight - 128;
    console.log(this.minHeight);
    this.lowHeight = (document.documentElement.clientHeight - 188) / 2;
    console.log(this.lowHeight);
    var that = this;
    window.onresize = function() {
      that.minHeight = document.documentElement.clientHeight - 128;
      that.lowHeight = (document.documentElement.clientHeight - 188) / 2;
      console.log(this.lowHeight);
    };
  }
};
</script>
<style scoped>
.content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  /* justify-content: space-around; */
  flex-direction: column;
  /*  align-items: center; */
  background-color: #eef0f2;
}
.top {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  /* justify-content: space-around; */
  flex-direction: column;
  height: 100%;
  background-color: #fff;
  margin: 20px 20px 0 20px;
}

.down {
  height: 100%;
  background-color: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  /* justify-content: space-around; */
  flex-direction: column;
  height: 100%;
  background-color: #fff;
  margin: 20px 20px 0 20px;
}
</style>


