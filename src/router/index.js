import { createRouter, createWebHistory } from "vue-router";
import Cookies from 'js-cookie'
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue"
import Login from "../views/Login.vue"
import CompleteRegistration from "../views/CompleteRegistration.vue"
import Dashboard from "../views/Dashboard.vue"
import Listing from '../views/Listing.vue'
import JobView from '../components/listing/JobView.vue'
import Error400 from '../views/errors/Error400.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: '/applicant/signup',
    name: 'Applicant Sign Up',
    component: SignUp
  },
  {
    path: '/applicant/login',
    name: 'Applicant Login',
    component: Login,
    beforeEnter:(to, from, next)=>{
      const token = Cookies.get('com.bitjobs')

      if(token){
        next('/applicant/dashboard')
      }
      next()
    }
  },
  {
    path: '/applicant/registration',
    name: 'Applicant Registration',
    component: CompleteRegistration
  },
  {
    path: '/applicant/dashboard',
    name: 'Applicant Dashboard',
    component: Dashboard
  },
  {
    path:'/job-list/:slug',
    name:'job',
    component: JobView
  },
  // {
  //   path: '/applicant/profile',
  //   name: 'Applicant Profile',
  //   component: Dashboard
  // },
  // {
  //   path: '/applicant/account',
  //   name: 'Applicant Account',
  //   component: Dashboard
  // },
  {
    path: '/error/400',
    name: 'Error 400',
    component: Error400
  },
  {
    path: '/listing',
    name: 'Listing',
    component: Listing
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach( async (to,from, next) =>{
//   const { $cookies } = router.app.config.globalProperties;
//   const token = $cookies.get('com.bitjobs');

//   if(to.fullPath.includes("employer")){
//     var employer = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/get",
//       {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: "Bearer " + token
//             }
//         }
//       ).then(result =>{

//           if(!result.ok){
//               console.log(result)
//               return result
//           }
//           return result.json()

//       })

//       if(employer){
//         if(employer.registrationstep != "registration-complete" && !to.fullPath.includes('registration')){
//           next('/employer/registration')
//         } else { 
//           if(to.fullPath.includes('login')){
//             next('/employer/dashboard')
//           }
//           next()
//         }
//       } else { 
//         next('/employer/login')
//       }
//   }

//   if(to.fullPath.includes("applicant")){
    
//   }
  
//     next()
//   // if(to.fullPath === ''){

//   // }
// })

export default router;
