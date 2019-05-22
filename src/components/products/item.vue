<template>
  <dl class="s-item">
    <!-- 左边图片部分 -->
    <dt>
      <img :src="meta.image" alt="图片">
    </dt>
    <!-- 右边评价价格部分 -->
    <dd>
      <h3>
        <router-link :to="{name : 'productDetail'}">{{meta.title}}</router-link>
      </h3>
      <!-- 第一行 评论 -->
      <p>
        <el-rate v-model="meta.score" disabled  text-color="#ff9900" score-template="{value}"></el-rate>
        <span v-if="meta.score > 4.5">很好</span>
        <span v-else-if="meta.score > 4">好</span>
        <span v-else-if="meta.score > 3.5">不错</span>
        <span v-else>很差</span>
        <span>{{meta.score}}分</span>
        <span class="s-item-comment-total">{{meta.commentNum}}人评论</span>
      </p>
      <!-- 第二行 地址 -->
      <p>
          <!-- 菜品 -->
          <span class="s-item-tab">
              <!-- 判断是不是最后一项  不是的话就在后面加上一根竖线 -->
              <span v-for="(v,i) in meta.tab" :key="i">{{v + (i < meta.tab.length - 1 ? '|' : '')}}</span>
          </span>
          <!-- 具体地址 -->
          <span class="s-item-addr">{{meta.address}}</span>
          <!-- 定位 -->
          <span>
              <a href="#">
                  <i class="el-icon-location"></i>
                  查看地图
              </a>
          </span>
      </p>
      <!-- 第三行人均 -->
      <p>
          <span class="s-item-price">
              人均￥{{meta.avgPrice}}
          </span>
      </p>
      <!-- ul列表是下面展示的代金券和价格描述 -->
        <ul class="deal-items">
            <li class="items" v-for="(item,index) in meta.dealItems.slice(0,2)" :key="index">
                <!-- 第一行 代金券和描述 -->
                <p class="deal-title">{{item.title}}</p>
                <!-- 第二行 价格和门市价和销量 -->
                <p>
                   <span class="deal-price">￥{{item.price}}</span> 
                   <span class="deal-old-price">门市价￥{{item.counterPrice}}</span>
                   <span class="deal-sales">已售{{item.saleNum}}</span>
                </p>
            </li>
        </ul>
    </dd>
  </dl>
</template>
<script>
export default {
  props: ["meta"]
};
</script>

