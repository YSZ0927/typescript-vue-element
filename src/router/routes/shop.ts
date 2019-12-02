
import Layout from '@/containers/index.vue';

export default [{
    path: '/shop',
    name: 'shop',
    component: Layout,
    children: [
        {
            path: 'shopInfo',
            name: 'shopInfo',
            component: () => import('@/views/shop/index.vue'),
        },
    ],
}];
