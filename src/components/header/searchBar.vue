<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
            </el-col>
            <el-col :span="15" class="center">
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="搜索商家或地点" @focus="focus" @blur="blur" @input="input"></el-input>
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
import api from '@/api/index.js'//引入请求数据的封装对象方法api
export default {
    data() {
        return {
            searchWord : '',
            isFocus : false,//用来判断输入框是否聚焦状态 来显示热门搜索还是搜索列表
            hotPlaceList: [],//动态渲染热点地方
            searchList: [],//动态渲染搜索列表地方
            suggestList: []//动态渲染推荐列表数据
        }
    },
    // 发起axios请求  用于渲染热门搜索的列表
    created() {
        api.getSearchHot().then(res => {
            //获取热门搜索的数据,然后动态添加到data数据里
            this.hotPlaceList = res.data.data.slice(0,5);
            this.suggestList = res.data.data;
        })
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

        },
        input() {
            api.getSearchList().then(res => {
                // console.log(res)
                this.searchList = res.data.data.list.filter(item => {
                    // 过滤  判断请求回来的数据是否含有输入的关键字,有才保存到searchList里
                    return item.indexOf(this.searchWord) > -1
                })
            })
        }
    }
}
</script>
<style lang="scss">

</style>

