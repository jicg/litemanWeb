import {createRouter, createWebHashHistory} from "vue-router";
import LoginPage from "./pages/LoginPage.vue";
import TablePage from "./pages/TablePage.vue";
import HomePage from "./pages/HomePage.vue";
import SubSystemPage from "./pages/SubSystemPage.vue";

const router = createRouter({ history: createWebHashHistory(), routes: [
        {path: '/', component: SubSystemPage},
        {
            path: '/mod/:code', component: HomePage,
            children: [
                {
                    path: 'table/:tableId', component: TablePage

                }
            ]
        },
        {path: '/login', component: LoginPage},
        {path: '/table/:tableId', component: TablePage},
    ],
})
const isAuthenticated = true
router.beforeEach((to, from, next) => {
    if (to.path !== '/login' && !isAuthenticated) {
        next({path: "/login"})
    } else {
        next()
    }
})
export default router;