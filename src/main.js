import scss from './stylesheets/app.scss'

import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'

import App from './components/app.vue'
import Errors from './components/views/errors.vue'
import Pools from './components/views/pools.vue'
import Rigs from './components/views/rigs.vue'
import Settings from './components/views/settings.vue'
import AddPool from './components/views/add-pool.vue'
import AddScript from './components/views/add-script.vue'
import AddRig from './components/views/add-rig.vue'

// Install plugins
Vue.use(Router)
Vue.use(Resource)

const settingsProps = {
  rigs: ['Rig 1', 'Rig 2'],
  pools: ['Pool 1', 'Pool 2'],
  scripts: ['Miner script 1', 'Miner script 2']
};

const poolsProps = {
  pools: {
    columns: [],
    children: [
      {
        columns: [{text: 'Pool 1', width: 100}, {text: '8.2'}, {text: '8.2'}, {text: '432'}, {text: '2'}],
        children: [
          {columns: [{text: 'Worker 1'}, {text: '4'}, {text: '4'}, {text: '200'}, {text: '1'}]},
          {columns: [{text: 'Worker 2'}, {text: '4.2'}, {text: '4.2'}, {text: '232'}, {text: '1'}]}
        ]
      },
      {
        columns: [{text: 'Pool 2', width: 100}, {text: '14.2'}, {text: '14.2'}, {text: '534'}, {text: '6'}],
        children: [
          {columns: [{text: 'Worker 1'}, {text: '10'}, {text: '10'}, {text: '300'}, {text: '2'}]},
          {columns: [{text: 'Worker 2'}, {text: '4.2'}, {text: '4.2'}, {text: '234'}, {text: '4'}]}
        ]
      },
    ]
  }
};

const errorsProps = {
    errors: {  
        columns: [],
        children: [
          {
              columns: [{text: 'Rig 1'}],
              children: [
                {
                  columns: [{text: '2017'}],
                  children: [
                    {
                      columns: [{text: '1'}],
                      children: [
                        { 
                          columns: [{text: '01/12/2017  10:01:24'}, {text: 'Some error text', width: 200}]
                        } 
                      ]
                    },
                    {
                      columns: [{text: '2'}],
                      children: [
                        { 
                          columns: [{text: '01/12/2017  10:01:24'}, {text: 'Some error text', width: 200}]
                        } 
                      ]
                    },
                    {
                      columns: [{text: '3'}],
                      children: [
                        { 
                          columns: [{text: '01/12/2017  10:01:24'}, {text: 'Some error text', width: 200}]
                        } 
                      ]
                    },
                    {
                      columns: [{text: '4'}],
                      children: [
                        { 
                          columns: [{text: '01/12/2017  10:01:24'}, {text: 'Some error text', width: 200}]
                        } 
                      ]
                    }
                  ]
                },
                {
                  columns: [{text: '2018'}],
                  children: [
                    {
                      columns: [{text: '1'}],
                      children: [
                        { 
                          columns: [{text: '01/12/2017  10:01:24'}, {text: 'Some error text', width: 200}]
                        } 
                      ]
                    },
                    {
                      columns: [{text: '2'}],
                      children: [
                        { 
                          columns: [{text: '01/12/2017  10:01:24'}, {text: 'Some error text', width: 200}]
                        } 
                      ]
                    },
                    {
                      columns: [{text: '3'}],
                      children: [
                        { 
                          columns: [{text: '01/12/2017  10:01:24'}, {text: 'Some error text', width: 200}]
                        } 
                      ]
                    },
                    {
                      columns: [{text: '4'}],
                      children: [
                        { 
                          columns: [{text: '01/12/2017  10:01:24'}, {text: 'Some error text', width: 200}]
                        } 
                      ]
                    }
                  ]
                }
              ]
          },
          {
              columns: [{text: 'Rig 2'}],
              children: [ {
                  columns: [{text: '2017'}],
                  children: [
                    {
                      columns: [{text: '1'}],
                      children: [
                        { 
                          columns: [{text: '01/12/2017  10:01:24'}, {text: 'Some error text', width: 200}]
                        } 
                      ]
                    }
                  ]
              }]
          }
        ]
    }
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
    component: Pools,
    props: poolsProps
  },
  {
    path: '/errors',
    name: 'errors',
    component: Errors,
    props: errorsProps
  },
  {
    path: '/settings/add-pool',
    name: 'add-pool',
    component: AddPool
  },
  {
    path: '/settings/add-rig',
    name: 'add-rig',
    component: AddRig
  },
  {
    path: '/settings/add-script',
    name: 'add-script',
    component: AddScript
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
