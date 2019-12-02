<template>
    <el-container class="worken-contain">
        <woken-aside :userInfo="userInfo"></woken-aside>
        <el-container>
            <el-header>
                <woken-header></woken-header>
            </el-header>
            <el-main>
                <div class="worken-contain-main">
                    <router-view/>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import wokenAside from './components/aside.vue';
    import wokenHeader from './components/header.vue';

    @Component({
        components: {
            wokenAside,
            wokenHeader,
        },
    })
    export default class Contain extends Vue {
        get key() {
            const self: any = this;
            console.log(self.$route.fullPath);
            const date = Date.parse(new Date().toString());
            return self.$route.fullPath;
        }

        get userInfo() {
            const that: any = this;
            const info = that.$store.state.user.userInfo;
            return info;
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../assets/styles/variable.styl';
    .el-header{
        padding: 0;
    }
    .worken-contain {
        height 100vh!important
        .el-main{
            background $color-bodyBackground
        }
        &-main{
        }
    }
</style>
