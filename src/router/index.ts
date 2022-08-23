import { createRouter, createWebHistory } from "vue-router";
import Cookies from "js-cookie";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";
import CompleteRegistration from "../views/CompleteRegistration.vue";
import Dashboard from "../views/Dashboard.vue";
import Listing from "../views/Listing.vue";
import JobView from "../components/listing/JobView.vue";
import Error400 from "../views/errors/Error400.vue";
import Account from "../views/Account.vue";
import Profile from "../views/Profile.vue";
import UploadResume from "../views/UploadResume.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: "/applicant/signup",
      name: "Applicant Sign Up",
      component: SignUp,
    },
    {
      path: "/applicant/login",
      name: "Applicant Login",
      component: Login,
      beforeEnter: (to, from, next) => {
        const token = Cookies.get("com.ajobs.applicant");

        if (token) {
          next("/applicant/dashboard");
        }
        next();
      },
    },
    {
      path: "/applicant/registration",
      name: "Applicant Registration",
      component: CompleteRegistration,
    },
    {
      path: "/applicant/dashboard",
      name: "Applicant Dashboard",
      component: Dashboard,
    },
    {
      path: "/job-list/:slug",
      name: "job",
      component: JobView,
    },
    {
      path: "/applicant/profile",
      name: "Applicant Profile",
      component: Profile,
    },
    {
      path: "/applicant/account",
      name: "Applicant Account",
      component: Account,
    },
    {
      path: "/error/400",
      name: "Error 400",
      component: Error400,
    },
    {
      path: "/listing",
      name: "Listing",
      component: Listing,
    },
    {
      path: "/applicant/upload-resume",
      name: "Upload Resume",
      component: UploadResume,
    },
  ],

  // router.beforeEach( async (to,from, next) =>{
  //   const { $cookies } = router.app.config.globalProperties;
  //   const token = $cookies.get('com.ajobs.applicant');

  //   if(to.fullPath.includes("employer")){
  //     var employer = await fetch(import.meta.env.VITE_AJ_API_PATH + "/employer/get",
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

  // [
  //   {
  //     path: "/",
  //     name: "home",
  //     component: HomeView,
  //   },
  //   {
  //     path: "/about",
  //     name: "about",
  //     // route level code-splitting
  //     // this generates a separate chunk (About.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import("../views/AboutView.vue"),
  //   },
  // ],
});

export default router;
