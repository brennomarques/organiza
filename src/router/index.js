import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Menu-pages/Home'
import MainPage from '../components/Pages/MainPage'
import RecoverLogin from '../components/Login/RecoverLogin'
import CreateLogin from '../components/Login/CreateLogin'
import Login from '../components/Login/Login'
import RegisterCompany from '../components/Pages/RegisterCompany'
import Profile from '../components/Pages/Profile'
import Validator from '../components/Pages/Validator'
import Contract from '../components/Pages/Contract'

import Help from '../components/Pages/Help'
import Home from '../components/Menu-pages/Home'
import TypeService from '../components/Pages/TypeService'
import Certificadoa3 from '../components/Pages/CertificadoA3'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/recoverlogin',
    component: RecoverLogin
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/registercompany',
    component: RegisterCompany
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/validator',
    component: Validator
  },
  {
    path: '/contract',
    component: Contract
  },
  
  
  {
    path: '/typeservice',
    component: TypeService
  },
  {
    path: '/Help',
    component: Help
  },
  {
    path: '/createlogin',
    component: CreateLogin
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/a3',
    component: Certificadoa3
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
