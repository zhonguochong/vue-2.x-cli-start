import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/D1_Template'
import D2Ctrl from '@/components/D2_Ctrl'
import D3UserInput from '@/components/D3_UserInput'
import D4Component from '@/components/D4_Component'
import D5LifeCycle from '@/components/D5_LifeCycle'
import D7FormBinding from '@/components/D7_FormBinding'
import D8Slot from '@/components/D8_Slot'
import D9AcessBackend from '@/components/D9_AcessBackend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/D2_Ctrl',
      name: 'D2_Ctrl',
      component: D2Ctrl
    },
    {
      path: '/D3_UserInput',
      name: 'D3_UserInput',
      component: D3UserInput
    },
    {
      path: '/D4_Component',
      name: 'D4_Component',
      component: D4Component
    },
    {
      path: '/D5_LifeCycle',
      name: 'D5_LifeCycle',
      component: D5LifeCycle
    },
    {
      path: '/D7_FormBinding',
      name: 'D7_FormBinding',
      component: D7FormBinding
    },
    {
      path: '/D8_Slot',
      name: 'D8_Slot',
      component: D8Slot
    },
    {
      path: '/D9_AcessBackend',
      name: 'D9_AcessBackend',
      component: D9AcessBackend
    }
  ]
})
