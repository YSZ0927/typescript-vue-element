<template>
    <el-aside class="left-menu" width="auto">
        <div class="left-menu-header">
            <!-- <img src="~assets/images/logo.png" alt=""> -->
            <p v-if="isCollapse">come on baby</p>
            <p v-else>come</p>
            <span class="left-menu-header-icon" @click="isCollapse = !isCollapse">
                <i :class="!isCollapse? 'rotate-down': ''"></i>
                <i :class="!isCollapse? 'rotate-none': ''"></i>
                <i :class="!isCollapse? 'rotate-up': ''"></i>
            </span>
        </div>
        <div class="aside-menu" v-if="isCollapse">
            <div class="aside-menu-item" v-for="(item, i) in menuList" :key="i">
                <span class="aside-menu-item-title" v-if="item.title">{{item.title}}</span>
                <p v-for="(el, j) in item.twoNav"
                    :key="j"
                    @click="changeMenu(el.path)"
                    :class="{'aside-menu-item-active': el.path=== activeIndex}">
                    <span class="">
                        <i :class="['iconfont', item.icon]"></i>
                        {{el.title}}
                    </span>
                </p>
            </div>
        </div>
        <div class="aside-menu-icon" v-else>
            <div class="aside-menu-icon-item" v-for="(item, i) in menuList" :key="i">
                <el-tooltip
                    v-for="(el, j) in item.twoNav"
                    :key="j"
                    :content="el.title"
                    placement="right"
                    effect="dark">
                    <p
                        class="icon-p"
                        @click="changeMenu(el.path)"
                        :class="{'aside-menu-icon-item-active': el.path=== activeIndex}">
                        <i :class="['iconfont', item.icon]"></i>
                    </p>
                </el-tooltip>
            </div>
        </div>
    </el-aside>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator';
    import { Route } from 'vue-router';

    @Component
    export default class WokenAside extends Vue {
        private isCollapse: boolean = true;

        private activeIndex: String = '/home';

        private menuList: object[] = [
            {
                title: '',
                id: '0',
                path: '',
                icon: 'SA_fenxi',
                twoNav: [
                    {
                        title: '首页',
                        path: '/home',
                    },
                ],
            },
            {
                title: '用户',
                id: '1',
                path: '',
                icon: 'SA_yonghuzu',
                twoNav: [
                    {
                        title: '用户分析',
                        path: '/user/userAnalyze',
                    },
                ],
            },
            {
                title: '商品信息',
                path: '',
                id: '2',
                icon: 'SA_iconsp1',
                twoNav: [
                    {
                        title: '商品列表',
                        path: '/goods/goodsList',
                    },
                    {
                        title: '新增商品',
                        path: '/goods/editGoods',
                    },
                ],
            },
        ];

        @Watch('$route', { immediate: true })
        private changeRouter(route: Route) {
            this.activeIndex = route.path;
        }

        private handleOpen() {
            const self: any = this;
        }

        private changeMenu(url: string) {
            const self: any = this;
            self.activeIndex = url;
            self.$router.push({
                path: url,
            });
        }

        private handleClose() {
            const self: any = this;
        }

        private jump(url: string) {
            const self: any = this;
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../../assets/styles/variable.styl';
    .left-menu{
        text-align: left;
        overflow visible
        &-header{
            text-align: center;
            position relative
            width 100%
            img{
                width: 50px;
            }
            p{
                line-height 60px
                font-weight 600
            }
            &-icon{
                text-align center
                position absolute
                padding 12px 5px
                width 40px
                height 40px
                line-height 40px
                right -50px
                top 11px
                // background #545c64
                border-radius 20px
                // box-shadow:6px 0px 6px #333333;
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
                    background #fff
                }
            }

        }
        &-list:not(.el-menu--collapse) {
            width: 200px;
            min-height: 400px;
        }
    }
    .aside-menu{
        font-size 14px
        padding 20px 20px 0 0
        transition .5s ease-out
        &-item{
            &-title{
                display block
                font-size 12px
                color #ccc
                padding 15px 20px 5px

            }
            p{
                padding-left 20px
                box-sizing border-box
                cursor pointer
                span{
                    padding 5px 10px
                    display inline-block
                    width 130px
                    border-radius 4px
                    i{
                        margin-right 5px
                    }
                }
            }
            &-active{
                border-left 3px solid $color-aside
                color #fff
                span{
                    background $color-aside
                }
            }
        }
    }
    .aside-menu-icon{
        font-size 14px
        padding-top 20px
        transition .5s ease-out
        &-item{
            .icon-p{
                padding 5px 20px
            }
            &-active{
                border-left 3px solid $color-aside
                color #fff
                i{
                    color $color-aside
                }
            }
        }
    }
    .el-menu{
        border: none;
    }
    .left-menu-list{
    }
</style>
