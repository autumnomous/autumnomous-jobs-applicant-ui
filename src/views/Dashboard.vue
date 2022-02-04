<template>
    <div>

    </div>
</template>

<script>
    import DefaultLayout from '../layouts/DefaultLayout.vue'
    import Cookies from 'js-cookie'

    export default {
        
        async created(){
            this.$emit('update:layout', DefaultLayout);
            this.token = Cookies.get('com.ajobs.applicant')

            this.jobs = await fetch(process.env.VUE_APP_BIT_API_PATH + "/applicant/get/jobs",
            {
                  method: "GET",
                  headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer " + this.token
                  }
              }
            ).then(result =>{

                if(!result.ok){
                    console.log(result)
                    return result
                }
                return result.json()

            })

            if(this.jobs){
                this.dataReady = true
            }


        },

        data(){
            return { 
                jobs:[],
                dataReady: false

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>