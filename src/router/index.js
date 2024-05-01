
import {createRouter, createWebHistory} from 'vue-router'


const AboutUsView =()=> import('@/views/AboutUsView.vue')
const BookLandingView = ()=> import('@/views/BookLandingView.vue')
const BooksStoreView =()=> import('@/views/BooksStoreView.vue')
const BooksView =()=> import('@/views/BooksView.vue')

const routes=[
    {
        path:'/',
        name:'Home',
        component:BookLandingView
    },
    {
        path:'/store',
        name:'Store',
        component:BooksStoreView
    },
    {
        path:'/books',
        name:'Books',
        component:BooksView
    },
    {
        path:'/about',
        name:'About',
        component:AboutUsView
    }
    
]

const router =createRouter({
    history:createWebHistory(),
    routes
})

export default router