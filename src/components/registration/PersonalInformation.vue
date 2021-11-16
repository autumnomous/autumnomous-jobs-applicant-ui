<template>
    <the-card id="personal-information">

        <template v-slot:cardheader>Enter Your Personal Information</template>
        <template v-slot:cardbody>
          <alert-error v-if="submissionError" :message="errorMessage"></alert-error>

                <div class="form-group" >
                    <label for="firstname" class="input-label">First Name</label>

                    <input v-model.lazy="v$.personalInformation.firstname.$model" type="text" class="form-control" name="firstname" id="firstname" aria-label="First Name" :class="{ 'is-invalid': v$.personalInformation.firstname.$error}">
                    
                      <div class="input-errors" v-for="error of v$.personalInformation.firstname.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                      </div>
                </div>

                <div class="form-group" >
                    <label for="lastname" class="input-label">Last Name</label>

                    <input v-model.lazy="v$.personalInformation.lastname.$model" type="text" class="form-control" name="lastname" id="lastname" aria-label="Last Name" :class="{ 'is-invalid': v$.personalInformation.lastname.$error}">
                    
                      <div class="input-errors" v-for="error of v$.personalInformation.lastname.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                      </div>
                </div>

                <div class="form-group" >
                    <label for="email" class="input-label">Email</label>

                    <input v-model.lazy="v$.personalInformation.email.$model" type="text" class="form-control" name="email" id="email" aria-label="Email" :class="{ 'is-invalid': v$.personalInformation.email.$error}">
                    
                      <div class="input-errors" v-for="error of v$.personalInformation.email.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                      </div>
                </div>

                <div class="form-group" >
                    <label for="phonenumber" class="input-label">Phone Number</label>

                    <input v-model.lazy="v$.personalInformation.phoneNumber.$model" type="tel" class="form-control" name="phonenumber" id="phonenumber" aria-label="Phone Number" :class="{ 'is-invalid': v$.personalInformation.phoneNumber.$error}">
                    
                      <div class="input-errors" v-for="error of v$.personalInformation.phoneNumber.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                      </div>
                </div>

                <div class="form-group" >
                    <label for="mobilenumber" class="input-label">Mobile Number</label>

                    <input v-model.lazy="v$.personalInformation.mobileNumber.$model" type="tel" class="form-control" name="mobilenumber" id="mobilenumber" aria-label="Mobile Number" :class="{ 'is-invalid': v$.personalInformation.mobileNumber.$error}">
                    
                      <div class="input-errors" v-for="error of v$.personalInformation.mobileNumber.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                      </div>
                </div>

                 <label for="role" class="input-label">Facebook</label>
                <div class="input-group mb-3" >
                    <span class="input-group-text" >https://facebook.com/</span>
                    <input v-model.lazy="v$.personalInformation.facebook.$model" type="text" class="form-control" name="role" id="role" aria-label="Role" :class="{ 'is-invalid': v$.personalInformation.facebook.$error}">
                    
                      <div class="input-errors" v-for="error of v$.personalInformation.facebook.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                      </div>
                </div>



                <label for="role" class="input-label">Twitter</label>
                <div class="input-group mb-3" >
                    
                    <span class="input-group-text" >https://twitter.com/</span>

                    <input v-model.lazy="v$.personalInformation.twitter.$model" type="text" class="form-control" name="role" id="role" aria-label="Role" :class="{ 'is-invalid': v$.personalInformation.twitter.$error}">
                    
                      <div class="input-errors" v-for="error of v$.personalInformation.twitter.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                      </div>
                </div>

                <label for="role" class="input-label">Instagram</label>
                <div class="input-group mb-3" >

                    <span class="input-group-text" >https://instagram.com/</span>

                    <input v-model.lazy="v$.personalInformation.instagram.$model" type="text" class="form-control" name="role" id="role" aria-label="Role" :class="{ 'is-invalid': v$.personalInformation.instagram.$error}">
                    
                      <div class="input-errors" v-for="error of v$.personalInformation.instagram.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                      </div>
                </div>

                <div class="form-group" >
                    <label for="role" class="input-label">Role</label>

                    <div class="">

                         <!-- Select -->
                        <select v-model="v$.personalInformation.role.$model" class="js-custom-select custom-select dropdown-toggle" size="1" style="opacity: 1;" name="role" :class="{ 'is-invalid': v$.personalInformation.role.$error}">
                            <option value="" selected>Select One</option>
                            <option value="administrator">Administrator</option>
                            <option value="assistant-manager">Assistant Manager</option>
                            <option value="ceo">CEO</option>
                            <option value="chief">Chief</option>
                            <option value="coordinator">Coordinator</option>
                            <option value="controller">Controller</option>
                            <option value="director">Director</option>
                            <option value="executive">Executive</option>
                            <option value="foreman">Foreman</option>
                            <option value="founder">Founder</option>
                            <option value="head">Head</option>
                            <option value="lead">Lead</option>
                            <option value="manager">Manager</option>
                            <option value="managing-member">Managing Member</option>
                            <option value="managing-partner">Managing Partner</option>
                            <option value="officer">Officer</option>
                            <option value="organizer">Organizer</option>
                            <option value="owner">Owner</option>
                            <option value="president">President</option>
                            <option value="principal">Principal</option>
                            <option value="proprietor">Proprietor</option>
                            <option value="supervisor">Supervisor</option>
                            <option value="superintendent">Superintendent</option>
                            <option value="team-leader">Team Leader</option>
                        </select>
                        <!-- End Select -->

                      <div class="input-errors" v-for="error of v$.personalInformation.role.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                      </div>
                    </div>
            </div>


        </template>

        <template v-slot:cardfooter>


                <div class="ml-auto">
                    <button type="button" class="btn btn-primary" id="step-2-button" @click="formSubmit">
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
import { required, helpers} from '@vuelidate/validators'

    export default {
      props:{
        employer:Object
      },
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
             personalInformation:{
                    firstname:this.employer.firstname,
                    lastname:this.employer.lastname,
                    email:this.employer.email,
                    phoneNumber:"",
                    mobileNumber:"",
                    role:"",
                    facebook:"",
                    twitter:"",
                    instagram:""
                },
                errorMessage:"",
                submissionError:false

          }
        },
        validations(){
            return {
                personalInformation:{
                    firstname:{
                      required: helpers.withMessage('This field cannot be empty', required),
                    },
                    lastname:{
                      required: helpers.withMessage('This field cannot be empty', required),
                    },
                    email:{
                      required: helpers.withMessage('This field cannot be empty', required),
                    },
                    phoneNumber:{
                      required: helpers.withMessage('This field cannot be empty', required)
                    },
                    mobileNumber:{
                      required: helpers.withMessage('This field cannot be empty', required)
                    },
                    role:{
                      required: helpers.withMessage('This field cannot be empty', required),
                    },
                    facebook:{},
                    twitter:{},
                    instagram:{}
                }
                
            }
        },
        methods:{
            async formSubmit(){
                if (this.v$.$invalid){
                    this.errorMessage = "Form has errors or is missing input.";
                    this.submissionError = true;
                } else { 
                    this.submissionError = false;
                    var token = this.$store.getters.getToken || this.$cookies.get('com.bitjobs');
                    
                      const result = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/update-account",
                      {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + token
                            },
                            // credentials: "include",
                            body: JSON.stringify({ 
                                firstname:this.v$.personalInformation.firstname.$model,
                                lastname:this.v$.personalInformation.lastname.$model,
                                email:this.v$.personalInformation.email.$model, 
                                phonenumber:this.v$.personalInformation.phoneNumber.$model, 
                                mobilenumber:this.v$.personalInformation.mobileNumber.$model, 
                                role:this.v$.personalInformation.role.$model,
                                facebook:  this.v$.personalInformation.facebook.$model,
                                twitter: this.v$.personalInformation.twitter.$model,
                                instagram: this.v$.personalInformation.instagram.$model
                            })
                        }
                    )

                    if(result.ok){
                        this.submissionError = false;
                        
                        this.$emit("next-step","company-details")
                    } else { 
                        console.log("error")
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>