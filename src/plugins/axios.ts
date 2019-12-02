import Vue, { PluginObject } from 'vue';
import axios from 'axios';
import qs from 'qs';

const $axios = axios.create({
    transformRequest: [(data) => {
        const object = data;
        // for (const i in object) {
        //     const value = object[i];
        //     if (value == null || value === '') {
        //         delete object[i];
        //     }
        // }
        return qs.stringify(object, { allowDots: true });
    }],
});
$axios.interceptors.request.use(
    (config) => {
        config.headers['X-Requested-With'] = 'XMLHttpRequest';
        return config;
    },
    err => (Promise.reject(err)),
);

$axios.interceptors.response.use(
    response => response.data,
    err => (Promise.reject(err)),
);

const Plugin: PluginObject<any> = {
    install: () => {
        Vue.$axios = $axios;
    },
};
Plugin.install = () => {
    Vue.$axios = $axios;
    window.axios = $axios;
    Object.defineProperties(Vue.prototype, {
        $axios: {
            get() {
                return $axios;
            },
        },
    });
};
Vue.use(Plugin);
export default Plugin;
