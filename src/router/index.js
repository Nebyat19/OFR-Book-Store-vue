import AboutUsView from '@/views/AboutUsView.vue'
import BookLandingView from '@/views/BookLandingView.vue'
import BooksStoreView from '@/views/BooksStoreView.vue'
import BooksView from '@/views/BooksView.vue'
import {createRouter, createWebHistory} from 'vue-router'

const route=[
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

const routes =createRouter({
    history:createWebHistory(),
    routes:route
})

export default routes