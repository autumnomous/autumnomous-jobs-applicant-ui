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
                                <input type="text" class="form-control" id="jobTitleForm" placeholder="Job, title, skills, or company" aria-label="Job, title, skills, or company">
                            </div>
                            </div>

                            <div class="input-card-form">
                            <label for="cityForm" class="form-label visually-hidden">City, state, or zip</label>
                            <div class="input-group input-group-merge">
                                <span class="input-group-prepend input-group-text">
                                <i class="bi-geo-alt"></i>
                                </span>
                                <input type="text" class="form-control" id="cityForm" placeholder="City, state, or zip" aria-label="City, state, or zip">
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary">Search</button>
                    </div>
                    <!-- End Input Card -->
                </form>

                <div class="row align-items-center">
                <div class="col-md-auto mb-3 mb-lg-0">
                    <h6 class="mb-1">Limit search to:</h6>
                </div>
                <!-- End Col -->

                <div class="col-md mb-3 mb-lg-0">
                    <!-- Check -->
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="jobSearchToCheckbox1" value="option1">
                    <label class="form-check-label" for="jobSearchToCheckbox1">Job title</label>
                    </div>
                    <!-- End Check -->

                    <!-- Check -->
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="jobSearchToCheckbox2" value="option2">
                    <label class="form-check-label" for="jobSearchToCheckbox2">Skills</label>
                    </div>
                    <!-- End Check -->

                    <!-- Check -->
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="jobSearchToCheckbox3" value="option3">
                    <label class="form-check-label" for="jobSearchToCheckbox3">Companies</label>
                    </div>
                    <!-- End Check -->

                    <!-- Check -->
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="jobSearchToCheckbox4" value="option4">
                    <label class="form-check-label" for="jobSearchToCheckbox4">Field of study</label>
                    </div>
                    <!-- End Check -->
                </div>

                <div class="col-md-auto">
                    <!-- Switch -->
                    <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="remoteOnlySwitch">
                    <label class="form-check-label" for="remoteOnlySwitch">Remote only</label>
                    </div>
                    <!-- End Switch -->
                </div>
                <!-- End Col -->
                </div>
                <!-- End Row -->
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

                            <p class="form-text">Within <span id="rangeSliderDistance"></span> miles of <span class="fw-semi-bold text-dark">London</span></p>

                            <!-- Range Slider -->
                            <div class="range-slider">
                            <div class="js-nouislider"
                                    data-hs-nouislider-options='{
                                    "range": {
                                        "min": 0,
                                        "max": 100
                                    },
                                    "connect": [true, false],
                                    "start": 25,
                                    "result_min_target_el": "#rangeSliderDistance"
                                    }'>
                            </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mt-5">
                            <span class="text-body">5 miles</span>
                            <span class="text-body">100 miles</span>
                            </div>
                            <!-- End Range Slider -->
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
                            <h5 class="mb-3">Job titles</h5>

                            <div class="d-grid gap-2">
                            <!-- Checkboxes -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="jobTitleCheckbox1">
                                <label class="form-check-label d-flex" for="jobTitleCheckbox1">Graphic Designer <span class="ms-auto">2</span></label>
                            </div>
                            <!-- End Checkboxes -->
                            
                            <!-- Checkboxes -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="jobTitleCheckbox2" checked>
                                <label class="form-check-label d-flex" for="jobTitleCheckbox2">UI/UX Designer <span class="ms-auto">2</span></label>
                            </div>
                            <!-- End Checkboxes -->

                            <!-- Checkboxes -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="jobTitleCheckbox3" checked>
                                <label class="form-check-label d-flex" for="jobTitleCheckbox3">Full Stack Developer <span class="ms-auto">1</span></label>
                            </div>
                            <!-- End Checkboxes -->

                            <!-- Checkboxes -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="jobTitleCheckbox4">
                                <label class="form-check-label d-flex" for="jobTitleCheckbox4">Information Associate <span class="ms-auto">1</span></label>
                            </div>
                            <!-- End Checkboxes -->
                            </div>
                        </div>

                        <div class="mb-5">
                            <h5 class="mb-3">Company</h5>

                            <div class="d-grid gap-2">
                            <!-- Checkboxes -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="jobCompanyCheckbox1">
                                <label class="form-check-label d-flex" for="jobCompanyCheckbox1">Capsule <span class="ms-auto">2</span></label>
                            </div>
                            <!-- End Checkboxes -->

                            <!-- Checkboxes -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="jobCompanyCheckbox2">
                                <label class="form-check-label d-flex" for="jobCompanyCheckbox2">Dropbox <span class="ms-auto">18</span></label>
                            </div>
                            <!-- End Checkboxes -->

                            <!-- Checkboxes -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="jobCompanyCheckbox3">
                                <label class="form-check-label d-flex" for="jobCompanyCheckbox3">Mailchimp <span class="ms-auto">1</span></label>
                            </div>
                            <!-- End Checkboxes -->

                            <!-- Checkboxes -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="jobCompanyCheckbox4">
                                <label class="form-check-label d-flex" for="jobCompanyCheckbox4">Google <span class="ms-auto">1</span></label>
                            </div>
                            <!-- End Checkboxes -->

                            <!-- Checkboxes -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="jobCompanyCheckbox5">
                                <label class="form-check-label d-flex" for="jobCompanyCheckbox5">Prosperops <span class="ms-auto">2</span></label>
                            </div>
                            <!-- End Checkboxes -->

                            <!-- Checkboxes -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="jobCompanyCheckbox6">
                                <label class="form-check-label d-flex" for="jobCompanyCheckbox6">Figam <span class="ms-auto">6</span></label>
                            </div>
                            <!-- End Checkboxes -->
                            </div>
                        </div>

                        <div class="mb-5">
                            <h5 class="mb-3">Years of experience</h5>

                            <div class="d-grid gap-2">
                            <!-- Checkboxes -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="jobYearExperienceCheckbox1" checked>
                                <label class="form-check-label d-flex" for="jobYearExperienceCheckbox1">6-10 years <span class="ms-auto">73</span></label>
                            </div>
                            <!-- End Checkboxes -->

                            <!-- Checkboxes -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="jobYearExperienceCheckbox2">
                                <label class="form-check-label d-flex" for="jobYearExperienceCheckbox2">3-5 years <span class="ms-auto">3</span></label>
                            </div>
                            <!-- End Checkboxes -->

                            <!-- Checkboxes -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="jobYearExperienceCheckbox3">
                                <label class="form-check-label d-flex" for="jobYearExperienceCheckbox3">More than 10 years <span class="ms-auto">1</span></label>
                            </div>
                            <!-- End Checkboxes -->
                            </div>
                        </div>

                        <div class="mb-5">
                            <h5 class="mb-3">Education</h5>

                            <div class="d-grid gap-2">
                            <!-- Checkboxes -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="jobEducationCheckbox1">
                                <label class="form-check-label d-flex" for="jobEducationCheckbox1">Bachelors <span class="ms-auto">6</span></label>
                            </div>
                            <!-- End Checkboxes -->

                            <!-- Checkboxes -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="jobEducationCheckbox2">
                                <label class="form-check-label d-flex" for="jobEducationCheckbox2">Masters <span class="ms-auto">1</span></label>
                            </div>
                            <!-- End Checkboxes -->

                            <!-- Checkboxes -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="jobEducationCheckbox3">
                                <label class="form-check-label d-flex" for="jobEducationCheckbox3">Associates <span class="ms-auto">1</span></label>
                            </div>
                            <!-- End Checkboxes -->
                            </div>
                        </div>

                        <div class="mb-5">
                            <h5 class="mb-3">Assessment <i class="bi-question-circle text-body ml-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Assessments shown her6 are summarized for convenience only. View the candidate’s profile for more information, including score ranges for each assessment. Indeed makes no statement as to the skill level of any candidate."></i></h5>

                            <div class="d-grid gap-2">
                            <!-- Checkboxes -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="jobAssessmentCheckbox1">
                                <label class="form-check-label d-flex" for="jobAssessmentCheckbox1">Attention to detail <span class="ms-auto">3</span></label>
                            </div>
                            <!-- End Checkboxes -->

                            <!-- Checkboxes -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="jobAssessmentCheckbox2">
                                <label class="form-check-label d-flex" for="jobAssessmentCheckbox2">Graphic design <span class="ms-auto">7</span></label>
                            </div>
                            <!-- End Checkboxes -->

                            <!-- Checkboxes -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="jobAssessmentCheckbox3">
                                <label class="form-check-label d-flex" for="jobAssessmentCheckbox3">Social Media <span class="ms-auto">1</span></label>
                            </div>
                            <!-- End Checkboxes -->

                            <!-- Checkboxes -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="jobAssessmentCheckbox4">
                                <label class="form-check-label d-flex" for="jobAssessmentCheckbox4">Marketing <span class="ms-auto">1</span></label>
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
                    <h3 class="mb-0">90 jobs for <span class="fw-normal">UK</span></h3>
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

                        <!-- Nav -->
                        <ul class="nav nav-segment">
                        <li class="nav-item">
                            <a class="nav-link" href="job-grid">
                            <i class="bi-grid-fill"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="job-list">
                            <i class="bi-list"></i>
                            </a>
                        </li>
                        </ul>
                        <!-- End Nav -->
                    </div>
                    </div>
                </div>
                <!-- End Row -->

                <!-- Card List -->
                <div class="d-grid gap-5 mb-10">
                   
                    <job-card v-for="job in jobs" :key="job.publicid" :job="job"></job-card>
                   
                </div>
                <!-- End Card List -->

                <!-- Pagination -->
                <nav aria-label="Page navigation">
                    <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">
                            <i class="bi-chevron-double-left small"></i>
                        </span>
                        </a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item disabled"><a class="page-link" href="#">...</a></li>
                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">
                            <i class="bi-chevron-double-right small"></i>
                        </span>
                        </a>
                    </li>
                    </ul>
                </nav>
                <!-- End Pagination -->
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
                dataReady:false,
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
    }
</script>

<style lang="scss" scoped>

</style>