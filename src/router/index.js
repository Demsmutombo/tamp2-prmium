import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Biography from '../views/Biography.vue'
import PersonalInfo from '../views/PersonalInfo.vue'
import FamilyInfo from '../views/FamilyInfo.vue'
import ServiceDetails from '../views/ServiceDetails.vue'
import Testimonials from '../views/Testimonials.vue'
import Videos from '../views/Videos.vue'
import Spiritual from '../views/Spiritual.vue'
import MemorialCard from '../views/MemorialCard.vue'

import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/biographie',
    name: 'Biography',
    component: Biography
  },
  {
    path: '/informations-personnelles',
    name: 'PersonalInfo',
    component: PersonalInfo
  },
  {
    path: '/informations-familiales',
    name: 'FamilyInfo',
    component: FamilyInfo
  },
  {
    path: '/galerie',
    name: 'Gallery',
    component: Home
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos
  },
  {
    path: '/temoignages',
    name: 'Testimonials',
    component: Testimonials
  },
  {
    path: '/elements-spirituels',
    name: 'Spiritual',
    component: Spiritual
  },
  {
    path: '/informations-obeques',
    name: 'ServiceDetails',
    component: ServiceDetails
  },
  {
    path: '/carte-commemorative',
    name: 'MemorialCard',
    component: MemorialCard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

