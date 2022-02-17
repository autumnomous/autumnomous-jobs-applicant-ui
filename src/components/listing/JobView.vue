<template>

    <main id="content" role="main">
          <!-- Page Header -->
    <div class="container content-space-t-2">
      <div class="w-lg-75 mx-lg-auto">
        <div class="page-header">
          <!-- Media -->
          <div class="d-sm-flex mb-3">
            <div class="flex-shrink-0 mb-2 mb-sm-0">
              <a href="">
                <img class="avatar avatar-lg mb-3" :src="job.companylogo" :alt="job.companyname + ' Logo'">
              </a>
            </div>
            
            <div class="flex-grow-1 ms-sm-4">
              <div class="row">
                <div class="col">
                  <h1 class="page-header-title h2">{{ job.title }}</h1>
                </div>
                <!-- End Col -->

                <div class="col-auto">
                  <!-- Checkbbox Bookmark -->
                  <div class="form-check form-check-bookmark">
                    <button @click="bookmarkJob" class="btn btn-sm btn-secondary">
                      <span v-if="!bookmarked" class="form-check-bookmark-default">
                        <i class="bi-star me-1"></i> Save this job
                      </span>
                      <span  v-else class="form-check-bookmark-active">
                        <i class="bi-star-fill me-1"></i> Saved
                      </span>
                    </button>
                  </div>
                  <!-- End Checkbbox Bookmark -->
                </div>
                <!-- End Col -->
              </div>
              <!-- End Row -->

              <ul class="list-inline list-separator d-flex align-items-center mb-2">
                <li class="list-inline-item">
                  <a class="link" :href="job.companyurl">{{job.companyname}}</a>
                </li>
            
              </ul>

              <ul class="list-inline list-separator small text-body mb-2">
                <li class="list-inline-item">{{timeSincePosted}}</li>
                <li class="list-inline-item">{{job.companylocation}}</li>
                <li class="list-inline-item">{{jobType}}</li>
              </ul>
            </div>
          </div>
          <!-- End Media -->
        </div>
      </div>
    </div>
    <!-- End Page Header -->

    <!-- Content -->
    <div class="container content-space-2 content-space-b-lg-3">
      <div class="w-lg-75 mx-lg-auto">
        <div class="row mb-3">
          <div class="col">
            <h3>Description</h3>
          </div>
          <!-- End Col -->

          <div class="col-auto">
            <!-- Dropdown -->
            <div class="dropdown">
              <a class="link" href="#" id="jobOverviewShareDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                Share this job <i class="bi-share-fill small ms-1"></i>
              </a>

              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="jobOverviewShareDropdown">
                <a class="dropdown-item" href="#">
                  <i class="bi-facebook dropdown-item-icon"></i> Facebook
                </a>
                <a class="dropdown-item" href="#">
                  <i class="bi-twitter dropdown-item-icon"></i> Twitter
                </a>
                <a class="dropdown-item" href="#">
                  <i class="bi-linkedin dropdown-item-icon"></i> LinkedIn
                </a>
              </div>
            </div>
            <!-- End Dropdown -->
          </div>
          <!-- End Col -->
        </div>
        <!-- End Row -->

            <span v-html="job.description"></span>

        <div class="d-grid mt-7">
          <a class="btn btn-primary btn-transition" href="@@autopath/demo-jobs/apply-for-job.html">Apply for this job</a>
        </div>
      </div>
    </div>
    <!-- Content -->
    </main>
    
</template>

<script>
import AlertError from '../../components/ui/AlertError.vue'
import DefaultLayout from '../../layouts/DefaultLayout.vue'
import Cookies from 'js-cookie'
import {add, formatDistanceToNow} from 'date-fns'

export default {
    components:{
        AlertError
    },
    data(){
        return {
            job:{},
            dataReady:false,
            submitError:false,
            bookmarked: false,
            submitErrorMessage:"",
        }
    },

    methods:{
        async getJob(){
            let token = Cookies.get('com.ajobs.applicant');
            this.job = await fetch(process.env.VUE_APP_BIT_API_PATH + "/applicant/get/job",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token
                },
                // credentials: "include",
                body: JSON.stringify({ 
                    publicid:this.$route.params.slug})
                }
            ).then(result =>{

                if(!result.ok){
                console.log(result)
                return result
                }

                return result.json()

            })
            

        },
        cancel(){
            
        },
        async bookmarkJob(){
          this.bookmarked = !this.bookmarked;

          var token = Cookies.get("com.ajobs.applicant")

          if(this.bookmarked){
            var result = await fetch(process.env.VUE_APP_BIT_API_PATH + "/applicant/bookmark",
              {
                method: "POST",
                headers: { 
                  "Content-Type":"application/json",
                  "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                  jobid:this.$route.params.slug
                })

              }).then(result =>{

                    if(!result.ok){
                      console.log(result)
                    }

                    return result
                })


          } else { 
            var result = await fetch(process.env.VUE_APP_BIT_API_PATH + "/applicant/bookmark",
              {
                method: "DELETE",
                headers: { 
                  "Content-Type":"application/json",
                  "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                  jobid:this.$route.params.slug
                })

              }).then(result =>{

                    if(!result.ok){
                      console.log(result)
                    }

                    return result
                })
          }
         
        },

        async getBookmark(){

          var token = Cookies.get("com.ajobs.applicant")
          var result = await fetch(process.env.VUE_APP_BIT_API_PATH + "/applicant/get/bookmark",
              {
                method: "POST",
                headers: { 
                  "Content-Type":"application/json",
                  "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                  jobid:this.$route.params.slug
                })

              }).then(result =>{

                    if(!result.ok){
                      console.log(result)
                    }

                    return result.json()
                })

          this.bookmarked = !!result || false

        }
      
    },
    computed:{
          timeSincePosted: function() {

            if(this.job.visibledate){
                 return "Posted " + formatDistanceToNow(new Date(this.job.visibledate), {addSuffix:true})
            }   

        },

        jobType: function(){

            if(this.job.jobtype){
                return this.job.jobtype.split("-").map((word)=>{return word.charAt(0).toUpperCase() + word.slice(1)}).join(" ")
            }   
            
        }
       
    },

    created(){
        this.$emit('update:layout', DefaultLayout);
        this.getJob()
        this.getBookmark()
    }
}
</script>

<style>

</style>