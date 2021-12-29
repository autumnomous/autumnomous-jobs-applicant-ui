<template>
    <main id="content" role="main">
        <!-- Hero -->
        <div class="gradient-x-three-sm-primary">
            <div class="container content-space-2">
                <form>
                    <!-- Input Card -->
                    <div class="input-card input-card-sm mb-3">
                        <div class="input-card-form">
                            <label for="jobTitleForm" class="form-label visually-hidden">Job, title, skills, or company</label>
                            <div class="input-group input-group-merge">
                                <span class="input-group-prepend input-group-text">
                                <i class="bi-search"></i>
                                </span>
                                <input v-model="titleSearch" type="text" class="form-control" id="jobTitleForm" placeholder="Job, title, skills, or company" aria-label="Job, title, skills, or company">
                            </div>
                            </div>

                            <div class="input-card-form">
                            <label for="cityForm" class="form-label visually-hidden">City, state, or zip</label>
                            <div class="input-group input-group-merge">
                                <span class="input-group-prepend input-group-text">
                                <i class="bi-geo-alt"></i>
                                </span>
                                <input v-model.lazy="areaSearch" type="text" class="form-control" id="cityForm" placeholder="City, state, or zip" aria-label="City, state, or zip">
                            </div>
                        </div>
                        <!-- <button type="button" class="btn btn-primary">Search</button> -->
                    </div>
                    <!-- End Input Card -->
                </form>
            </div>
        </div>
        <!-- End Hero -->

        <!-- Card Grid -->
        <div class="container content-space-t-1 content-space-t-md-2 content-space-b-2 content-space-b-lg-3">
            <div class="row">
                <div class="col-lg-3 order-lg-2">
                <!-- Navbar -->
                <div class="navbar-expand-lg mb-5">
                    <!-- Navbar Toggle -->
                    <div class="d-grid">
                    <button type="button" class="navbar-toggler btn btn-white mb-3" data-bs-toggle="collapse" data-bs-target="#navbarVerticalNavMenu" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navbarVerticalNavMenu">
                        <span class="d-flex justify-content-between align-items-center">
                        <span class="text-dark">Filter</span>

                        <span class="navbar-toggler-default">
                            <i class="bi-list"></i>
                        </span>

                        <span class="navbar-toggler-toggled">
                            <i class="bi-x"></i>
                        </span>
                        </span>
                    </button>
                    </div>
                    <!-- End Navbar Toggle -->

                    <!-- Navbar Collapse -->
                    <div id="navbarVerticalNavMenu" class="collapse navbar-collapse">
                    <div class="w-100">
                        <!-- Form -->
                        <form>
                        <div class="mb-5">
                            <h5 class="mb-3">Distance</h5>
                            <!-- Select -->
                            <select v-model="areaRadius" class="form-select form-select-sm">
                                <option value="5" selected>5 miles</option>
                                <option value="10">10 miles</option>
                                <option value="15">15 miles</option>
                                <option value="20">20 miles</option>
                                <option value="25">25 miles</option>
                                <option value="30">30 miles</option>
                            </select>
                            <!-- End Select -->
                        </div>

                        <div class="mb-5">
                            <h5 class="mb-3">Last updated</h5>

                            <!-- Select -->
                            <select class="form-select form-select-sm">
                            <option value="within last day">within last day</option>
                            <option value="within last week">within last week</option>
                            <option value="within last month">within last month</option>
                            <option value="within last 3 months">within last 3 months</option>
                            <option value="within last 6 months">within last 6 months</option>
                            <option value="show all resumes">show all resumes</option>
                            </select>
                            <!-- End Select -->
                        </div>

                        <div class="mb-5">
                            <h5 class="mb-3">Company</h5>

                            <div class="d-grid gap-2">
                            <!-- Checkboxes -->
                            <div v-for="company in companies" :key="company[0]" class="form-check">
                                <input class="form-check-input" type="checkbox" :value="company[0]" :id="'company'+company[0]">
                                <label class="form-check-label d-flex" :for="'company' + company[0]">{{company[0]}} <span class="ms-auto">{{company[1]}}</span></label>
                            </div>
                            <!-- End Checkboxes -->

                            </div>
                        </div>


                        <div class="d-grid">
                            <button type="button" class="btn btn-white btn-transition">Clear all</button>
                        </div>
                        </form>
                        <!-- End Form -->
                    </div>
                    </div>
                    <!-- End Navbar Collapse -->
                </div>
                <!-- End Navbar -->
                </div>
                <!-- End Col -->

                <div class="col-lg-9">
                <div class="row align-items-center mb-5">
                    <div class="col-sm mb-3 mb-sm-0">
                    <h3 class="mb-0">{{filteredJobs.length}} jobs</h3>
                    </div>

                    <div class="col-sm-auto">
                    <div class="d-sm-flex justify-content-sm-end align-items-center">
                        <!-- Select -->
                        <div class="mb-2 mb-sm-0 me-sm-2">
                        <select class="form-select form-select-sm">
                            <option value="Relevance">Relevance</option>
                            <option value="mostRecent">Most recent</option>
                        </select>
                        </div>
                        <!-- End Select -->

                        <!-- Select -->
                        <div class="mb-2 mb-sm-0 me-sm-2">
                        <select class="form-select form-select-sm">
                            <option value="alphabeticalOrderSelect1">A-to-Z</option>
                            <option value="alphabeticalOrderSelect2">Z-to-A</option>
                        </select>
                        </div>
                        <!-- End Select -->
                    </div>
                    </div>
                </div>
                <!-- End Row -->

                <!-- Card List -->
                <div class="d-grid gap-5 mb-10">
                   
                    <job-card v-for="job in filteredJobs" :key="job.publicid" :job="job"></job-card>
                   
                </div>
                <!-- End Card List -->
                </div>
                <!-- End Col -->
            </div>
            <!-- End Row -->
        </div>
        <!-- End Card Grid -->
    </main>
