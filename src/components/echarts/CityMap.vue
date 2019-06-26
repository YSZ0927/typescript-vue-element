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
    import 'echarts/map/js/china';

    @Component({
        name: 'CityMap',
    })
    export default class DisMap extends Vue {
        @Prop({ default: 'charts' })
        className!: string

        @Prop({ default: '400px' })
        width!: string

        @Prop({ default: '300px' })
        height!: string

        @Provide()
        chart: any = null

        @Prop() private areaList!: object;

        // @Provide()
        // resizeHandler: any = null
        private geoCoordMap: any = {
            鄂尔多斯: [109.781327, 39.608266],
            招远: [120.38, 37.35],
            舟山: [122.207216, 29.985295],
            齐齐哈尔: [123.97, 47.33],
            盐城: [120.13, 33.38],
            赤峰: [118.87, 42.28],
        }

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
            console.log(11111);
        }

        private convertData(data: any) {
            const res = [];
            for (let i = 0; i < data.length; i += 1) {
                const geoCoord: any = this.geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                    });
                }
            }
            return res;
        }

        private setOptions(): void {
            const data: any = [
                {
                    name: '鄂尔多斯',
                    value: 102,
                },
                {
                    name: '招远',
                    value: 42,
                },
                {
                    name: '舟山',
                    value: 62,
                },
                {
                    name: '齐齐哈尔',
                    value: 80,
                },
                {
                    name: '盐城',
                    value: 75,
                },
                {
                    name: '赤峰',
                    value: 96,
                },
            ];
            this.chart.setOption({
                backgroundColor: '#404a59',
                title: {
                    text: '全国数据分布图',
                    subtext: 'data from PM25.in',
                    sublink: 'http://www.pm25.in',
                    left: 'center',
                    textStyle: {
                        color: '#fff',
                    },
                },
                tooltip: {
                    trigger: 'item',
                },
                legend: {
                    orient: 'vertical',
                    y: 'bottom',
                    x: 'right',
                    data: ['数量'],
                    textStyle: {
                        color: '#fff',
                    },
                },
                geo: {
                    map: 'china',
                    label: {
                        emphasis: {
                            show: false,
                        },
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#323c48',
                            borderColor: '#111',
                        },
                        emphasis: {
                            areaColor: '#2a333d',
                        },
                    },
                },
                series: [
                    {
                        name: '数量',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: this.convertData(data),
                        symbolSize: (val: any) => val[2] / 10,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: false,
                            },
                            emphasis: {
                                show: true,
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: '#ddb926',
                            },
                        },
                    },
                    {
                        name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: this.convertData(data.sort((a: any, b: any) => b.value - a.value)
                        .slice(0, 6)),
                        symbolSize: (val: any) => val[2] / 10,
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke',
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true,
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: '#f4e925',
                                shadowBlur: 10,
                                shadowColor: '#333',
                            },
                        },
                        zlevel: 1,
                    },
                ],
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
