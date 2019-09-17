<template>
  <div class="goods-list">
      <div class="goods-list-banner">
          <goods-banner></goods-banner>
      </div>
      <div class="goods-list-conent">
          <dl
            v-for="item in tableData"
            :key="item.goodsId"
            class="goods-list-conent-item">
                <dt>
                    <img :src="item.avatar" alt="">
                </dt>
                <dd>
                    <p>{{item.goodsName}}</p>
                </dd>
            </dl>
      </div>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import goodsBanner from './components/banner.vue';

    @Component({
        components: {
            goodsBanner,
        },
    })

    export default class GoodsList extends Vue {
        private tableData: object[] = []

        private mounted() {
            this.init();
        }

        private init() {
            const self: any = this;
            self.$axios.post(self.$apis.goods.goodsList).then((res: any) => {
                if (res.code === 200) {
                    self.tableData = res.data.list;
                }
            }).catch((err: any) => {
                console.log(err);
            });
        }
    }
</script>

<style lang="stylus" scoped>
// @import url('src/assets/styles/mixins.styl');
.goods-list{
    background #f5f7f9
    &-conent{
        padding 20px 0
        display flex
        justify-content space-between
        flex-wrap wrap
        &-item{
            background #fff
            width 18%
            border-radius 6px
            margin-bottom 20px
            dt{
                img{
                    width 100%
                    vertical-align top
                }
            }
            dd{
                padding 10px;
                p{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }
}
</style>
