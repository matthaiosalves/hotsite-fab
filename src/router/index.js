import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NProgress from '../nprogress';

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: HomeView,
    meta: {
      title: 'Início'
    }
  },
  {
    path: '/sobre-nos',
    name: 'sobre-nos',
    component: () => import('../views/SobreNosView.vue'),
    meta: {
      title: 'Sobre Nós'
    }
  },
  {
    path: '/instituicao/fardamentos',
    name: 'Fardamentos',
    component: () => import('../views/FardamentosView.vue'),
    meta: {
      title: 'Fardamentos'
    }
  },
  {
    path: '/apostilas/peles-e-cabelos',
    name: 'Peles e Cabelos',
    component: () => import('../views/PelesCabelosView.vue'),
    meta: {
      title: 'Peles e Cabelos'
    }
  },
  {
    path: '/perfil/:user',
    name: 'Perfil',
    component: () => import('../views/PerfilView.vue'),
    props: true,
    meta: {
      title: 'Perfil do Usuário'
    }
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const baseTitle = 'Força Aérea Brasileira Habbo';
  document.title = `${baseTitle} - ${to.meta.title || ''}`;
  window.scrollTo(0, 0);
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done(); 
});

export default router;
