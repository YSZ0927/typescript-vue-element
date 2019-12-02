import { Commit, Dispatch } from 'vuex';
import Vue from 'vue';
import router from '@/router/index';

const that: any = new Vue();

export interface State {
    userInfo: any,
}

const state: State = {
    userInfo: null,
};

const mutations = {
    // eslint-disable-next-line
    saveUserInfo(state: any, payload: any) {
        state.userInfo = {
            ...state.userInfo,
            ...payload,
        };
    },
};

const actions = {
    login(context: {commit: Commit}, payload: any) {
        if (payload.openStore) {
            context.commit('saveUserInfo', payload);
            return;
        }
        that.$axios.post(that.$apis.user.login, payload).then((res: any) => {
            if (res.code === 200) {
                context.commit('saveUserInfo', res.data);
                router.push({
                    path: '/',
                });
            }
        });
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
