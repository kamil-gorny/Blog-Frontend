import {createRouter, createWebHistory} from "vue-router";
import Post from "@/views/Post";
import Home from "@/views/Home";


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

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;