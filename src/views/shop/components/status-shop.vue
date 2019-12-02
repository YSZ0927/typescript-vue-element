<template>
    <div class="status-shop">
        <div v-if="status === 1">
            小店还没开业~
        </div>
        <el-button
            @click="clickHandle"
            type="primary">{{status === 1 ? '去开业' : '去上货'}}</el-button>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';

    @Component({
        components: {
        },
    })
    export default class statusShop extends Vue {
        @Prop({ default: 1 }) private status!: number; // 1-没有店铺 3-开业成功

        private clickHandle() {
            const self: any = this;
            if (self.status === 1) {
                self.$emit('update:status', 2);
            } else {
                self.$router.push({
                    path: '/goods/editGoods',
                });
            }
        }
    }
</script>

<style lang="stylus" scoped>
.status-shop{
    text-align center
}
</style>
