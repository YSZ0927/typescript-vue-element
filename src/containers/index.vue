<template>
    <el-container class="worken-contain">
        <woken-aside></woken-aside>
        <el-container>
            <el-header height="80px">
                <woken-header></woken-header>
            </el-header>
            <el-main>
                <!-- <router-view :key="key">{{key}}</router-view> -->
                <router-view/>
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
    }
</script>

<style scoped>
    .el-main {
        color: #333;
        text-align: center;
        line-height: 160px;
    }
    .el-header{
        padding: 0;
    }
    .worken-contain {
        height: 100vh!important;
    }
</style>
