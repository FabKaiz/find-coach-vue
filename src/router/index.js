/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index';

// Pages
import CoachesList from '../views/coaches/CoachesList';

// Optimisation, async components
const CoachDetail       = () => import('../views/coaches/CoachDetail');
const CoachRegistration = () => import('../views/coaches/CoachRegistration');
const ContactCoach      = () => import('../views/requests/ContactCoach');
const UserAuth          = () => import('../views/auth/UserAuth');
const RequestsReceived  = () => import('../views/requests/RequestsReceived');
const NotFound          = () => import('../views/NotFound');

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
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else next();
});

export default router;
