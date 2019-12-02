<template>
    <div class="eric-address">
        <el-cascader
            size="small"
            v-model="addressValue"
            :props="addressProps"
            placeholder='选择省市区'
            :options="addressArray"></el-cascader>
    </div>
</template>

<script lang="ts">
    import axios from 'axios';
    import {
        Component,
        Prop,
        Vue,
        Watch,
    } from 'vue-property-decorator';

    const areaJson = '/address.json';

    @Component({
        name: 'ericAddress',
    })
    export default class address extends Vue {
        @Prop() private columnsConfig!: object;

        private addressArray: object[] = [];

        private addressValue: string = '';

        @Watch('addressValue')
        addressChange(val: any) {
            console.log(val);
        }

        private addressProps: object = {
            children: 'subarea',
            label: 'areaname',
            value: 'areaname',
        };

        private mounted() {
            this.getAddressJson();
        }

        private getAddressJson() {
            const self: any = this;
            axios.get(areaJson).then((res) => {
                self.addressArray = res.data.data;
            });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.eric-address{
    .el-cascader{
        width 100%
    }
}

</style>
