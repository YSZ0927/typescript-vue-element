<template>
    <div class="guide-demo">
        <div class="guide-demo-item-box">
            <p v-for="(item, index) in list" :key="index" v-show="item.show">
                {{item.text}}
                <button>下一步</button>
            </p>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    {
                        text: '这是1',
                        show: true,
                    },
                    {
                        text: '这是2',
                        show: false,
                    },
                    {
                        text: '这是3',
                        show: false,
                    },
                    {
                        text: '这是4',
                        show: false,
                    },
                    {
                        text: '这是5',
                        show: false,
                    },
                ]
            }
        },
    }
</script>

<style lang="stylus" scoped>
.guide-demo{
    background: rgba(0,0,0,.0.3)
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100vh
    &-item-box{
        position relative
        width 100%
        height 100vh
        p{
            position absolute
        }
    }
}
</style>