import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Top'
import Question from './components/Question'
import Anser from './components/Anser'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }, {
            path: '/que/:id',
            name: 'que',
            component: Question,
            props: true
        }, {
            path: '/ans/:que_id-:ans_id',
            name: 'ans',
            component: Anser,
            props: true
        }
    ]
})