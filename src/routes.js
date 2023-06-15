
import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'


export default [
    {
        path: '/',
        component: HelloWorld,
        name: 'HelloWorld',
    },
    {
        path: '/about',
        component: About,
        name: 'About-page',
    },
    {
        path: '/education',
        component: Education,
        name: 'Education-page',
    },
    {
        path: '/experience',
        component: Experience,
        name: 'Experience-page',
    },
    {
        path: '/contact',
        component: Contact,
        name: 'Contact-page',
    },
]

// const router = creatRouter({
//     history: creatWebHistory(process.env.BASE_URL),
//     routes
// })
