import Home from '../views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const history = createWebHistory()
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
]
const router = createRouter({
    linkActiveClass: 'active',
    history,
    routes
})

export { router }
