import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import NotFindView from '@/views/NotFindView.vue'
import RegisterView from '@/views/RegisterView.vue'
import UserListView from '@/views/UserListView.vue'
import UserProfileView from '@/views/UserProfileView.vue'



const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/404/',
    name: 'NotFindView',
    component: NotFindView
  },
  {
    path: '/login/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/register/',
    name: 'RegisterView',
    component: RegisterView
  },
  {
    path: '/userlist/',
    name: 'UserListView',
    component: UserListView
  },
  {
    path: '/userprofile/:userId/',
    name: 'UserProfileView',
    component: UserProfileView
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
