<template>
    <div class="m-header">
        <el-row>
            <top-bar />
        </el-row>
        <el-row>
            <search-bar />
        </el-row>
    </div>
</template>
<script>
import topBar from '@/components/header/topBar.vue'
import searchBar from '@/components/header/searchBar.vue'
export default {
  components: {
    topBar,
    searchBar
  }
}
</script>
<style lang="scss">
@import '@/assets/css/public/header/index.scss'//该index样式是头部输出模板index.vue的样式
</style>
