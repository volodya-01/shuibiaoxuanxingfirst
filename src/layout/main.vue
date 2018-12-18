<template>
    <div class="main">
        <div class="mainleft">
           <main-lefticon></main-lefticon>
           <main-leftbody></main-leftbody>
           <main-contentcustom></main-contentcustom>
        </div>
        <div class="mainright">
            <mainright-notice></mainright-notice>
            <mainright-news></mainright-news>
            <mainright-xinpin></mainright-xinpin>
           <mainright-contentcustom></mainright-contentcustom>
        </div>
         
    </div>
</template>
<script>
import MainLefticon from "@/pages/component/mainlefticon";
import MainLeftbody from "@/pages/component/mainleftbody";
import MainContentcustom from "@/pages/component/maincontentcustom";
import MainrightNotice from "@/pages/component/mainright/notice"
import MainrightNews from "@/pages/component/mainright/news"
import MainrightXinpin from "@/pages/component/mainright/xinpin"
import MainrightContentcustom from "@/pages/component/mainright/contentcustom"
export default {
  name: "HomeMain",
  components: {
    MainLefticon,
    MainLeftbody,
    MainContentcustom,
    MainrightNotice,
    MainrightNews,
    MainrightXinpin,
    MainrightContentcustom
  }
};
</script>
<style lang="scss" scoped>
.main {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
/*   align-items: center; */
  width: 87.5%;
  min-width: 10.24rem;
  margin: 0 auto;
  margin-top: 0.2rem;
/*   background-color: yellow; */
/* background-color: #fff; */
}
.mainleft {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
/*   align-items: center; */
  width: 79.761905%;
  /* min-width: 10rem; */
/*   background-color: pink; */
background-color: #fff;
flex-direction: column
}
.mainright {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  /* justify-content:space-between; */
/*   align-items: center; */
  width: 19.047619%;
  /* min-width: 10rem; */
 /*  background-color: plum; */
}
</style>


