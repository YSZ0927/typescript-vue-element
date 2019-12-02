import Vue from 'vue';

const prefix: string = '/api';

Vue.prototype.$apis = {
    user: {
        login: `${prefix}/users/login`,
    },
    address: {
        addRess: `${prefix}/address`,
    },
    goods: {
        goodsList: `${prefix}/goodsList`,
        editGoods: `${prefix}/goods/editGoods`,
    },
    store: {
        editStore: `${prefix}/store/editStore`,
        storeInfo: `${prefix}/store/storeInfo`,
        storeDyList: `${prefix}/store/storeDyList`,
    },
    upload: {
        uploadImg: `${prefix}/upload/uploadImg`,
    },
};
