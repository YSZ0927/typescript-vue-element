
import Layout from '@/containers/index.vue';

export default [{
    path: '/user',
    name: '用户',
    component: Layout,
    children: [
        {
            path: 'userAnalyze',
            name: '用户分析',
            component: () => import('@/views/user/user-analyze/index.vue'),
        },
    ],
}];
