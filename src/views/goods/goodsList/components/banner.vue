<template>
    <el-carousel class="banner-goods">
        <el-carousel-item v-for="item in 4" :key="item" class="banner-goods-item">
            <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    export default class banner extends Vue {

    }
</script>

<style lang="stylus" scoped>
.banner-goods{
    height 300px
    border-radius 10px
    &-item{
        background green
        h3{
            text-align center
            font-size 38px
        }
    }
}
</style>
