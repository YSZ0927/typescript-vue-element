<template>
    <div :class="className" ref="firstChats" :style="{width:width,height:height}"></div>
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
        name: 'CityMap',
    })
    export default class DisMap extends Vue {
        @Prop({ default: 'charts' })
        className!: string

        @Prop({ default: '200px' })
        width!: string

        @Prop({ default: '200px' })
        height!: string

        @Provide()
        chart: any = null

        @Prop() private areaList!: object;

        // @Provide()
        // resizeHandler: any = null

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
            console.log(11111)
        }

        private setOptions(): void {
            const xAxisData = [];
            const data = [];
            const data2 = [];
            for (let i = 0; i < 50; i += 1) {
                xAxisData.push(i);
                data.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
                data2.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 3);
            }
            this.chart.setOption({
                backgroundColor: '#08263a',
                grid: {
                    left: '5%',
                    right: '5%',
                },
                xAxis: [
                    {
                        show: false,
                        data: xAxisData,
                    },
                    {
                        show: false,
                        data: xAxisData,
                    },
                ],
                visualMap: {
                    show: false,
                    min: 0,
                    max: 50,
                    dimension: 0,
                    inRange: {
                        color: [
                            '#4a657a',
                            '#308e92',
                            '#b1cfa5',
                            '#f5d69f',
                            '#f5898b',
                            '#ef5055',
                        ],
                    },
                },
                yAxis: {
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#4a657a',
                        },
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#08263f',
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                },
                series: [
                    {
                        name: 'back',
                        type: 'bar',
                        data: data2,
                        z: 1,
                        itemStyle: {
                            normal: {
                                opacity: 0.4,
                                barBorderRadius: 5,
                                shadowBlur: 3,
                                shadowColor: '#111',
                            },
                        },
                    },
                    {
                        name: 'Simulate Shadow',
                        type: 'line',
                        data,
                        z: 2,
                        showSymbol: false,
                        animationDelay: 0,
                        animationEasing: 'linear',
                        animationDuration: 1200,
                        lineStyle: {
                            normal: {
                                color: 'transparent',
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: '#08263a',
                                shadowBlur: 50,
                                shadowColor: '#000',
                            },
                        },
                    },
                    {
                        name: 'front',
                        type: 'bar',
                        data,
                        xAxisIndex: 1,
                        z: 3,
                        itemStyle: {
                            normal: {
                                barBorderRadius: 5,
                            },
                        },
                    },
                ],
                animationEasing: 'elasticOut',
                animationEasingUpdate: 'elasticOut',
                animationDelay(idx: any) {
                    return idx * 20;
                },
                animationDelayUpdate(idx: any) {
                    return idx * 20;
                },
            });
        }

        private initChart(): void {
            this.chart = echarts.init(this.$refs.firstChats as HTMLCanvasElement);
            this.setOptions();
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

<style scoped>

</style>
