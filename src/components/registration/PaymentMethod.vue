<template>
       <the-card id="payment-method">

            <template v-slot:cardheader>Select Payment Method</template>
            <template v-slot:cardbody>
                    <!-- Form Group -->
                <div class="form-group">
                <label for="paymentmethod" class="input-label">Payment Method</label>
                
                <!-- Select -->
                <select v-model="v$.paymentMethod" id="paymentmethod" class="js-custom-select custom-select dropdown-toggle" size="1" style="opacity: 1;" name="paymentmethod" :class="{ 'is-invalid': v$.paymentMethod.$error}">
                    <option value="" selected>Select One</option>
                    <option value="ach">ACH</option>
                    <option value="credit">Credit Card</option>
                    <option value="paypal">Paypal</option>
                </select>
                <!-- End Select -->

                    <div class="input-errors" v-for="error of v$.paymentMethod.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                            </div>
                </div>
                <!-- End Form Group -->
            </template>

            <template v-slot:cardfooter>
                    <div class="ml-auto">
                        <button type="button" class="btn btn-primary" id="payment-method-button" @click="formSubmit">
                        Save and continue <i class="fas fa-angle-right ml-1"> </i>
                        </button>
                    </div>
            </template>

        </the-card>
</template>

<script>


    import AlertError from '../ui/AlertError.vue'
    import TheCard from '../ui/TheCard.vue'
    import useVuelidate from '@vuelidate/core'
    import { helpers, required, minLength, sameAs, url } from '@vuelidate/validators'
    export default {
        setup(){
            return {
                 v$: useVuelidate()
            }
        },
        components:{
            TheCard,
            AlertError
        },
        data(){
            return { 
                paymentMethod:""
            }
        },
        validations(){
            return { 
                paymentMethod:{required}
            }
        },
        methods:{ 
            async formSubmit(){

                var token = this.$store.getters.getToken || this.$cookies.get('com.bitjobs');

                const result = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/update-payment-method",
                {
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token
                    },
                    // credentials:"include",
                    body: JSON.stringify({
                        method:this.paymentMethod
                    })

                }).then(result => {
                    return result
                })


                if(result.ok){ 
                    this.$emit('next-step', 'payment-details')
                } else { 
                    console.log(result)
                }
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>