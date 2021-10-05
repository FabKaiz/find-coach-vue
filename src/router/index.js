import { createRouter, createWebHistory } from 'vue-router';

// Pages
import CoachDetail from '../views/coaches/CoachDetail';
import CoachesList from '../views/coaches/CoachesList';
import CoachRegistration from '../views/coaches/CoachRegistration';
import ContactCoach from '../views/requests/ContactCoach';
import RequestsReceived from '../views/requests/RequestsReceived';
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
  { path: '/register', component: CoachRegistration },
  { path: '/requests', component: RequestsReceived },
  { path: '/:notFound(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
