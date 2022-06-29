<template>

    <!-- Pages -->
    <li class="hs-has-sub-menu navbar-nav-item mr-lg-auto" @mouseover="pagesShow = true" @mouseleave="pagesShow = false">
    <a id="jobPagesMegaMenu" class="hs-mega-menu-invoker nav-link nav-link-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="jobsSubMenuPages">Pages</a>

    <!-- Pages - Submenu -->
    <div v-if="pagesShow" id="jobsSubMenuPages" class="hs-sub-menu dropdown-menu show" aria-labelledby="jobPagesMegaMenu" style="min-width: 230px;">
        <a class="dropdown-item" href="">Job Overview</a>
        <a class="dropdown-item" href="">Apply for Job</a>
        <a class="dropdown-item" href="">Employee (Applicant)</a>
        <a class="dropdown-item" href="">Employer (Company)</a>
    </div>
    <!-- End Pages - Submenu -->
    </li>
    <!-- End Pages -->

    <button class="navbar-nav-item btn btn-sm btn-primary transition-3d-hover" @click="$router.replace({name:'Applicant Login'})">
        Upload resume
    </button>

    <!-- Button -->
    <li class="navbar-nav-last-item">

        
        
    </li>
    <!-- End Button -->
</template>


<script>


export default {

    data(){
        return {
            listingsShow: false,
            pagesShow:false,
        }
    },
    components:{
     
    },

}

</script>

<style>

    #jobsSubMenuListing{
        left:60%;
    }

    #jobsSubMenuPages {
        left:70%;
    }

   
</style>