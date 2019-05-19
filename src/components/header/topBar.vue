<template>
  <div class="m-header m-header-topbar">
    <el-col :span="10">
      <geo />
    </el-col>
    <el-col :span="14">
      <navv />
    </el-col>
  </div>
</template>
<script>
import geo from './geo.vue'
import navv from './navv.vue'
export default {
components : {
  geo,
  navv
}
}
</script>

<style lang="scss">
  // @import '@/assets/css/public/header/topbar.scss'
</style>


