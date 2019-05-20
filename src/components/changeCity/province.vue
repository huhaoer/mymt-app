<template>
    <div>
        <span class="name">按省份选择:</span>
        <m-select :list="provinceList" title="省份" :value="province" :showWrapperActive="provinceActive" @change_active="changeProvinceActive"/>
        <m-select :list="cityList" title="城市" :value="city" :showWrapperActive="cityActive" @change_active="changeCityActive"/>
    </div>
</template>
<script>
import MSelect from './select.vue'
export default {
    data() {
        return {
            provinceList:['山东','甘肃','江苏','北京','云南'],//传递给selecr.vue组件 省份数据
            province: '省份',//绑定传入到select页面的选择框的省份数据
            cityList: ['哈尔滨','佳木斯','牡丹江','鹤岗'],//传递给selecr.vue 城市的数据
            city: '城市',//绑定城市的数据
            provinceActive: false,//判断省份是否展示
            cityActive: false//判断城市是否展示
        }
    },
    components: {
        MSelect
    },
    methods: {
        // 子组件传递该方法和参数  当点击wrapper时传递change_active方法和参数true  点击其中一个组件时,传递展示active,另一个组件传递不展示active
        changeProvinceActive(flag) {
            this.provinceActive = flag
            if(flag){
                this.cityActive = false
            }
        },
        // 子组件传递该方法和参数  当点击城市时为false出现,那么城市的showWrapperActive就为true
        changeCityActive(flag) {
            this.cityActive = flag
            if(flag){
                this.provinceActive = false
            }
        }
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/changecity/iselect.scss';
</style>


