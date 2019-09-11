<template>
  <div class="tab-card">
      <dl
        v-for="item in cardData"
        :key="item.id"
        class="tab-card-item">
        <dt>
            <div>
                <p class="title">{{item.title}}</p>
                <p class="num">{{item.totalNum}}</p>
            </div>
            <div class="icon-box">
                <i
                    :style="{backgroundColor: item.iconColor}"
                    :class="['iconfont', item.icon]"></i>
            </div>
        </dt>
        <dd :class="item.rise > 0 ? 'up' : 'down'">
            <i :class="['iconfont',
                item.rise > 0 ?
                'SA_tubiaoshangshengqushi' : 'SA_tubiaoxiajiangqushi']">
            </i>
            {{Math.abs(item.rise)}}%
            <span >{{item.dataFrom}}</span>
        </dd>
    </dl>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {
        },
    })

    export default class tabCard extends Vue {
        private cardData: object[] = [
            {
                title: '用户数量',
                id: '1',
                icon: 'SA_yonghuzu',
                totalNum: 6728,
                rise: 8.7,
                dataFrom: '自昨日上涨',
                iconColor: 'rgba(233,100,188, 0.2)',
            },
            {
                title: '订单数量',
                id: '2',
                icon: 'SA_dingdan',
                totalNum: 6728,
                rise: -8.7,
                dataFrom: '自昨日下降',
                iconColor: 'rgba(93,120,155, 0.2)',
            },
            {
                title: '销售额',
                id: '3',
                icon: 'SA_data-analysis',
                totalNum: 6728,
                rise: 8.7,
                dataFrom: '自昨日上涨',
                iconColor: 'rgba(33,50,163, 0.2)',
            },
            {
                title: '售后趋势',
                id: '4',
                icon: 'SA_shouhou',
                totalNum: 6728,
                rise: 8.7,
                dataFrom: '自昨日上涨',
                iconColor: 'rgba(203,16,179, 0.2)',
            },
        ];

        private mounted() {
            this.init();
        }

        private init() {
            console.log(this);
            const self: any = this;
            // self.$axios.post(self.$apis.address.addRess).then((res: any) => {
            //     // this.$store.dispatch('user/userInfo', this.userinfo);
            // }).catch((err: any) => {
            //     console.log(err);
            // });
        }
    }
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/variable.styl';
.tab-card{
    display flex
    justify-content space-between
    &-item{
        background #fff
        padding 15px
        border-radius 6px
        width 23%
        dt{
            display flex
            justify-content space-between
            text-align left
            .title{
                display block
                color $gray
                font-size $font-size-sm
            }
            .num{
                font-size $font-size-lg
            }
            .icon-box{
                padding-top 10px
            }
            i{
                padding 10px
                background #ccc
                border-radius 10px
            }
        }
        dd{
            font-size $font-size-sm
            text-align left
            padding-top 10px
            span{
                color $gray
            }
        }
        .up{
            color green
        }
        .down{
            color red
        }
    }
}
</style>
