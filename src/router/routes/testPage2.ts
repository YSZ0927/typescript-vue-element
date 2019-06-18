
import Layout from '@/containers/index.vue';

export default [{
    path: '/test',
    name: 'psageTest',
    component: Layout,
    children: [
        {
            path: '/test',
            name: 'index',
            component: () => import('@/views/testPage/Home.vue'),
        },
        {
            path: 'about',
            name: 'about',
            component: () => import('@/views/testPage/About.vue'),
        },
    ],
}];
