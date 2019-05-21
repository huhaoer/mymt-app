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
                <span v-for="city in key" :key="city.id">{{city.name}}</span>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),//将字符串分割为数组,上面动态添加
            cityList: [],//用于保存下面created里面的城市展示数组
            cityGroup: {},//将按照首字母分类的对象动态渲染
        }
    },
    created(data) {
        var data = [
            {
                "id": 1,
                "name": '北京',
                "pinyin": 'beijing',
                "acronym": 'bj',
                "rank": 'S',
                "firstChar": 'b'
            },
            {
                "id": 10,
                "name": '上海',
                "pinyin": 'shanghai',
                "acronym": 'sh',
                "rank": 'S',
                "firstChar": 's'
            },
            {
                "id": 20,
                "name": '广州',
                "pinyin": 'guangzhou',
                "acronym": 'gz',
                "rank": 'S',
                "firstChar": 'g'
            },
            {
                "id": 20,
                "name": '成都',
                "pinyin": 'chengdu',
                "acronym": 'cd',
                "rank": 'S',
                "firstChar": 'c'
            },
            {
                "id": 20,
                "name": '深圳',
                "pinyin": 'shenzhen',
                "acronym": 'sz',
                "rank": 'S',
                "firstChar": 's'
            },
            {
                "id": 20,
                "name": '杭州',
                "pinyin": 'hangzhou',
                "acronym": 'hz',
                "rank": 'S',
                "firstChar": 'h'
            },
            {
                "id": 20,
                "name": '武汉',
                "pinyin": 'wuhan',
                "acronym": 'wh',
                "rank": 'S',
                "firstChar": 'w'
            },
            {
                "id": 20,
                "name": '长沙',
                "pinyin": 'changsha',
                "acronym": 'cs',
                "rank": 'S',
                "firstChar": 'c'
            },
            {
                "id": 20,
                "name": '烟台',
                "pinyin": 'yantai',
                "acronym": 'yt',
                "rank": 'S',
                "firstChar": 'y'
            },
            {
                "id": 20,
                "name": '郑州',
                "pinyin": 'zhengzhou',
                "acronym": 'zz',
                "rank": 'S',
                "firstChar": 'z'
            },
            {
                "id": 20,
                "name": '西安',
                "pinyin": 'xian',
                "acronym": 'xa',
                "rank": 'S',
                "firstChar": 'x'
            },
            {
                "id": 20,
                "name": '天津',
                "pinyin": 'tianjin',
                "acronym": 'tj',
                "rank": 'S',
                "firstChar": 't'
            },
            {
                "id": 20,
                "name": '日照',
                "pinyin": 'rizhao',
                "acronym": 'rz',
                "rank": 'S',
                "firstChar": 'r'
            },
            {
                "id": 20,
                "name": '青岛',
                "pinyin": 'qingdao',
                "acronym": 'qd',
                "rank": 'S',
                "firstChar": 'q'
            }
        ]
        var obj = {};//用于分组判断同一个字母开头的对象,放在同一个数组里面
        data.forEach((ele,index) => {
            if(!obj[ele.firstChar.toUpperCase()]){
                obj[ele.firstChar.toUpperCase()] = []//如果obj对象里面没有该首字母开头的属性,就让该首字母属性为一个空对象
            }
            obj[ele.firstChar.toUpperCase()].push(ele)//如果有首字母为属性的话,就将该属性的这个ele对象放在同一个数组里面
        })
        // console.log(obj)
        this.cityGroup = obj;
    },
    methods: {

    }
}
</script>
<style lang="scss">
@import '@/assets/css/changecity/categroy.scss'
</style>


