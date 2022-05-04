import { createRouter, createWebHistory } from 'vue-router'
import DirectoryView from "../views/DirectoryView.vue"

const routes = [
    {
        path: '/',
        name: DirectoryView.name,
        component: DirectoryView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
