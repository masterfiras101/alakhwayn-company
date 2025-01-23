import { createRouter, createWebHistory } from 'vue-router'

// import Index from '@/views/Index.vue';
// import welcome from '@/views/welcome.vue';
import Landing from '@/views/Landing.vue';

const routes =
    [
        {
            path: "/",
            name: "index_page",
            component: Landing,
            meta: {
                title: "شركة الاخوين",
            },
        },

    ];


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,

    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',
            };
        }
        return savedPosition || { left: 0, top: 0 }
    }
});

router.beforeEach((to, next) => {
    document.title = ` شركة الأخوين ${to.meta.title} | Company `
    // next()
});

export default router