import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/index'
import BallHall from '@/views/ballHall/ballHall'
import GameField from '@/views/gameField/gameField'
import Mall from '@/views/mall/mall'
import Me from '@/views/me/me'
import {
  hallInfo,
  Reservation,
  SearchPage,
  SetAddress,
  BallHallList,
  SelectSession,
  MeInfo,
  MyInfo_Mod,
  TechnicalStatistics_Mod
} from './subView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          redirect: '/home/ballHall'
        },
        {
          path: 'ballHall',
          name: 'ballHall',
          component: BallHall,
          children: [

          ]
        },
        {
          path: 'gameField',
          name: 'gameField',
          component: GameField
        },
        {
          path: 'mall',
          name: 'mall',
          component: Mall
        },
        {
          path: 'me',
          name: 'me',
          component: Me
        }
      ]
    },
    {
      path: '/reservation',
      name: 'Reservation',
      component: Reservation
    },
    {
      path: '/hallInfo',
      name: 'hallInfo',
      component: hallInfo
    },
    {
      path: '/searchPage',
      name: 'searchPage',
      component: SearchPage
    },
    {
      path: '/address',
      name: 'address',
      component: SetAddress
    },
    {
      path: '/ballHallList',
      name: 'ballHallList',
      component: BallHallList
    },
    {
      path: '/sallHallList',
      name: 'selectSession',
      component: SelectSession
    },
    {
      path: '/meInfo',
      name: 'meInfo',
      component: MeInfo,
      children: [
        {
          path: '/',
          redirect: '/myInfo_Mod'
        },
        {
          path: '/myInfo_mod',
          name: 'myInfo_Mod',
          component: MyInfo_Mod
        },
        {
          path: '/technicalStatistics_Mod',
          name: 'technicalStatistics_Mod',
          component: TechnicalStatistics_Mod
        }
      ]
    }
  ]
})
