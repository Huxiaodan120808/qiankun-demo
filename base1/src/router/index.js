import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export const constantRoutes = [
    { path: '/', redirect: '/base' },
    {
        path: 'vue',
        redirect: '/vue',
    },
    {
        path: 'react',
        redirect: '/react',
    },
];

// 将筛选后的路由信息对象添加到路由表
const createRouter = () =>
    new Router({
        mode: 'history',
        routes: constantRoutes,
    });

const routers = createRouter();

// 路由守卫
routers.beforeEach(async (to, from, next) => {
    // 可以添加一些登录判断
    // if(to.meta.requireAuth){next({path: '/home'})}...
    next();
});

export default routers;
