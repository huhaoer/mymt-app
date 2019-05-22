<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="curDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
        <template v-for="(item,index) in curDetail.items">
            <h4 :key="index">{{item.title}}</h4>
            <span v-for="(v,i) in item.items" :key="v + '_' + i">{{v}}</span>
        </template>
    </div>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
    data() {
        return {
            curDetail : null,//判断当前菜单展示的页面是哪一个
            menuList : []
        }
    },
    created() {
        api.getMenuList().then(res => {
            // console.log(res)
            this.menuList = res.data.data;
        })
    },
    methods : {
        menuEnter(item) {//移入到菜单栏dd时,将移入到的那个item作为参数传递到curDetail里
            this.curDetail = item
        },
        menuLeave() {//到鼠标移出dl菜单栏时 设置一个定时器,执行curDetail为空,因为还要移动到右边的详情页面处
            let self = this
            this.timer = setTimeout(() => {
                self.curDetail = null
            }, 200);
        },
        detailEnter() {//鼠标移入到详情页面detail时 清除定时器,可以让鼠标滑移动到详情展示页面上
            clearTimeout(this.timer)
        },
        detailLeave() {//鼠标移出详情展示页面时  就让curDetail为空,不展示菜单
            this.curDetail = null
        }
    }
}
</script>

