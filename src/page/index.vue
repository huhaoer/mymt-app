<template>
    <div class="page-index">
        <el-row>
            <el-col :span="5">
                <m-menu />
            </el-col>
            <el-col :span="19">
                <m-life />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                container
            </el-col>
        </el-row>
    </div>
</template>
<script>
import mMenu from '@/components/index/menu.vue'//引入左边菜单栏组件
import mLife from '@/components/index/life.vue'//引入右边生活区组件
export default {
    components : {
        mMenu,
        mLife
    }
}
</script>
<style lang="scss">
@import '@/assets/css/index/index.scss';//引入样式 该样式是首页页面的样式
@import '@/assets/css/index/life.scss';//引入样式 该样式是首页页面的样式
</style>


