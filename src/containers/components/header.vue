<template>
    <div class="admin-common-header">
        <span></span>
    </div>
</template>

<script>
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class WokenHeader extends Vue {}
</script>

<style lang="stylus" scoped>
    .admin-common-header {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 60px;
        // box-shadow:1px 2px 7px rgba(0,0,0,.4);
        // background: rgba(84, 92, 100, .8);
        span{
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
