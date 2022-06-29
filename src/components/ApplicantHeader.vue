<template>
    

    <router-link class="nav-link" to="/listing">Listing</router-link>
    <router-link class="nav-link" to="/applicant/dashboard">Dashboard</router-link>
    <router-link class="nav-link" to="/applicant/profile">Profile</router-link>
    <router-link class="nav-link" to="/applicant/account">Account</router-link>

    <!-- Button -->
    <button class="navbar-nav-item btn btn-sm btn-primary transition-3d-hover" @click="$router.replace({name:'Upload Resume'})">
        Upload resume
    </button>
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