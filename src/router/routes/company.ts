
import Layout from '@/containers/index.vue';

export default [{
    path: '/company',
    name: 'company',
    component: Layout,
    children: [
        {
            path: 'companyList',
            name: 'companyList',
            component: () => import('@/views/company/companyList/index.vue'),
        },
    ],
}];
