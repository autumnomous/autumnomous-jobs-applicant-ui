<template>
    
    <!-- Card List -->
        <div class="d-grid gap-5 mb-10">
            
            <JobCard v-for="job in jobs" :key="job.publicid" :job="job" @bookmark="updateBookmarkJobs"></JobCard>
            
        </div>
    <!-- End Card List -->

</template>


<script setup>

    import Cookies from 'js-cookie'
    import JobCard from '../../components/listing/JobCard.vue'
    import {ref} from 'vue'

    const jobs = ref([]);
    const dataReady = ref(false);
    const token = Cookies.get('com.ajobs.applicant');
    

    async function getBookmarkedJobs(){

        let jobs = [];
        jobs = await fetch(process.env.VUE_APP_BIT_API_PATH + "/applicant/get/bookmark/jobs",{
                    method:"GET", 
                    headers:{
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token
                    }
                }).then(result => {

                    if(!result.ok){
                        console.log(result)
                        return result
                    }
                    return result.json()
                })
        return jobs
    }
    
    async function updateBookmarkJobs(){
        jobs.value = await getBookmarkedJobs();
    }

    jobs.value = await getBookmarkedJobs();
       
</script>
