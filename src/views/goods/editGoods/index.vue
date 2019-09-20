<template>
    <div class="edit-goods">
        <h3>商品信息</h3>
        <div class="edit-goods-box">
            <goods-info></goods-info>
        </div>
        <h3>商家信息</h3>
        <div class="edit-goods-box">
            <h5>轮播组图</h5>
        </div>
        <h3>图片上传</h3>
        <div class="edit-goods-box">
            <h5>轮播组图</h5>
            <upload-img></upload-img>
            <h5>资质图片</h5>
            <upload-img></upload-img>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import uploadImg from './components/upload-img.vue'; // card
    import goodsInfo from './components/goods-info.vue'; // card

    @Component({
        components: {
            uploadImg,
            goodsInfo,
        },
    })
    export default class editGoods extends Vue {
    }
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
}
</style>
