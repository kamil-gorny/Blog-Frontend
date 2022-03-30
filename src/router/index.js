import {createRouter, createWebHistory} from "vue-router";
import Post from "@/views/Post";
import Home from "@/views/Home";
import Register from "@/views/Register";


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
        path: '/register',
        name: 'Register',
        component: Register
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;