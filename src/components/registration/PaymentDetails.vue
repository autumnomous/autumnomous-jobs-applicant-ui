<template>
    <the-card id="payment-details">

        <template v-slot:cardheader> Enter Payment Method Details</template>
        <template v-slot:cardbody>
            TODO: PAYMENT METHOD DETAILS
        </template>

        <template v-slot:cardfooter>

                <div class="ml-auto">
                    <button type="button" class="btn btn-primary" id="payment-details-button" @click="formSubmit">
                    Save and continue <i class="fas fa-angle-right ml-1"> </i>
                    </button>
                </div>
        </template>

    </the-card>
</template>

<script>

import TheCard from '../../components/ui/TheCard.vue'
    export default {
        data(){
            return { 
                paymentDetails:"",
            }
        },
        components:{ 
            TheCard
        },
        methods:{
            async formSubmit(){

                var token = this.$store.getters.getToken || this.$cookies.get('com.bitjobs');

                const result = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/update-payment-details",
                {
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token
                    },
                    // credentials:"include",
                    body: JSON.stringify({
                        method:this.paymentDetails
                    })

                }).then(result => {
                    return result
                })


                if(result.ok){ 
                   this.$emit('next-step', 'registration-complete')
                } else { 
                    console.log(result)
                }


                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>