</template>

<script>
    import LayoutDefault from '../layouts/DefaultLayout.vue'
    import JobCard from '../components/listing/JobCard.vue'
    import Cookies from 'js-cookie'
    export default {

        setup(props, { attrs, slots, emit, expose }){
            
        },

        data(){
            return { 
                jobs:[],
                filteredJobs:[],
                dataReady:false,
                titleSearch:"",
                areaSearch:"",
                areaRadius:"5",
            }
        },
        components:{
            JobCard
        },

        async created() {
            this.$emit('update:layout', LayoutDefault);
            this.token = Cookies.get('com.bitjobs')

            var result = await fetch(process.env.VUE_APP_BIT_API_PATH + "/applicant/get/jobs",
            {
                  method: "GET",
                  headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer " + this.token
                  }
              }
            ).then(result =>{

                return result

            })
    
            if(result.ok){
                this.jobs = await result.json()
                console.log(this.jobs)
                this.filteredJobs = this.jobs

                this.dataReady = true
            } else { 
                if(result.status == 401){
                    this.$router.replace("/applicant/login")
                }

                if(result.status == 400){
                    this.$router.replace("/error/400")
                }

            }

        },
        methods:{

            async requestJobsInRadius(){
                 var result = await fetch(process.env.VUE_APP_BIT_API_PATH + "/applicant/get/jobs/search/radius",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + this.token
                    },
                    body:JSON.stringify({
                        radius:Number(this.areaRadius),
                        zipcode:this.areaSearch
                    })
                }
                ).then(result =>{

                    return result

                })

                if(result.ok){
                    var res = await result.json()
                    console.log("res:",res)
                    this.jobs = res == null ? []:res
                    this.filteredJobs = this.jobs

                    this.dataReady = true
                } else { 
                    if(result.status == 401){
                        this.$router.replace("/applicant/login")
                    }

                    if(result.status == 400){
                        this.$router.replace("/error/400")
                    }

                }
            }
        },
        computed:{
            companies(){
                var companys = {}
                var companysSorted = []
                
                this.jobs.forEach(element => {
                    companys[element.companyname] = this.jobs.filter(x => x.companyname === element.companyname).length 
                });

                for(var company in companys){
                    companysSorted.push([company, companys[company]])
                }

                companysSorted.sort(function(a,b){
                    return a[1] - b[1];
                })
                return companysSorted;
            },

            jobTitles(){
                var titles = {}
                var titlesSorted = []
                this.jobs.forEach(element => {
                    titles[element.title] = this.jobs.filter(x=> x.title === element.title).length
                });

                for (var title in titles){
                    titlesSorted.push([title, titles[title]])
                }

                titlesSorted.sort(function(a, b) {
                    return a[1] - b[1];
                });
                return titlesSorted;
            }
        },
        watch:{

            titleSearch: function(newVal, oldVal){
                var filtered = this.jobs.filter(x => x.title.toLowerCase().includes(newVal.toLowerCase()))
                this.filteredJobs = filtered.length > 0 ? filtered: this.jobs
            }, 
            areaSearch: async function(newVal, oldVal){  
               this.requestJobsInRadius()
            },
            areaRadius: async function(newVal, oldVal){
                this.requestJobsInRadius()
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>