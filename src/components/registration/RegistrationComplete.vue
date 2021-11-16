<template>
    <!-- Message Body -->
    <div id="successMessageContent">
        <div class="text-center">
        <img class="img-fluid mb-3" src="../../../public/assets/svg/illustrations/medal.svg" alt="Image Description" style="max-width: 15rem;">

        <div class="mb-4">
            <h2>Account Setup Successful!</h2>
        </div>

        <div class="d-flex justify-content-center">
            <router-link class="btn btn-white mr-3" to="/employer/account">
                Go to account<i class="fas fa-angle-right mr-1 ml-2"></i>
            </router-link>
            
            <router-link class="btn btn-primary" to="/employer/dashboard">
                <i class="fas fa-briefcase mr-1"></i> Go to dashboard
            </router-link>
        </div>
        </div>
    </div>
    <!-- End Message Body -->
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>