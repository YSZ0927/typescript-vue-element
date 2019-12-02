<template>
    <div class="shop-info-header">
        <div class="shop-info-header-img">
            <dl>
                <dt></dt>
                <dd>
                    <p>{{info.storeName}}</p>
                </dd>
            </dl>
        </div>
        <div class="shop-info-header-tab">
            <p :class="['left', `left-${tabActive}`]" v-if="reload">
                <span v-for="item in tabList"
                    @click="tabHandle(item)"
                    :class="{'tab-active': tabActive === item.id}"
                    :key="item.id">
                    <em>{{item.name}}</em>
                    <i class="red-point" v-show="showPoint(item)"></i>
                </span>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
    import {
        Component,
        Vue,
        Prop,
        Watch,
    } from 'vue-property-decorator';

    @Component({
        name: 'headerShop',
        // filters: {
        //     showPoint(value: any) {
        //         console.log(value);
        //         return true;
        //     },
        // },
    })
    export default class headerShop extends Vue {
        @Prop({ default: 1 }) private stepNum!: number;

        @Prop({ default: {} }) private info!: object;

        @Watch('info', { deep: true })
        infoChange(val: any) {
            const self: any = this;
            self.reload = false;
            self.reload = true;
            self.$emit('changeForm', val);
        }

        private reload: Boolean = true

        private tabList: object[] = [
            {
                name: '主 页',
                id: 0,
            },
            {
                name: '动 态',
                id: 1,
            },
            {
                name: '收 藏',
                id: 2,
            },
            {
                name: '上 新',
                id: 3,
            },
            {
                name: '设 置',
                id: 4,
            },
            {
                name: 'TOP榜',
                id: 5,
            },
        ];

        private showPoint(value: any) {
            const self: any = this;
            if (self.info.notReadDy && value.id === 1) {
                return true;
            }
            return false;
        }

        private tabActive: Number = 0;

        private tabHandle(val: any) {
            const self: any = this;
            self.tabActive = val.id;
            self.$emit('change', val);
        }
    }
</script>

<style lang="stylus" scoped>
.shop-info-header{
    border-radius 6px
    box-shadow -1px 3px 6px -1px rgba(168,161,168,.3)
    &-img{
        width 100%
        height 162px
        background url('~assets/images/store-bg.png') no-repeat
        background-size 100%
        position relative
        dl{
            position absolute
            bottom 20px
            left 20px
            display flex
            dt{
                width 60px
                height 60px
                border-radius 50%
                background pink
                border 2px solid #ccc
                margin-right 20px
            }
            dd{
                padding-top 5px
                font-size 20px
                font-weight 600
                color #fff
            }
        }
    }
    &-tab{
        background #fff
        .left{
            position: relative;
            span{
                display inline-block
                padding 10px 20px
                font-size 14px
                cursor pointer
                position relative
                .red-point{
                    position absolute
                    width 6px
                    height 6px
                    border-radius 50%
                    background red
                    top 12px
                    right 9px
                }
            }
            .tab-active{
                color #35a2ff
            }
        }
        .left:before{
            transition: .3s;
            content: "";
            width: 40px;
            height: 3px;
            bottom: 0px;
            position: absolute;
            background: #35a2ff;
        }
        for $row in 0..5 {
            .left-{$row}:before{
                transform: translateX(17px + ($row * 72px));
            }
        }
    }
}
</style>
