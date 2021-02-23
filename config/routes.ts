export default [
  { path: '/login', component: 'login' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', component: '@/pages' },
      { path: '/Asset', component: '@/pages/Asset' }
    ],
  },
]
