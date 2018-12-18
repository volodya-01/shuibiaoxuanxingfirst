<template>
    <div class="mainleftbody">
       <leftbody-gsgk></leftbody-gsgk>
        <leftbody-gsyxdata></leftbody-gsyxdata>
          <leftbody-yyjkf></leftbody-yyjkf>
          <leftbody-ycbj></leftbody-ycbj>
         <leftbody-gdxx></leftbody-gdxx>
          <!-- <div>this is mainleftbody7</div> -->
                  
    </div>
</template>
<script>
import LeftbodyGsgk from '@/pages/component/mainleftbody/gsgk'
import LeftbodyGsyxdata from '@/pages/component/mainleftbody/gsyxdata'
import LeftbodyYyjkf from '@/pages/component/mainleftbody/yyjkf'
import LeftbodyYcbj from '@/pages/component/mainleftbody/ycbj'
import LeftbodyGdxx from '@/pages/component/mainleftbody/gdxx'
export default {
    name:"MainLeftbody",
    components:{
        LeftbodyGsgk,
        LeftbodyGsyxdata,
        LeftbodyYyjkf,
        LeftbodyYcbj,
        LeftbodyGdxx
    }
}
</script>
<style lang="scss" scoped>
.mainleftbody{
display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
 /*  align-items: center; */
/*   background: rgb(84, 112, 20); */
background-color: #fff;
flex-direction: column;
   margin: 0px 32px 0 32px;
}
</style>


