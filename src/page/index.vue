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
                <m-container :nav="iStyle"/>
            </el-col>
            <el-col :span="24">
                <m-container :nav="recomment"/>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import mMenu from '@/components/index/menu.vue'//引入左边菜单栏组件
import mLife from '@/components/index/life.vue'//引入右边生活区组件
import mContainer from '@/components/index/container.vue'//引入container展示区域组件
export default {
    data() {
        return {
            iStyle: {//传递给每个<m-container />组件的信息,用于渲染不同的组件信息和展示不同的标签
                title: '有格调',
                class: 'iStyle',//判断传入不同的组件来改变样式,从而展示不同的界面样式
                list: [
                    {
                        text: '全部',
                        tab: 'all'
                    },
                    {
                        text: '约会聚餐',
                        tab: 'food'
                    },
                    {
                        text: '丽人SPA',
                        tab: 'spa'
                    },
                    {
                        text: '电影演出',
                        tab: 'movie'
                    },
                    {
                        text: '品质出游',
                        tab: 'travel'
                    }
                ]
            },
            recomment:{//另一个<m-container />组件的信息  很优惠
                title: '很优惠',
                class: 'youhui',
                list: [
                    {
                        text: '全部',
                        tab: 'all'
                    },
                    {
                        text: '美食',
                        tab: 'food'
                    },
                    {
                        text: '休闲',
                        tab: 'xiuxian'
                    }
                ]
            }
        }
    },
    components : {
        mMenu,
        mLife,
        mContainer
    }
}
</script>
<style lang="scss">
@import '@/assets/css/index/index.scss';//引入样式 该样式是首页页面的样式
@import '@/assets/css/index/life.scss';//引入样式 该样式是首页右侧生活的样式
@import '@/assets/css/index/artistic.scss';//引入样式 该样式是container展示区的样式
</style>


