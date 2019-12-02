<template>
    <div class="dy-list">
        <dl v-for="item in dyList" :key="item.dynamicId">
            <dt></dt>
            <dd>
                <p>{{item.people}}</p>
                <p class="dy-list-time">{{item.createTime | timeFomatter}}</p>
                <div>
                    {{item.title}}
                </div>
            </dd>
            <dd>
                情
            </dd>
        </dl>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';

    @Component({
        components: {
        },
        filters: {
            timeFomatter(val: string) {
                return val.substring(0, 10);
            },
        },
    })
    export default class dyList extends Vue {
        @Prop({ default: 1 }) private status!: number; // 1-没有店铺 3-开业成功

        private dyList: object[] = []

        private getList(param: any) {
            const self: any = this;
            return new Promise((resolve, reject) => {
                self.$axios.post(self.$apis.store.storeDyList, {
                    storeId: param.storeId,
                }).then((res: any) => {
                    self.dyList = res.data;
                    resolve(true);
                });
            });
        }
    }
</script>

<style lang="stylus" scoped>
.dy-list{
    height calc(100vh - 330px)
    overflow auto
    dl{
        display flex
        padding 20px
        flex-wrap wrap
        dt{
            width 40px
            height 40px
            border-radius 50%
            background pink
            border 2px solid #ccc
            margin-right 20px
        }
        dd{
            padding-top 0px
            font-size 14px
            .dy-list-time{
                font-size 12px
                color #ccc
            }
        }
        dd:nth-of-type(1){
            flex 1
            border-bottom 1px solid #ccc
        }
    }
}
</style>
