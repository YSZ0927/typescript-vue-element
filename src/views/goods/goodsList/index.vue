<template>
  <div class="goods-list">
      <div>
          <goods-banner></goods-banner>
      </div>
        <!-- <goods-table :tableData="tableData"></goods-table> -->
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import goodsTable from './components/tableGoodsList.vue';
    import goodsBanner from './components/banner.vue';

    @Component({
        components: {
            goodsTable,
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
.goods-list{
    background #f5f7f9
}
</style>
