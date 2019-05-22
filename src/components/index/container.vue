<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
        <!-- 动态添加传入的类名,可以在scss样式里面根据类名修改不同的样式 -->
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item,index) in nav.list"
        :key="index"
        :class="{active : kind === item.tab}"
        :data-type="item.tab"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in resultsData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image">
          <div style="padding: 14px;" class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.subTitle">{{item.subTitle}}</div>
            <!-- 判断显示价格  有剩余数量rentNum且有当前价格cur_price就显示正常价格 -->
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">￥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
              <!-- <span class="old-price">门市价￥{{item.price_info.old_price}}</span> -->
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <!-- 判断显示是否抢光了 当剩余数量rentNum为0或者是没有的话就显示抢光了  -->
            <!-- <div class="price-info" v-else-if="!item.rentNum">
                <span class="current-price-wrapper">
                    <span class="price-symbol numfont">￥</span>
                    <span class="current-price numfont">抢光了</span>
                </span>
            </div> -->
            <!-- 判断显示人均价格  有剩余数量rentNum且当前价格cur_price不存在的话显示人均价格 -->
            <!-- <div class="price-info" v-else>
                <span class="current-price-wrapper">
                    <span class="price-symbol numfont">￥</span>
                    <span class="current-price numfont">{{item.price_info.avg_price}}</span>
                    <span class="units">/{{item.price_info.units}}均</span>
                </span>
            </div> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      kind: "all", //用于判断当前鼠标指向的那一个标签来展示信息 默认展示全部
      resultsData: {},//用于保存获取回来的数据,是一个对象,然后鼠标指向哪一个标题就用kind动态渲染哪一个的数据
      list: [
        {
          image:
            "//p0.meituan.net/bbia/58274b1b9e0b21417a41fe3e3fdba16569841.jpg@460w_260h_1e_1c",
          title: "麦香甜蛋糕烘焙坊（春熙路店）",
          sub_title: "蛋糕14选1,约12英寸",
          price_info: {
            cur_price: 138,//当前价格
            old_price: 198,//以前的价格
            avg_price: null,//平均价格
            units: null//平均价格的单位
          },
          rentNum: 10,//判断是否还有剩余 有剩余的话就是显示价格,没有剩余的话就是显示抢光了
          address: "春熙路"
        },
        {
          image:
            "//p0.meituan.net/bbia/d166c04ecdf18c055195bc87963254a3581920.png@460w_260h_1e_1c",
          title: "储缘蛋糕（金花桥店）",
          sub_title:
            "8英寸卡通生日蛋糕（多啦a梦hellokitty小黄人、大白、海绵宝宝等-领先推出蛋糕店送货上门贴心服务的理念,同城3公里可免费配送到家！-1个，约8英寸，圆型",
          price_info: {
            cur_price: 0,
            old_price: 0,
            avg_price: 18,
            units: '人'
          },
          rentNum: 10,
          address: "红牌楼"
        },
        {
          image:
            "//p0.meituan.net/msmerchant/ce3f3d267afc3e8589512325c1c788ee533238.png@460w_260h_1e_1c",
          title: "爱达乐蛋糕（小南街店）",
          sub_title: "蛋糕4选1,约8英寸",
          price_info: {
            cur_price: 169,
            old_price: 188
          },
          address: "宽窄巷子"
        },
        {
          image:
            "//p0.meituan.net/msmerchant/7c394d7aa1aaf3dee5731a6c39f3ffc631585.jpg@460w_260h_1e_1c",
          title: "观锦台花园餐厅",
          sub_title: "双人下午茶套餐，提供免费WiFi",
          price_info: {
            cur_price: 29.9,
            old_price: 94
          },
          address: "盐市口"
        },
        {
          image:
            "//p1.meituan.net/msmerchant/50c064c20fa9bd5ab3a85a1d6150ddea336431.jpg@460w_260h_1e_1c",
          title: "帽石牛餐厅",
          sub_title: "美味双人餐，包间免费",
          price_info: {
            cur_price: 78,
            old_price: 139
          },
          address: "春熙路"
        },
        {
          image:
            "//p0.meituan.net/msmerchant/ce3f3d267afc3e8589512325c1c788ee533238.png@460w_260h_1e_1c",
          title: "爱达乐蛋糕（小南街店）",
          sub_title: "蛋糕4选1,约8英寸",
          price_info: {
            cur_price: 169,
            old_price: 188
          },
          address: "宽窄巷子"
        }
      ]
    };
  },
  created() {
    api.getYouGeDiao().then(res => {
      // console.log(res)
      this.resultsData = res.data.data
    })
  },
  props: ["nav"], //注册接收从index.vue页面传递的信息  本页面动态渲染
  methods: {
    over(e) {
      // console.log(e)
      let dom = e.target; //获取鼠标移动到的哪个元素
      let tagName = dom.tagName.toLowerCase(); //获取划过的是什么标签
      if (tagName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type"); //获取鼠标滑到的元素身上设置的type值 传给kind,来展示不同的页面
      //ajax动态获取数据
    }
  }
};
</script>
<style lang="scss">
</style>

