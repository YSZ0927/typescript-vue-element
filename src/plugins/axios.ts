import Vue, { PluginObject } from 'vue';
import axios from 'axios';

axios.interceptors.request.use(
    (config) => {
        config.headers['X-Requested-With'] = 'XMLHttpRequest';
        return config;
    },
    err => (Promise.reject(err)),
);

axios.interceptors.response.use(
    response => response,
    err => (Promise.reject(err)),
);

const Plugin: PluginObject<any> = {
    install: (Vue) => {
        Vue.$axios = axios;
    },
};
Plugin.install = (Vue) => {
    Vue.$axios = axios
    window.axios = axios
    Object.defineProperties(Vue.prototype, {
        $axios: {
            get() {
                return axios;
            },
        },
    });
}
Vue.use(Plugin)
export default Plugin;