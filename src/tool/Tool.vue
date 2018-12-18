<template>
    <div class="tool">
        <tool-header></tool-header>
        <tool-content></tool-content>
        <tool-footer></tool-footer>
    </div>
</template>
<script>
import ToolHeader from '@/tool/header'
import ToolContent from '@/tool/content'
import ToolFooter from '@/tool/footer'
export default {
    name:"Tool",
    components:{
        ToolHeader,
        ToolContent,
        ToolFooter
    }

}
</script>
<style scoped>
.tool{
    color: #eef0f2;
}
</style>


