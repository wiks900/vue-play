import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';


import JacksPage from '@/views/JacksPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/cocktailListing',
    component: () => import ('@/views/cocktails/cocktailsPage.vue'),
  },
  {
    path: '/cocktailDetails/:id',
    component: () => import ('@/views/cocktails/cocktailDetails.vue'),
  },
  {
    path: '/JacksPage',
    name: 'JacksPage',
    component: JacksPage,
  }, {
    path: '/Customers',
    name: 'Customer Details',
    component: () => import ('@/views/customerDetails.vue'),
  },
  {
    path: '/dashboard/:id',
    component: JacksPage,
    children: [
      {
        path: '/dashboard/:id',
        component: JacksPage,
      },
      {
        path: '/dashboard/stats/:id',
        component: JacksPage,
      },
    ],
  },
  {
    path: '/PostcodeLookup',
    component: () => import ('@/views/PostcodeLookup.vue'),
    children: [
      {
        path: '/PostcodeLookup/:id',
        component: () => import ('@/views/PostcodeLookup.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
