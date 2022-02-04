<template>
<header id="header" class="header">
    <div class="js-mega-menu header-section">
        <div id="logoAndNav" class="container">
            <!-- Nav -->
            <nav class="navbar navbar-expand-lg">
                <!-- Logo -->
                <router-link  class="navbar-brand" to="/">
                    <img src="../../public/assets/svg/logos/logo.svg" alt="Logo">
                </router-link>
                <!-- End Logo -->

                <!-- Responsive Toggle Button -->
                <button type="button" class="navbar-toggler btn btn-icon btn-sm btn-soft-secondary rounded-circle" @click="responsiveButtonClick">
                    <span class="navbar-toggler-default" v-if="!showResponsiveMenu">
                        <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M17.4,6.2H0.6C0.3,6.2,0,5.9,0,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z"/>
                        </svg>
                    </span>
                    <span class="navbar-toggler-default" v-if="showResponsiveMenu">
                        <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"/>
                        </svg>
                    </span>
                </button>
                <!-- End Responsive Toggle Button -->
                
                <transition name="collapsing">
                            <!-- Navigation -->
                    <div id="navBar" class="collapse navbar-collapse " :class="{show: showResponsiveMenu}">
                        <ul class="navbar-nav">
                            <li class="navbar-nav-item">
                                <router-link class="nav-link" to="/">Home</router-link>
                            </li>

                                <!-- <AnonymousHeader></AnonymousHeader>  -->
                                <!-- <AnonymousHeader v-if="!loggedIn"></AnonymousHeader> -->
                                <!-- <EmployerHeader v-if="loggedIn"></EmployerHeader> -->
                                <!-- <EmployerHeader></EmployerHeader> -->
                                <applicant-header></applicant-header>
                                <!-- <ApplicantHeader></ApplicantHeader> -->
                        </ul>
                    </div>
                    <!-- End Navigation -->
                </transition>
               
            </nav>
            <!-- End Nav -->
        </div>
    </div>
</header>
</template>


<script>

import ApplicantHeader from '../components/ApplicantHeader.vue'
import AnonymousHeader from '../components/ui/AnonymousHeader.vue'

export default {

    data(){
        return {
           showResponsiveMenu:false,
        }
    },
    components:{
     ApplicantHeader,
     AnonymousHeader
    },
    methods:{
        responsiveButtonClick(){
            this.showResponsiveMenu = !this.showResponsiveMenu;
        }
    },
    computed:{
        loggedIn(){
            return this.$cookies.get('com.ajobs.applicant');
        }
    }

}

</script>

<style>

</style>