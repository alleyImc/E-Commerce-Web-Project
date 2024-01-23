import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'IndexPage', component: () => import('pages/IndexPage.vue') },

      {
        path: 'KampanyaPage',
        component: () => import('pages/KampanyaPage.vue'),
      } /*
      {
        path: 'compHeader1',
        component: () => import('components/compHeader1.vue'),
      },
      {
        path: 'compHeader2',
        component: () => import('components/compHeader2.vue'),
      },
      { path: 'compSign', component: () => import('components/compSign.vue') },
      {
        path: 'compCampaign',
        component: () => import('components/compCampaign.vue'),
      },
      {
        path: 'compHediye',
        component: () => import('components/compHediye.vue'),
      },
      {
        path: 'compCarousel',
        component: () => import('components/compCarousel.vue'),
      },
      {
        path: 'compPhoto',
        component: () => import('components/compPhoto.vue'),
      },
      { path: 'compCard', component: () => import('components/compCard.vue') },
      {
        path: 'compFooter',
        component: () => import('components/compFooter.vue'),
      },
      { path: 'compLeft', component: () => import('components/compLeft.vue') },*/,
    ],
  },
  {
    path: '/Kampanya/',
    component: () => import('layouts/MainLayout2.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/KampanyaPage.vue'),
      },
    ],
  },
  {
    path: '/Hediye/',
    component: () => import('layouts/MainLayout3.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/HediyePage1.vue'),
      },
    ],
  },
  {
    path: '/Sign/',
    component: () => import('layouts/MainLayout4.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/SignPage.vue'),
      },
    ],
  },
  {
    path: '/Left/',
    component: () => import('layouts/MainLayout5.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/LeftPage.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
