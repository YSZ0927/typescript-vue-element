<template>
    <div class="shop-info">
        <div class="shop-info-no-shop" v-if="userInfo.openStore !== 1 || stepNum === 3">
            <add-step :stepNum="stepNum"></add-step>
            <status-shop
                v-if="stepNum === 1 || stepNum === 3"
                :status.sync="stepNum"></status-shop>
            <add-shop :status.sync="stepNum" v-if="stepNum === 2"></add-shop>
        </div>
        <div v-else>
            <shop-info-header :info="storeInfo" @change="changeTab"></shop-info-header>
            <div class="shop-info-content">
                <dy-list ref="dyList"></dy-list>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import statusShop from './components/status-shop.vue'; // card
    import addShop from './components/add-shop.vue'; // card
    import addStep from './components/add-step.vue'; // card
    import shopInfoHeader from './components/shop-info-header.vue'; // card
    import dyList from './components/dy-list.vue'; // card

    @Component({
        components: {
            statusShop,
            addShop,
            addStep,
            shopInfoHeader,
            dyList,
        },
    })
    export default class shopInfo extends Vue {
        private stepNum: number = 1;

        private storeInfo: Object = {};

        get userInfo() {
            const that: any = this;
            const info = that.$store.state.user.userInfo;
            if (info.openStore) {
                that.getInfo(info);
            }
            return info;
        }

        private getInfo(param: any) {
            const self: any = this;
            self.$axios.post(self.$apis.store.storeInfo, {
                userId: param.userId,
            }).then((res: any) => {
                self.storeInfo = res.data;
            });
        }

        private changeTab(val: any) {
            const self: any = this;
            if (val.id === 1) {
                self.$refs.dyList.getList(self.storeInfo).then((res: any) => {
                    if (self.storeInfo.notReadDy) {
                        self.getInfo(self.userInfo);
                    }
                });
            }
        }
    }
</script>

<style lang="stylus" scoped>
.shop-info{
    h3{
        padding-bottom 20px
    }
    &-add-shop{
        background #fff
        border-radius 10px
        padding 20px 40px
        margin-bottom 20px
        h5{
            line-height 2.5
        }
    }
    &-content{
        margin-top 20px
        background #fff
        border-radius 6px
        box-shadow -1px 3px 6px -1px rgba(168,161,168,.3)
    }
}
</style>
