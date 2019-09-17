<template>
    <div class="line-echart" ref="lineEchart" :style="{width:width,height:height}"></div>
</template>

<script lang="ts">
    import {
        Component,
        Vue,
        Prop,
        Provide,
    } from 'vue-property-decorator';
    import * as echarts from 'echarts';

    @Component({
        name: 'LineEchart',
    })
    export default class LineEchart extends Vue {
        @Prop({ default: '100%' })
        width!: string

        @Prop({ default: '400px' })
        height!: string

        @Provide()
        chart: any = null

        private mounted() {
            this.initChart();
            // this.resizeHandler = debounce(() => {
            //     if (this.chart) {
            //         this.chart.resize()
            //     }
            // }, 100)
            window.addEventListener('resize', this.resizeHandler);
        }

        private resizeHandler(): void {
            this.chart.resize();
        }

        private setOptions(): void {
            this.chart.setOption({
                 xAxis: {
                    type: 'category',
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                },
                series: [{
                    data: [820, 932, 400, 934, 1290, 100, 1320],
                    itemStyle: {
                        normal: {
                            color: '#0fa0f8',
                        },
                    },
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(15, 160, 248, .5)',
                            }, {
                                offset: 1, color: 'transparent',
                            }],
                            global: false,
                        },
                    },
                    type: 'line',
                }],
            });
        }

        private initChart(): void {
            this.chart = echarts.init(this.$refs.lineEchart as HTMLCanvasElement);
            this.setOptions();
            this.chart.resize();
        }

        private beforeDestroy() {
            if (!this.chart) {
                return;
            }
            window.removeEventListener('resize', this.resizeHandler);
            this.chart.dispose();
            this.chart = null;
        }
    }
</script>

<style lang="stylus" scoped>
</style>
