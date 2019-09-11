
import Layout from '@/containers/index.vue';

export default [{
    path: '/home',
    name: 'home',
    component: Layout,
    children: [
        {
            path: '',
            name: 'home1',
            component: () => import('@/views/home/index.vue'),
        },
    ],
}];
