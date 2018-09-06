import Vue from 'vue'
import VueRouter from 'vue-router'
import Todos from '../components/Todos.vue'
import Completed from '../components/Completed.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: Todos},
        {path: '/completed', name: 'completed', component: Completed, props: true}
    ]
})

export default router