import scss from './stylesheets/app.scss'

import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'

import App from './components/app.vue'
import Errors from './components/views/errors.vue'
import Pools from './components/views/pools.vue'
import Rigs from './components/views/rigs.vue'
import Settings from './components/views/settings.vue'

// Install plugins
Vue.use(Router)
Vue.use(Resource)

const settingsProps = {
  rigs: ['Rig 1', 'Rig 2'],
  pools: ['Pool 1', 'Pool 2'],
  scripts: ['Miner script 1', 'Miner script 2']
};

// route config
let routes = [
  {
    path: '/rigs',
    name: 'rigs',
    component: Rigs
  },
  {
    path: '/pools',
    name: 'pools',
    component: Pools
  },
  {
    path: '/errors',
    name: 'errors',
    component: Errors
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
    props: settingsProps
  },
  { path: '*', redirect: '/settings' }
]

// Set up a new router
let router = new Router({
  routes: routes
})

// Start up our app
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
