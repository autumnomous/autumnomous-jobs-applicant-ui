<template>
    <!-- Card -->
        <div class="card card-bordered">
            <div class="card-body">
                <!-- Media -->
                <div class="d-sm-flex">
                <!-- Media -->
                <div class="d-flex align-items-center align-items-sm-start mb-3">
                    <div class="flex-shrink-0">
                    <img class="avatar avatar-sm avatar-4x3" :src="job.companylogo" alt="Image Description">
                    </div>
                    <div class="d-sm-none flex-grow-1 ms-3">
                        <h6 class="card-title">
                            <a class="text-dark" :href="job.companyurl">{{job.companyname}}</a>
                        </h6>
                    </div>
                </div>
                <!-- End Media -->
                
                <div class="flex-grow-1 ms-sm-3">
                    <div class="row">
                    <div class="col col-md-8">
                        <h3 class="card-title">
                            
                        <router-link class="text-dark" :to="'/job-list/' + job.publicid"  >{{ job.title }}</router-link>
                        </h3>
                        <div class="d-none d-sm-inline-block">
                            <h6 class="card-title">
                                <a class="text-dark" :href="job.companyurl">{{job.companyname}}</a>
                            </h6>
                        
                            <p class="pt-1">{{job.companylocation}}</p>

                        </div>
                    </div>
                    <!-- End Col -->

                    <div class="col-auto order-md-3">
                        <!-- Checkbbox Bookmark -->
                        <div class="form-check form-check-bookmark">
                        <input class="form-check-input" type="checkbox" value="" id="jobsCardBookmarkCheck1">
                        <label class="form-check-label" for="jobsCardBookmarkCheck1">
                            <span class="form-check-bookmark-default" data-bs-toggle="tooltip" data-bs-placement="top" title="Save this job">
                            <i class="bi-star"></i>
                            </span>
                            <span class="form-check-bookmark-active" data-bs-toggle="tooltip" data-bs-placement="top" title="Saved">
                            <i class="bi-star-fill"></i>
                            </span>
                        </label>
                        </div>
                        <!-- End Checkbbox Bookmark -->
                    </div>
                    <!-- End Col -->

                    <div class="col-12 col-md mt-3 mt-md-0">
                        <span class="d-block small text-body mb-1">$125k-$135k yearly</span>

                        <span class="badge bg-soft-info text-info me-2">
                        <span class="legend-indicator bg-info" v-if="job.remote"></span>Remote
                        </span>
                       
                    </div>
                 
                    <!-- End Col -->
                    </div>
                   
                    <!-- End Row -->
                </div>
                 <div class="mt-10">
                         <button>Apply Now</button>
                    </div>
                </div>
                <!-- End Media -->
            </div>

            <div class="card-footer pt-0">
                <ul class="list-inline list-separator small text-body">
                <li class="list-inline-item">Posted 7 hours ago</li>
                <li class="list-inline-item">Full time</li>
                </ul>
            </div>
        </div>
    <!-- End Card -->
</template>

<script>
    export default {
        props:{
            job: Object,
        },
        computed:{
        
        }
    }
</script>

<style scoped>

    apply-now {
        padding-left:30px;
    }
</style>