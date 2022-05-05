import { VIEW } from '@/config/constants'
import { createRouter, createWebHistory } from 'vue-router'
import DirectoryView from "../views/DirectoryView.vue"
import LoginView from "../views/LoginView.vue"
import RegisterView from "../views/RegisterView.vue"
import AdminView from "../views/admin/AdminView.vue"
import AdminCodeView from "../views/admin/AdminCodeView.vue"
import AdminUserView from "../views/admin/AdminUserView.vue"

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
    },
    {
        path: '/admin',
        name: VIEW.ADMIN_VIEW,
        component: AdminView,
        redirect: {name: VIEW.ADMIN_CODE_VIEW},
        children: [
            {
                path: 'code',
                name: VIEW.ADMIN_CODE_VIEW,
                component: AdminCodeView
            },
            {
                path: 'user',
                name: VIEW.ADMIN_USER_VIEW,
                component: AdminUserView
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
