import Vue from 'vue';

const prefix: string = 'api';

Vue.prototype.$apis = {
    user: {
        userInfo: `${prefix}/user`,
    },
    address: {
        addRess: `${prefix}/address`,
    },
    goods: {
        goodsList: `${prefix}/goodsList`,
    },
};
