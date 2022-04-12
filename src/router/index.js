import {createRouter, createWebHistory} from "vue-router";
import Post from "@/views/Post";
import Home from "@/views/Home";
import Signup from "@/views/Signup";
import Login from "@/views/Login";
import {Role} from "@/helpers/role";
import {authenticationService} from "@/services/auth_service";
import AdminPanel from "@/views/AdminPanel";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/posts/:id',
        name: 'Post',
        component: Post,
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/admin',
        name: 'Admin',
        component: AdminPanel,
        meta: { authorize: [Role.Admin] }
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})


router.beforeEach((to, from, next) =>{
    const { authorize } = to.meta;
    const currentUser = authenticationService.currentUserValue;

    if (authorize) {
        if (!currentUser) {
            return next({ path: '/login', query: { returnUrl: to.path } });
        }
        if (authorize.length && !authorize.includes(currentUser.role)) {
            return next({ path: '/' });
        }
    }
    next();
})


export default router;