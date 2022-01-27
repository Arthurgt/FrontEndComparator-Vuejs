import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About'
import Smload from '../components/Smload'
import Mdload from '../components/Mdload'
import Lgload from '../components/Lgload'
import Crud from '../components/Crud'
import Services from '../components/Services'
import Changingdata from '../components/Changingdata'
import Animations from '../components/Animations'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'About',
            component: About
        },
        {
            path: '/smload',
            name: 'Smload',
            component: Smload
        },
        {
            path: '/mdload',
            name: 'Mdload',
            component: Mdload
        },
        {
            path: '/lgload',
            name: 'Lgload',
            component: Lgload
        },
        {
            path: '/crud',
            name: 'Crud',
            component: Crud
        },
        {
            path: '/services',
            name: 'Services',
            component: Services
        },
        {
            path: '/changingdata',
            name: 'Changingdata',
            component: Changingdata
        },
        {
            path: '/animations',
            name: 'Animations',
            component: Animations
        }
    ]
})