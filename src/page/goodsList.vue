<template>
    <div class="page-product">
        <el-row>
            <crumbs />
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <categroy />
                </el-row>
                <el-row>
                    <list />
                </el-row>
            </el-col>
            <el-col :span="5">
                fav + map
            </el-col>
        </el-row>
    </div>
</template>
<script>
import crumbs from '@/components/products/crumbs.vue'//引入面包屑组件
import categroy from '@/components/products/categroy.vue'//引入分类和区域的组件
import list from '@/components/products/list.vue'//引入展示商品列表的组件
export default {
    components: {
        crumbs,
        categroy,
        list
    }
}
</script>
<style lang="scss">
@import '@/assets/css/products/index.scss';
</style>

