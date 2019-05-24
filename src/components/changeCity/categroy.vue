<template>
    <div class="category">
        <dl class="m-categroy">
            <dt>按拼音首字母选择：</dt>
            <dd v-for="(item,index) in list" :key="index">
                <a :href="'#city-' + item">{{item}}</a>
            </dd>
        </dl>
        <!-- 绑定id  添加锚点跳转到指定的城市首字母 -->
        <dl class="m-categroy-section" v-for="(key,value) in cityGroup" :key="value" :id="'city-' + value">
            <dt>{{value}}</dt>
            <dd>
                <span v-for="city in key" :key="city.id" @click="changeCity(city)">{{city.name}}</span>
            </dd>
        </dl>
    </div>
</template>
<script>
import api from '@/api/index.js'
export default {
    data() {
        return {
            list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),//将字符串分割为数组,上面动态添加
            cityList: [],//用于保存下面created里面的城市展示数组
            cityGroup: {},//将按照首字母分类的对象动态渲染
        }
    },
    created() {
        api.getCityList().then(res => {
            console.log(res)
            var obj = {};//用于分组判断同一个字母开头的对象,放在同一个数组里面
            res.data.data.forEach((ele,index) => {
                if(!obj[ele.firstChar.toUpperCase()]){
                    obj[ele.firstChar.toUpperCase()] = []//如果obj对象里面没有该首字母开头的属性,就让该首字母属性为一个空对象
                }
                obj[ele.firstChar.toUpperCase()].push(ele)//如果有首字母为属性的话,就将该属性的这个ele对象放在同一个数组里面
            })
            // console.log(obj)
            this.cityGroup = obj;
            console.log(this.cityGroup)
        })
    },
    methods: {
        // 点击城市列表添加点击事件  点击传入数据到vuex的position对象里,改变了name值,然后跳转到主页
        changeCity(city) {
            this.$store.dispatch('setPosition',city)
            this.$router.push({name: 'index'})
        }
    }
}
</script>
<style lang="scss">
@import '@/assets/css/changecity/categroy.scss'
</style>


