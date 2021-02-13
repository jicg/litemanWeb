import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(), routes: [
        {path: '/', component:() =>  import("./views/SubSystemPage.vue")},
        {
            path: '/mod/:code', component: () =>import("./views/HomePage.vue"),
            children: [
                {
                    path: 'table/:tableCode', component:() => import("./views/TablePage.vue")
                },
                {
                    path: 'menu/:menuCode', component:() => import("./views/MenuPage.vue")
                }
            ]
        },
        {path: '/login', component: import("./views/LoginPage.vue")},
        {path: '/table/:tableCode', component: import("./views/TablePage.vue")},
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