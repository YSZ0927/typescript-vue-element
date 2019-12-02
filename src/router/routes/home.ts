
import Layout from '@/containers/index.vue';

export default [{
    path: '/',
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
