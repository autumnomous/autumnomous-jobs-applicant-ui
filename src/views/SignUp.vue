<template>

      <CoverRow>
        
        <template v-slot:sidecontent>
          <alert-error v-if="resultError" message="An error occurred. Please try again later."></alert-error>
        </template>

            
        <!-- Form -->
            <form class="js-validate" @submit.prevent="formSubmit">
              <!-- Title -->
              <div class="mb-5 mb-md-7">
                <h1 class="h2">Welcome to Front</h1>
                <p>Fill out the form to get started.</p>
              </div>
              <!-- End Title -->

              <!-- Form Group -->
              <div class="js-form-message form-group">
                <label class="input-label" for="signinSrEmail">Email address</label>
                <input v-model="v$.email.model" type="email" class="form-control" name="email" id="signinSrEmail" placeholder="Email address" aria-label="Email address" required
                data-msg="Please enter a valid email address.">
                    <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
              </div>
              <!-- End Form Group -->
              <!-- Form Group -->
              <div class="js-form-message form-group">
                <label class="input-label" for="signinSrFirstname">First name</label>
                <input v-model="v$.firstname.model" type="text" class="form-control" name="firstname" id="signinSrFirstname" placeholder="First name" aria-label="First name" required
                data-msg="Please enter a first name.">
                    <div class="input-errors" v-for="error of v$.firstname.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
              </div>
              <!-- End Form Group -->
              <!-- Form Group -->
              <div class="js-form-message form-group">
                <label class="input-label" for="signinSrLastname">Last name</label>
                <input v-model="v$.lastname.model" type="text" class="form-control" name="lastname" id="signinSrLastname" placeholder="Last name" aria-label="Last name" required
                data-msg="Please enter a last name.">
                    <div class="input-errors" v-for="error of v$.lastname.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
              </div>
              <!-- End Form Group -->

              <captcha-test @captcha-done="validateCaptcha"></captcha-test>
              
              <!-- Checkbox -->
              <div class="js-form-message mb-5">
                <div class="custom-control custom-checkbox d-flex align-items-center text-muted">
                  <input type="checkbox" class="custom-control-input" id="termsCheckbox" name="termsCheckbox" required
                         data-msg="Please accept our Terms and Conditions.">
                  <label class="custom-control-label" for="termsCheckbox">
                    <small>
                      I agree to the
                      <a class="link-underline" href="@@autopath/page-terms.html">Terms and Conditions</a>
                    </small>
                  </label>
                </div>
              </div>
              <!-- End Checkbox -->

              <!-- Button -->
              <div class="row align-items-center mb-5">
                <div class="col-sm-6 mb-3 mb-sm-0">
                  <span class="font-size-1 text-muted">Already have an account?</span>
                  <router-link class="font-size-1 font-weight-bold" to="/employer/login">Login</router-link>
                </div>

                <div class="col-sm-6 text-sm-right">
                  <button type="submit" class="btn btn-primary transition-3d-hover">Get Started</button>
                </div>
              </div>
              <!-- End Button -->
            </form>
            <!-- End Form -->
    </CoverRow>
</template>

<script>
    import AuthLayout from '../layouts/AuthLayout.vue'
    import CoverRow from '../components/ui/auth/CoverRow.vue'
    import CaptchaTest from '../components/ui/auth/CaptchaTest.vue'
    import useVuelidate from '@vuelidate/core'
    import { required, email } from '@vuelidate/validators'
    import AlertSuccess from '../components/ui/AlertSuccess.vue'
    import AlertError from '../components/ui/AlertError.vue'

    export default {
        setup () {
          return { v$: useVuelidate() }
        },
        components:{
            CoverRow,
            AlertSuccess,
            AlertError,
            CaptchaTest
        },
        data(){
            return {
                email:"",
                firstname:"",
                lastname:"",
                resultError:false,
                captchaResult:null
            }
        },
        validations(){
          return{
                email:{required, email},
                firstname:{required},
                lastname:{required}
          }
        },
        methods:{

          validateCaptcha(captchaResult){
              this.captchaResult = captchaResult
          },
            async formSubmit(e){
              if(this.captchaResult){
                const result=  await fetch(process.env.VUE_APP_BIT_API_PATH + "/applicant/signup",
                      {
                          method: "POST",
                          headers: {
                              "Content-Type": "application/json",
                              Authorization: "Bearer " + process.env.VUE_APP_BIT_API_KEY
                          },
                          // credentials: "include",
                          body: JSON.stringify({ 
                              email:this.v$.email.model,
                              firstname:this.v$.firstname.model,
                              lastname:this.v$.lastname.model})
                      }
                  ).then(result =>{

                      if(!result.ok){
                        console.log(result)
                        return result
                      }

                      return result

                  })

            if(result.ok){
              this.resultError = false;
              
              this.$router.replace('/applicant/login')
              
              
            }
            else{
              this.resultError = true;
            }
              }

              

            }
        },created() {
          this.$emit('update:layout', AuthLayout);
        },   
  }
</script>

<style scoped>

</style>