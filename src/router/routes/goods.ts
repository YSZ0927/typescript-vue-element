
import Layout from '@/containers/index.vue';

export default [{
    path: '/goods',
    name: 'goods',
    component: Layout,
    children: [
        {
            path: 'goodsList',
            name: 'goodsList',
            component: () => import('@/views/goods/goodsList/index.vue'),
        },
        {
            path: 'editGoods',
            name: 'editGoods',
            component: () => import('@/views/goods/editGoods/index.vue'),
        },
    ],
}];
