import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(), routes: [
        {path: '/', component:() =>  import("./pages/SubSystemPage.vue")},
        {
            path: '/mod/:code', component: () =>import("./pages/HomePage.vue"),
            children: [
                {
                    path: 'table/:tableCode', component:() => import("./pages/TablePage.vue")
                },
                {
                    path: 'menu/:menuCode', component:() => import("./pages/MenuPage.vue")
                }
            ]
        },
        {path: '/login', component: import("./pages/LoginPage.vue")},
        {path: '/table/:tableCode', component: import("./pages/TablePage.vue")},
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