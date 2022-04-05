import {createRouter, createWebHistory} from "vue-router";
import Post from "@/views/Post";
import Home from "@/views/Home";
import Signup from "@/views/Signup";
import Login from "@/views/Login";


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

    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach(async (to, from, next) => {
    if (to.meta.requiresAuth && to.path !== "/login" && localStorage.getItem("token") == null) {
        next({name: 'Login'})
        console.log(to.meta.requiresAuth);
    } else {
        next();
    }
});

export default router;