
import Layout from '@/containers/index.vue';

export default [{
    path: '/user',
    name: 'user',
    component: Layout,
    children: [
        {
            path: '/user',
            name: 'show',
            component: () => import('@/views/user/Show.vue'),
        },
        {
            path: 'info',
            name: 'info',
            component: () => import('@/views/user/Info.vue'),
        },
    ],
}];
