<template>
    <div class="add-step">
        <el-steps :active="stepNum" >
            <el-step title="选址开店" description="点击按钮创建店铺"></el-step>
            <el-step title="店铺信息" description="请输入您的店铺基本信息"></el-step>
            <el-step title="成功开业" description="恭喜你！开业成功"></el-step>
        </el-steps>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';

    @Component({
        components: {
        },
    })
    export default class addStep extends Vue {
        @Prop({ default: 1 }) private stepNum!: number;
    }
</script>

<style lang="stylus" scoped>
.add-step{
    padding 30px 100px
}
</style>
