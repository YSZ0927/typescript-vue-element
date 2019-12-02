<template>
    <div class="goods-info">
        <div class="inline-block">
            <h5>商品名称</h5>
            <el-input size="small" width="200" v-model="goodsForm.goodsName"></el-input>
            <h5>商品类别</h5>
            <!-- <el-cascader
                size="small"
                :goodsTypeList="goodsTypeList"></el-cascader> -->
             <el-select size="small" v-model="goodsForm.goodsType" placeholder="请选择">
                <el-option
                v-for="item in goodsTypeList"
                :key="item.id"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <h5>供应量</h5>
            <el-input size="small" v-model="goodsForm.goodsStock" width="200"></el-input>
        </div>
        <div class="inline-block">
            <h5>售价</h5>
            <el-input size="small" v-model="goodsForm.sellPrice" width="200"></el-input>
            <h5>原价</h5>
            <el-input size="small" v-model="goodsForm.oldPrice" width="200"></el-input>
            <h5>最低价格</h5>
            <el-input size="small" v-model="goodsForm.minPrice" width="200"></el-input>
        </div>
        <div class="inline-block">
            <h5>最高价格</h5>
            <el-input size="small" v-model="goodsForm.maxPrice" width="200"></el-input>
            <h5>商品描述</h5>
            <el-input
            v-model="goodsForm.goodsDetailInfo"
            size="small"
            type="textarea"
            :rows="4"
            width="200"></el-input>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator';

    interface goodsForm{
        goodsName: string,
        goodsDetailInfo: string,
        goodsType: string,
        maxPrice: number,
        minPrice: number,
        oldPrice: number,
        sellPrice: number,
        goodsStock: number,
    }

    @Component({})
    export default class goodsInfo extends Vue {
        private goodsTypeList: object[] = [];

        private value: String = '';

        private goodsForm: goodsForm = {
            goodsName: '',
            goodsDetailInfo: '',
            goodsType: '',
            maxPrice: 0,
            minPrice: 0,
            oldPrice: 0,
            sellPrice: 0,
            goodsStock: 0,
        }

        private mounted() {
            this.getAddressJson();
        }

        @Watch('goodsForm', { deep: true })
        onFormChange(val: goodsForm) {
            const self: any = this;
            self.$emit('changeForm', val);
        }

        private getAddressJson() {
            const self: any = this;
            self.$axios.post('/api/goods/getTypeLists').then((res: any) => {
                self.goodsTypeList = res.data;
            });
        }
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
