<template>
  <div class="layout-default">
    <el-container>
      <!-- 设置宽度为空或者100% 取消header的默认高度6px -->
      <el-header height="">
          <header-page />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer height="">
        <footer-page />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import headerPage from '@/components/header/index.vue'//引入header头部组件
import footerPage from '@/components/footer/index.vue'//引入footer底部组件
export default {
  components: {
    headerPage,
    footerPage
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/public/layout.scss'
</style>
