import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutMe from '../views/AboutMe.vue';
import RegisterPage from '../views/RegisterPage.vue';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutMe
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;