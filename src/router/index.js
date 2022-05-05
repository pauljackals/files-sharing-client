import { VIEW } from '@/config/constants'
import { createRouter, createWebHistory } from 'vue-router'
import DirectoryView from "../views/DirectoryView.vue"
import LoginView from "../views/LoginView.vue"
import RegisterView from "../views/RegisterView.vue"

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
    },
    {
        path: '/register',
        name: VIEW.REGISTER_VIEW,
        component: RegisterView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
