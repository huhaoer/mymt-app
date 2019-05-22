<template>
  <div>
    <span class="name">按省份选择:</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProcince"
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
    />
    <span>直接搜索:</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入城市中文或拼音"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>
<script>
import MSelect from "./select.vue";
import api from '@/api/index.js'
export default {
  data() {
    return {
      provinceList: ["山东", "甘肃", "江苏", "北京", "云南"], //传递给select.vue组件 省份数据
      province: "省份", //绑定传入到select页面的选择框的省份数据
      cityList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"], //传递给selecr.vue 城市的数据
      city: "城市", //绑定城市的数据
      provinceActive: false, //判断省份是否展示
      cityActive: false, //判断城市是否展示
      searchWord: "", //用于上面搜索数据的双向绑定
      searchList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"], //在搜索框中搜索的成城市,动态渲染
      loading: false //是否正在从远程获取数据
    };
  },
  components: {
    MSelect
  },
  methods: {
    // 子组件传递该方法和参数  当点击wrapper时传递change_active方法和参数true  点击其中一个组件时,传递展示active,另一个组件传递不展示active
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    // 子组件传递该方法和参数  当点击城市时为false出现,那么城市的showWrapperActive就为true
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    // 在el-select身上远程搜索为一个函数  参数为当前输入值  e打印的值就是当前输入框中输入的值
    remoteMethod(val) {
      //请求后端接口
      console.log(val);
    },
    // 父组件身上自定义事件 change,通过子组件传递$emit事件和参数
    changeProcince(value) {
        this.province = value
    },
    changeCity(value) {
        this.city = value
    }
  },
  created() {
    api.getProvince().then(res => {
      console.log(res)
      this.provinceList = res.data.data
    })
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>


