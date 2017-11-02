import Vue from 'vue'
import Router from 'vue-router'
import { mapGetters, mapActions } from 'vuex'
import Hello from '@/components/Hello'
import Cookbook from '@/components/Cookbook'
import Menulist from '@/components/Menulist'

const Foo = {template: '<div>Foo</div>'}
const Counter = {
  name: 'Counter',
  template: '<div>{{count}} <button @click="increment">+1</button> <br> {{localCount}}</div>',
  data () {
    return {
      localCount: 32
    }
  },
  methods: {
    ...mapActions({
      increment: 'increment'
    })
  },
  computed: {
    ...mapGetters({
      count: 'count'
    })
  }
}

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/foo',
      component: Foo
    }, {
      path: '/cookbook',
      component: Cookbook,
      children: [
        {
          path: ':id',
          name: 'menulist',
          component: Menulist
        }
      ]
    }, {
      path: '/counter',
      component: Counter
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   console.log(to, from)
//   setTimeout(() => {
//     next()
//   }, 5000)
// })
export default router
