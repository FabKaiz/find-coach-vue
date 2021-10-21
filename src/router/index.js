import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index'

// Pages
import CoachDetail from '../views/coaches/CoachDetail';
import CoachesList from '../views/coaches/CoachesList';
import CoachRegistration from '../views/coaches/CoachRegistration';
import ContactCoach from '../views/requests/ContactCoach';
import RequestsReceived from '../views/requests/RequestsReceived';
import UserAuth from '../views/auth/UserAuth';
import NotFound from '../views/NotFound';

const routes = [
  { path: '/', redirect: '/coaches' },
  { path: '/coaches', component: CoachesList },
  {
    path: '/coaches/:id',
    component: CoachDetail,
    props: true,
    children: [{ path: 'contact', component: ContactCoach }],
  },
  {
    path: '/register',
    component: CoachRegistration,
    meta: { requiresAuth: true },
  },
  {
    path: '/requests',
    component: RequestsReceived,
    meta: { requiresAuth: true },
  },
  { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
  { path: '/:notFound(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && !store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
