<template>
    <div class="add-shop">
        <div class="inline-block">
            <h5>店铺名称</h5>
            <el-input size="small" width="200" v-model="storeForm.storeName"></el-input>
        </div>
        <div class="inline-block">
            <h5>联系电话</h5>
            <el-input size="small" width="200" v-model="storeForm.tel"></el-input>
            <h5>email</h5>
            <el-input size="small" width="200" v-model="storeForm.email"></el-input>
        </div>
        <div class="inline-block">
            <h5>发货地</h5>
            <eric-address></eric-address>
            <h5>详细地址</h5>
            <el-input
                size="small"
                type="textarea"
                v-model="storeForm.storeStreet"
                :rows="4"
                width="200"></el-input>
        </div>
        <el-button @click="submit" type="primary" class="add-shop-submit">提交信息</el-button>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    interface storeForm{
        storeName: string,
        tel: string,
        email: string,
        storeAddress: string,
        storeStreet: string,
    }

    @Component({})
    export default class addShop extends Vue {
        private storeForm: storeForm = {
            storeName: '',
            tel: '',
            email: '',
            storeAddress: '',
            storeStreet: '',
        }

        private submit() {
            const self: any = this;
            self.$axios.post(self.$apis.store.editStore, {
                ...self.storeForm,
                userId: 1,
            }).then((res: any) => {
                if (res.code === 200) {
                    self.$emit('update:status', 3);
                    self.$store.dispatch('user/login', { openStore: 1 });
                }
            });
        }
    }
</script>
<style lang="stylus" scoped>
.add-shop{
    background #fff
    padding 20px
    border-radius 8px
    .inline-block{
        margin 0 auto
        width 40%
        padding 10px
        h5{
            padding 5px 0
        }
    }
    &-submit{
        display block
        margin 0 auto
    }
}
</style>
