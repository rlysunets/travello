import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')
    },
    {
        path: '/why-us',
        name: 'why-us',
        component: () => import('../views/WhyUs.vue')
    },
    {
        path: '/tours',
        name: 'tours',
        component: () => import('../views/tours/Tours.vue')
    },
        {
        path: '/tours/:slug',
        name: 'oneTour',
        component: () => import('../views/tours/OneTour.vue')
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('../views/Contacts.vue')
    },
    {
        path: '/explores',
        name: 'explores',
        component: () => import('../views/Explores.vue')
    },
    {
        path: '/reviews',
        name: 'reviews',
        component: () => import('../views/Reviews.vue')
    },
    {
        path: '/quastions',
        name: 'quastions',
        component: () => import('../views/Quastions.vue')
    },
    {
        path: '/news',
        name: 'news',
        component: () => import('../views/news/News.vue')
    },
    {
        path: '/news/:title',
        name: 'oneNews',
        component: () => import('../views/news/One.vue')
    },
        {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('../views/404.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { 
            top: 0
        }
    },
})

export default router
