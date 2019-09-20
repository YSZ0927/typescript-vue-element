<template>
    <div class="goods-info">
        <div class="inline-block">
            <h5>商品名称</h5>
            <el-input size="small" width="200"></el-input>
            <h5>商品类别</h5>
            <el-cascader
                size="small"
                :options="options"></el-cascader>
            <h5>商品名称</h5>
            <el-input size="small" width="200"></el-input>
        </div>
        <div class="inline-block">
            <h5>商品类别</h5>
            <el-input size="small" width="200"></el-input>
            <h5>商品类别</h5>
            <el-input size="small" width="200"></el-input>
            <h5>商品类别</h5>
            <el-input size="small" width="200"></el-input>
        </div>
        <div class="inline-block">
            <h5>商品类别</h5>
            <el-input size="small" width="200"></el-input>
            <h5>商品描述</h5>
            <el-input
            size="small"
            type="textarea"
            :rows="4"
            width="200"></el-input>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({})
    export default class goodsInfo extends Vue {
        private options: object[] = [
            {
                value: '居家百货',
                label: '居家百货',
                children: [
                    {
                        value: '指南',
                        label: '设计',
                    },
                    {
                        value: '指南',
                        label: '设计',
                    },
                    {
                        value: '指南',
                        label: '设计',
                    },
                ],
            },
            {
                value: '服饰箱包',
                label: '服饰箱包',
                children: [
                    {
                        value: '男装',
                        label: '男装',
                    },
                    {
                        value: '女装',
                        label: '女装',
                    },
                    {
                        value: '箱包',
                        label: '箱包',
                    },
                ],
            },
            {
                value: '保健食品',
                label: '保健食品',
                children: [
                    {
                        value: '指南',
                        label: '设计',
                    },
                    {
                        value: '指南',
                        label: '设计',
                    },
                ],
            },
        ]
    }
</script>
<style lang="stylus" scoped>
.goods-info{
    display flex
    justify-content space-between
    .inline-block{
        width 30%
    }
}
</style>
