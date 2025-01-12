import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../App.vue'), // Página inicial
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('../pages/Sobre.vue'), // Página Sobre
  },
  {
    path: '/recursos',
    name: 'Recursos',
    component: () => import('../pages/Recursos.vue'), // Página Recursos
  },
  {
    path: '/precos',
    name: 'Preços',
    component: () => import('../pages/Precos.vue'), // Página Preços
  },
  {
    path: '/contato',
    name: 'Contato',
    component: () => import('../pages/Contato.vue'), // Página Contato
  },
  {
    path: '/termos-e-condicoes',
    name: 'Termos e Condições',
    component: () => import('../pages/TermsAndConditions.vue'), // Página Termos e Condições
  },
  {
    path: '/politicas-de-privacidade',
    name: 'Políticas de Privacidade',
    component: () => import('../pages/PrivacyPolicy.vue'), // Página Políticas de Privacidade
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      // Retorna à posição salva ao usar "voltar" ou "avançar"
      return savedPosition;
    }
    if (to.hash) {
      // Rola suavemente para um elemento específico se houver um hash na URL
      return { el: to.hash, behavior: 'smooth' as ScrollBehavior };
    }
    // Retorna ao topo da página por padrão
    return { top: 0, behavior: 'smooth' };
  },
});

export default router;
