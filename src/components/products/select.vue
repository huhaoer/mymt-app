<template>
    <div class="m-product-select">
        <dl class="tab">
            <dt>
                {{name}}
                <i class="el-icon-caret-bottom"></i>
            </dt>
            <dd>
                <dt class="select-title">{{name}}</dt>
                <span v-for="(item,index) in list" :key="index">{{item.name}}</span>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    props: ['name','list'],//注册传来的两个属性,name是每个下拉列表的标题,list是下拉内容的数据是一个数组
}
</script>



