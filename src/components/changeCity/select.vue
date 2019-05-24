<template>
    <div class="choose-wrap" @click="showWrapper" v-document-click="documentClick">
        <!-- 自定义指令  在Vue.directive上bind函数里绑定点击事件,传入documentClick函数 -->
        <div class="choose">
            <span>{{value}}</span>
            <i class="el-icon-caret-bottom"></i>
            <div :class="{'mt-content' : true,'active' : showWrapperActive}">
                <!-- showWrapperActive 父组件传递,判断是否展示省份或者城市列表 -->
                <h2>{{title}}</h2>
                <div :class="['wrapper',className]">
                    <div class="col" v-for="(listData,index) in renderList" :key="index">
                        <!-- 动态绑定class  当前点击的那个span标签省份或者城市和传递过来的value值城市或者省份相同的话就添加active -->
                        <span :class="{'mt-item': true,'active' : item.name == value}" v-for="(item,index) in listData" :key="index" @click="changeValue(item)">{{item.name}}</span>
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
    created() {
        // console.log(this.renderList)
    },
    computed: {
        renderList() {
            var col = Math.ceil( this.list.length / 12 );//一列最多12个,向上取整获取有多少列
            var resultList = [];//用来接收分完组的数据
            for(var i = 0;i < col;i ++) {
                let data = this.list.slice(i * 12 ,i * 12 + 12)
                resultList.push(data)
            }
            return resultList
        }
    },
    props:['list','value','title','showWrapperActive','className'],//引入注册province组件传过来的省份名称 title不会改变 value会随着点击而改变
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
        },
        // 通过province.vue组件传递的参数list省份和城市的数据 来实现点击哪一个然后输入框也渲染成点击的那一个
        changeValue(item) {
            // 给父组件传递自定义事件change和当前点击的城市或者省份item为参数
            this.$emit('change',item)
        }
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/changecity/select.scss';
</style>


