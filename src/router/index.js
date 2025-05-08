import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tabro3at from '../views/Tabro3at.vue'
import DataView from '../views/DataView.vue'
import Pay from '../views/Pay.vue' // Import the new Pay component
import SignIn from '../views/SignIn.vue' // Import the SignIn component


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn,
    },

    {
      path: '/tabr',
      name: 'tabr',
      component: Tabro3at,
    },
    {
      path: '/data-view/:image/:description/:caseNumber/:collectedAmount/:remainingAmount/:projectDescription/:projectName',
      name: 'data-view',
      component: DataView,
      props: true,
    },
    {
      path: '/pay',
      name: 'pay',
      component: Pay,
    },

  ],

});

router.beforeEach((to, from, next) => {
  if (to.name === 'pay') {
    const userName = sessionStorage.getItem('userName');
    const password = sessionStorage.getItem('password');

    if (userName === 'admin' && password === '123') {
      next(); // Allow access to /pay
    } else {
      next({ name: 'signin' }); // Redirect to /signin
    }
  } else {
    next(); // Allow access to other routes
  }
});

export default router
