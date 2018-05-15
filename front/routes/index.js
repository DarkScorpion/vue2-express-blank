
import mainRoute from './main.vue'
import standardRoute from './standardRout.vue'

const chankRoute = () => import('./chankRoute.vue')

const routes = [
  { path: '/', component: mainRoute },
  { path: '/standardRoute', component: standardRoute },
  { path: '/chankRoute', component: chankRoute },

  { path: '*', component: mainRoute }, //default route
];

export default routes;
