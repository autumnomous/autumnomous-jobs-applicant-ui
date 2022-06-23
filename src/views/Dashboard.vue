<template>
    <div>
        <h3>Active Applications</h3>
    </div>

    <div>
        <h3>Bookmarked Jobs</h3>

        <!-- Card List -->
        <div class="d-grid gap-5 mb-10">
            
            <JobCard v-for="job in jobs" :key="job.publicid" :job="job" ></JobCard>
            
        </div>
        <!-- End Card List -->
    </div>

    <div>
        <h3>Resumes</h3>

        
    </div>
</template>


<script setup>
    import DefaultLayout from '../layouts/DefaultLayout.vue'
    import Cookies from 'js-cookie'
    import JobCard from '../components/listing/JobCard.vue'
    import {ref} from 'vue'

    const jobs = ref([]);
    const dataReady = ref(false);
    const token = Cookies.get('com.ajobs.applicant');
    const emit = defineEmits(['update:layout']);

    emit('update:layout', DefaultLayout);
    
    jobs.value = await fetch(process.env.VUE_APP_BIT_API_PATH + "/applicant/get/bookmark/jobs",{
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
                

    // if(jobs){
    //     dataReady.value = true;
    // }
         

</script>


<style lang="scss" scoped>

</style>