<template>
    <div class="common-header">
        <p class="common-header-search">
            <el-input
                size="small"
                placeholder="search..."
                prefix-icon="el-icon-search"></el-input>
        </p>
        <p>
            <span></span>
        </p>
    </div>
</template>

<script>
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class WokenHeader extends Vue {}
</script>

<style lang="stylus" scoped>
    .common-header {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 60px;
        &-search{
            width 300px
            .el-input__inner{
                // background-color #ccc!important
            }
        }
        span{
            display inline-block
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #ccc;
            img{
                border-radius: 50%;
            }
        }
    }
</style>
<style lang="stylus">
    
</style>
