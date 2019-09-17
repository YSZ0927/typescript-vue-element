<template>
    <div class="edit-goods">
        <h3>图片上传</h3>
        <div class="edit-goods-box">
            <h5>轮播组图</h5>
            <upload-img></upload-img>
            <h5>资质图片</h5>
            <upload-img></upload-img>
        </div>
        <h3>基本信息</h3>
        <div class="edit-goods-box edit-goods-two">
            <div class="inline-block">
                <h5>商品名称</h5>
                <el-input size="small" width="200"></el-input>
                <h5>商品名称</h5>
                <el-input size="small" width="200"></el-input>
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
        <h3>商家信息</h3>
        <div class="edit-goods-box">
            <h5>轮播组图</h5>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import uploadImg from './components/upload-img.vue'; // card

    @Component({
        components: {
            uploadImg,
        },
    })
    export default class editGoods extends Vue {}
</script>

<style lang="stylus" scoped>
.edit-goods{
    h3{
        padding-bottom 20px
    }
    &-box{
        background #fff
        border-radius 10px
        padding 20px 40px
        margin-bottom 20px
        h5{
            line-height 2.5
        }
    }
    &-two{
        display flex
        justify-content space-between
        .inline-block{
            width 30%
        }
    }
}
</style>
