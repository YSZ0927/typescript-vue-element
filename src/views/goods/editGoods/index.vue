<template>
    <div class="edit-goods">
        <h3>
            <span>商品信息</span>
            <el-button size="small" type="primary" @click="saveInfo">保存</el-button>
        </h3>
        <div class="edit-goods-box">
            <goods-info @changeForm="getForm"></goods-info>
        </div>
        <!-- <h3>商家信息</h3>
        <div class="edit-goods-box">
            <seller-info></seller-info>
        </div> -->
        <h3>图片上传</h3>
        <div class="edit-goods-box">
            <h5>
                <span>轮播组图</span>
            </h5>
            <upload-img :paramKey="'goodsImgBanner'" @changeImg="getImgUrl"></upload-img>
            <h5>
                <span>资质图片</span>
            </h5>
            <upload-img :paramKey="'aptitude'" @changeImg="getImgUrl"></upload-img>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import uploadImg from './components/upload-img.vue'; // card
    import goodsInfo from './components/goods-info.vue'; // card
    import sellerInfo from './components/seller-info.vue'; // card

    @Component({
        components: {
            uploadImg,
            goodsInfo,
            sellerInfo,
        },
    })
    export default class editGoods extends Vue {
        private formData: Object = {};

        get userInfo() {
            const that: any = this;
            const info = that.$store.state.user.userInfo;
            return info;
        }

        private getImgUrl(val: any) {
            this.formData = {
                ...this.formData,
                ...val,
            };
        }

        private getForm(val: any) {
            this.formData = {
                ...this.formData,
                ...val,
            };
        }

        private saveInfo() {
            const self: any = this;
            self.$axios.post(self.$apis.goods.editGoods, {
                ...self.formData,
                userId: self.userInfo.userId,
            }).then((res: any) => {
                self.$message({
                    message: res.message,
                    type: res.code === 200 ? 'success' : 'error',
                });
            });
        }
    }
</script>

<style lang="stylus" scoped>
.edit-goods{
    h3{
        padding-bottom 20px
        display flex
        justify-content space-between
    }
    &-box{
        background #fff
        border-radius 10px
        padding 20px 40px
        margin-bottom 20px
        h5{
            padding 5px 0
            font-size 14px
            span{
                margin-right 20px
            }
        }
    }
}
</style>
