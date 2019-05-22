<template>
    <div class="page-changeCity">
        <el-row>
            <m-province />
        </el-row>
        <el-row>
            <hot-city title="热门城市:" :list="hotList"/>
        </el-row>
        <el-row>
            <hot-city title="最近访问:" :list="rencentList"/>
        </el-row>
        <el-row>
            <categroy />
        </el-row>
    </div>
</template>
<script>
import MProvince from '@/components/changeCity/province.vue';//引入按省份选择组件
import HotCity from '@/components/changeCity/hot.vue';//引入热门城市组件
import Categroy from '@/components/changeCity/categroy.vue';//引入按拼音首字母选择的组件
import api from '@/api/index.js'
export default {
    data() {
        return {
            hotList: [],//传递给hot-city组件,热门城市
            rencentList: [],
        }
    },
    created() {
        api.getHotCity().then(res => {
            // console.log(res)
            this.hotList = res.data.data
        }),
        api.getRecentCity().then(res => {
            // console.log(res)
            this.rencentList = res.data.data
        })
    },
    components: {
        MProvince,
        HotCity,
        Categroy
    }
}
</script>
<style lang="scss">

</style>


