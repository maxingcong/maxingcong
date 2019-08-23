import Router from 'vue-router'
import Vue from 'vue'
import { homedir } from 'os';
import { isNumber } from 'util';
// import Layout from '@/Layout'

Vue.use(Router)


// export const constantRoutes = [
//     {
//       path: '/redirect',
//       component: Layout,
//       hidden: true,
//       children: [
//         {
//           path: '/redirect/:path*',
//           component: () => import('@/views/redirect/index')
//         }
//       ]
//     }
//   ]

// const createRouter = () => new Router({
//     mode: 'hash', // require service support
//     scrollBehavior: () => ({ y: 0 }),
//     routes: constantRoutes
//   })


// const router = createRouter()

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            components: () => import('@/Layout'),
            props: true
        }
    ]
})













export default router