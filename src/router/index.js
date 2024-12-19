import { createRouter, createWebHashHistory } from 'vue-router';

// Ленивый импорт всех компонентов
const HomePage = () => import('../views/HomePage.vue');
const AboutPage = () => import('../views/AboutPage.vue');
const ContactsPage = () => import('../views/ContactsPage.vue');
const SalePage = () => import('../views/SalePage.vue');
const ReviewPage = () => import('../views/ReviewPage.vue');
const CatalogPage = () => import('../views/CatalogPage.vue');
const CatalogMacaronPage = () => import('../views/CatalogMacaronPage.vue');
const ProductDetails = () => import('../views/ProductDetails.vue');
const AuthPage = () => import('../views/AuthPage.vue');
const ShopPage = () => import('../views/ShopPage.vue');

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/contacts', component: ContactsPage },
    { path: '/sale', component: SalePage },
    { path: '/review', component: ReviewPage },
    { path: '/catalog', component: CatalogPage },
    { path: '/macaron', component: CatalogMacaronPage },
    { path: "/product/:id", name: "ProductDetails", component: ProductDetails },
    { path: '/auth', component: AuthPage },
    { path: '/shop', component: ShopPage },
];

const router = createRouter({
    history: createWebHashHistory(), // Используем hash-режим для маршрутизации
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 }; // Перемещаемся в верхнюю часть страницы
      }
    },
  });

export default router;