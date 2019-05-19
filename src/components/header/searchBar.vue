<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
            </el-col>
            <el-col :span="15" class="center">
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur"></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-if="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item,index) in hotPlaceList" :key="index">
                            <router-link :to="{name : 'goods',params:{name : item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                    <dl class="searchList" v-if="isSearchList">
                        <dd v-for="(item,index) in searchList" :key="index">
                            <router-link :to="{name : 'goods',params:{name : item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                </div>
                <p class="suggest">
                    <a href="#" v-for="(item,index) in suggestList" :key="index">{{item}}</a>
                </p>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchWord : '',
            isFocus : false,//用来判断输入框是否聚焦状态 来显示热门搜索还是搜索列表
            hotPlaceList: ['大熊猫繁育基地','国色天香水上乐园','成都欢乐谷',''],//动态渲染热点地方
            searchList: ['三圣乡','三顾冒菜','三缺一'],//动态渲染搜索列表地方
            suggestList: ['京东第一温泉度假村','99旅馆连锁','尚客优快捷酒店','7天连锁酒店']//动态渲染推荐列表数据
        }
    },
    computed: {
        isHotPlace() {
            return this.isFocus && !this.searchWord//当聚焦状态且输入框为空  返回显示热点地方
        },
        isSearchList() {
            return this.isFocus && this.searchWord;//当聚焦状态且输入框有内容  返回搜索列表
        }
    },
    methods : {
        focus() {
            this.isFocus = true;
        },
        blur() {
            // 由于点击跳转之后先执行失去焦点函数,将isHotPlace和isSearchList都变为false,所以点击无效,需要加一个定时器先点击跳转在失去焦点
            let self = this;
            setTimeout(function() {
                self.isFocus = false
            }, 200);

        }
    }
}
</script>
<style lang="scss">
    // @import '@/assets/css/public/header/search.scss';
    // @import '@/assets/css/public/header/index.scss'
</style>

