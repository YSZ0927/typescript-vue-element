<template>
    <div class="home">
        <div class="home-tab-card">
            <h3>数据分析</h3>
            <tab-card></tab-card>
        </div>
        <div class="home-line-echarts">
            <line-echarts></line-echarts>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import tabCard from './components/tab-card.vue'; // card
    import LineEcharts from './components/line-echarts.vue'; // echart

    @Component({
        components: {
            tabCard,
            LineEcharts,
        },
    })

    export default class Home extends Vue {
        private mounted() {
            this.init();
        }

        private init() {
            const self: any = this;
            self.$axios.post(self.$apis.address.addRess).then((res: any) => {
                // this.$store.dispatch('user/userInfo', this.userinfo);
            }).catch((err: any) => {
                console.log(err);
            });
        }
    }
</script>

<style lang="stylus" scoped>
.home{
    &-tab-card{
        padding-bottom 40px
        h3{
            padding-bottom 20px
        }
    }
    &-line-echarts{
        background #fff
        padding 5px
        border-radius 10px
    }
}
</style>
