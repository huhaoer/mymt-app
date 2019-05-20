<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)">
        <i :class="item.icon"></i>
        {{item.title}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="curDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
        <template v-for="(item,index) in curDetail.children">
            <h4 :key="index">{{item.title}}</h4>
            <span v-for="(v,i) in item.children" :key="v + '_' + i">{{v}}</span>
        </template>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            curDetail : null,//判断当前菜单展示的页面是哪一个
            menuList : [
                {
                    title : '美食',
                    icon : 'food',
                    children : [
                        {
                            title : '美食',
                            children : ['甜点饮品','代金券','火锅','自助餐','小吃快餐','烧烤烤肉','日韩料理','西餐']
                        }
                    ]
                },
                {
                    title : '外卖',
                    icon : 'takeout',
                    children : [
                        {
                            title : '外卖',
                            children : ['美团外卖']
                        }
                    ]
                },
                {
                    title : '酒店',
                    icon : 'hotel',
                    children : [
                        {
                            title : '星级酒店',
                            children : ['经济型','舒适/三星','高档/四星','豪华/五星']
                        }
                    ]
                },
                {
                    title : '猫眼电影',
                    icon : 'movie',
                    children : [
                        {
                            title : '热映电影',
                            children : ['大侦探皮卡丘','一条狗的使命2','哥斯拉2：怪兽之王','复仇者联盟4：终局之战','何以为家','一个母亲的复仇']
                        },
                        {
                            title : '热门影院',
                            children : ['太平洋电影城','万达影城','星美国际影城','CGV影城']
                        }
                    ]
                }
            ]
        }
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

