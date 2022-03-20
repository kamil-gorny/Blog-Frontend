import {createRouter, createWebHistory} from "vue-router";
import Post from "@/views/Post";


const routes = [
    {
        path: '/posts/:id',
        name: 'Post',
        component: Post
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;