import { VIEW } from '@/config/constants'
import { createRouter, createWebHistory } from 'vue-router'
import DirectoryView from "../views/DirectoryView.vue"
import LoginView from "../views/LoginView.vue"

const routes = [
    {
        path: '/',
        name: VIEW.DIRECTORY_VIEW,
        component: DirectoryView
    },
    {
        path: '/login',
        name: VIEW.LOGIN_VIEW,
        component: LoginView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
