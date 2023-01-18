import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import HelloWorld from '/src/components/HelloWorld.vue'
import PghAnesthesiology from '/src/components/PghAnesthesiology.vue'
import NesabelOnline from '/src/components/NesabelOnline.vue'
import PghProcs from '/src/components/PghProcs.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/hello-world',
        name: 'HelloWorld',
        component: HelloWorld,
    },
    {
        path: '/pgh-anes',
        name: 'PGHAnesthesiology',
        component: PghAnesthesiology,
    },
    {
        path: '/nesabel',
        name: 'NesabelOnline',
        component: NesabelOnline,
    },
    {
        path: '/pgh-procs',
        name: 'PGHProcs',
        component: PghProcs,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;