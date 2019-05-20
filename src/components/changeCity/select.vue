<template>
    <div class="choose-wrap" @click="showWrapper" v-document-click="documentClick">
        <!-- 自定义指令  在Vue.directive上bind函数里绑定点击事件,传入documentClick函数 -->
        <div class="choose">
            <span>{{value}}</span>
            <i class="el-icon-caret-bottom"></i>
            <div :class="{'mt-content' : true,'active' : showWrapperActive}">
                <!-- showWrapperActive 父组件传递,判断是否展示省份或者城市列表 -->
                <h2>{{title}}</h2>
                <div class="wrapper">
                    <div class="col">
                        <span class="mt-item" v-for="(item,index) in list" :key="index">{{item}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props:['list','value','title','showWrapperActive'],//引入注册province组件传过来的省份名称 title不会改变 value会随着点击而改变
    methods: {
        //点击wrapper时展示出省份城市框
        showWrapper(e) {
            e.stopPropagation();//由于点击wrapper   也会触发父级documentClick事件,取消事件冒泡
            // 传递方法和参数到父组件身上 点击省份或者城市对应的wrapper就会展示出列表
            this.$emit('change_active',true)
        },
        // 自定义指令 点击除了wrapper区域外时取消添加类名active,也就隐藏了省份城市框
        documentClick() {
            // this.showWrapperActive = false
            // 传递方法和参数到父组件身上  传递false,点击document区域就隐藏省份和城市列表
            this.$emit('change_active',false)
        }
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/changecity/select.scss';
</style>


