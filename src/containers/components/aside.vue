<template>
    <el-aside class="left-menu" width="auto">
        <div class="left-menu-header">
            <!-- <img src="~assets/images/logo.png" alt=""> -->
            <span class="left-menu-header-icon" @click="isCollapse = !isCollapse">
                <i :class="!isCollapse? 'rotate-down': ''"></i>
                <i :class="!isCollapse? 'rotate-none': ''"></i>
                <i :class="!isCollapse? 'rotate-up': ''"></i>
            </span>
        </div>
        <el-menu
            :collapse="isCollapse"
            default-active="1-1-1"
            class="left-menu-list"
            background-color="#545c64"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
            :router="false"
            active-text-color="#ffd04b">
            <el-submenu index="1">
                 <template slot="title">
                    <i class="geek-icon geek-icon-main"></i>
                    <span>导航-one</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <!-- :route="{path: '/testPage1/page1'}"  -->
                    <el-menu-item index="1-1" @click="jump('/user')">选项1</el-menu-item>
                    <el-menu-item index="1-2" @click="jump('/user/info')">选项2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2" @click="jump('/test')">
                <i class="geek-icon geek-icon-menu" ></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="geek-icon geek-icon-main" ></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4" @click="jump('/test/about')">
                <i class="geek-icon geek-icon-setting" ></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class WokenAside extends Vue {
        private isCollapse: boolean = true;

        private handleOpen() {
            const self: any = this;
        }

        private handleClose() {
            const self: any = this;
        }

        private jump(url: string) {
            const self: any = this;
            self.$router.push({
                path: url,
            });
        }
    }
</script>

<style lang="stylus" scoped>
    .left-menu{
        text-align: left;
        overflow visible
        &-header{
            text-align: center;
            position relative
            height 40px
            width 100%
            img{
                width: 50px;
            }
            &-icon{
                text-align center
                position absolute
                padding 12px 5px
                width 40px
                height 40px
                line-height 40px
                right -20px
                background #545c64
                border-radius 20px
                box-shadow:6px 0px 6px #333333;
                color #fff
                i{
                    width 19px
                    height 2px
                    border-radius 2px
                    background #909399
                    display block
                    margin-bottom 4px
                    transition all .2s ease-in-out 0s
                }
                .rotate-down{
                    transform translateY(6px) rotate(45deg)
                }
                .rotate-up{
                    transform translateY(-6px) rotate(-45deg)
                }
                .rotate-none{
                    transition all .2s ease-in-out 0s
                    background #545c64
                }
            }

        }
        &-list:not(.el-menu--collapse) {
            width: 200px;
            min-height: 400px;
        }
    }
    .el-aside {
        background-color: rgb(84, 92, 100);
        box-shadow:2px 2px 6px #333333;
        // background-color: #5D5A59;
    }
    .el-menu{
        border: none;
    }
</style>
