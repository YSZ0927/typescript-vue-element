<template>
  <div class="goods-table">
        <el-table
            :data="tableData"
            height="700"
            style="width: 100%">
            <el-table-column
                prop="avatar"
                label="图片"
                width="100">
                <template slot-scope="scope">
                    <img :src="scope.row.avatar" alt=""/>
                </template>
            </el-table-column>
            <el-table-column
                prop="goodsName"
                label="名称"
                width="240">
                <template slot-scope="scope">
                    <p>{{scope.row.goodsName}}</p>
                </template>
            </el-table-column>
            <el-table-column
                prop="goodsId"
                label="ID"
                width="200">
                <template slot-scope="scope">
                    <p>{{scope.row.goodsId}}</p>
                </template>
            </el-table-column>
            <el-table-column
                prop="originalPrice"
                label="原价"
                width="180">
                <template slot-scope="scope">
                    <p>{{scope.row.originalPrice}}</p>
                </template>
            </el-table-column>
            <el-table-column
                prop="sellPrice"
                label="售价"
                width="180">
                <template slot-scope="scope">
                    <p>{{scope.row.sellPrice}}</p>
                </template>
            </el-table-column>
            <el-table-column
                prop="salesNum"
                label="品类"
                width="180">
                <template slot-scope="scope">
                    <p>{{scope.row.salesNum}}</p>
                </template>
            </el-table-column>
            <el-table-column
                prop="salesNum"
                label="销量">
                <template slot-scope="scope">
                    <p>{{scope.row.salesNum}}</p>
                </template>
            </el-table-column>
        </el-table>
  </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    

    @Component({})
    export default class tableGoods extends Vue {

      @Prop() private tableData!: object;
    }
</script>

<style lang="stylus" scoped>
.goods-table{
}
</style>