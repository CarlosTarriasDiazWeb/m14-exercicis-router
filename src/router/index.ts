import { createRouter, createWebHistory } from 'vue-router'
import CounterView from '@/views/CounterView.vue';
import UserView from '@/views/UserView.vue';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import ProductDetailView from '@/views/ProductDetailView.vue';
import ProductList from '@/views/ProductList.vue';
import SearchViewVue from '@/views/SearchView.vue';
import ResultsView from '@/views/ResultsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/counter',
      name: 'counter',
      component: CounterView
    },
    {
      path: '/user/:postId/:username',
      name: 'user',
      component: UserView
    },
    {
      path: '/producte/:id',
      name: 'product',
      component: ProductDetailView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductList
    },
    {
      path: '/search',
      name: 'search',
      component: SearchViewVue
    },
    {
      path: '/resultats',
      name: 'resultats',
      component: ResultsView
    }
  ]
})

export default router
