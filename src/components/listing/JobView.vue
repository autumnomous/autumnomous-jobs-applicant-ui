<template>

    <main id="content" role="main">
        
    </main>
    
</template>

<script>
import AlertError from '../../components/ui/AlertError.vue'
import LayoutDefault from '../../layouts/DefaultLayout.vue'

export default {
    components:{
        AlertError
    },
    data(){
        return {
            job:{},
            dataReady:false,
            submitError:false,
            submitErrorMessage:"",
        }
    },

    methods:{
        async getJob(){
            let token = this.$cookies.get('com.ajobs.applicant');
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

            if(this.job){
                console.log(this.job)
            }
            // if(this.job){
            //     // console.log(this.job)
            //     // this.dataReady = true;
            //     // this.title = this.job.title;
            //     // this.jobType = this.job.jobtype;
            //     // this.jobCategory = this.job.category;
            //     // this.jobDescription = this.job.description;
            //     // this.jobDurationStart = this.formatDate(this.job.poststartdatetime);
            //     // this.remote = String(Number(this.job.remote));

            //     // this.
            // }
            

        },
        cancel(){
            
        },
        formatDate(dateStr){
            const date = new Date(dateStr);
            return date.toISOString().split('T')[0]
        },
        async formSubmit(e){
            let token = this.$cookies.get('com.ajobs.applicant');

            if(!this.v$.$invalid){
                let job = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/edit/job",
                      {
                          method: "POST",
                          headers: {
                              "Content-Type": "application/json",
                              Authorization: "Bearer " + token
                          },
                        //   credentials: "include",
                          body: JSON.stringify({
                              title:this.v$.title.$model,
                              jobtype:this.v$.jobType.$model,
                              category:this.v$.jobCategory.$model,
                              description:this.v$.jobDescription.$model,
                              poststartdatetime:this.v$.jobDurationStart.$model,
                              remote:!!Number(this.v$.remote.$model),
                              publicid: this.$route.params.slug,

                          })
                      }
                  ).then(result =>{

                      if(!result.ok){
                        console.log(result)
                        return result
                      }

                      return result.json()

                  })

                  if(job){
                      this.title = job.title
                    //   this.$router.go()
                  }
            }
             
        }
    
    },
    computed:{

       
    },

    created(){
        this.$emit('update:layout', LayoutDefault);
        this.getJob()
    }
}
</script>

<style>

</style>