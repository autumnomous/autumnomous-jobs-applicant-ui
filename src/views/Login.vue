<template>
    <CoverRow>
        
        <template v-slot:sidecontent>
            
        </template>
        <alert-error v-if="resultError" :message="resultMessage"></alert-error>
        <!-- Form -->
        <form class="js-validate" @submit.prevent="formSubmit">
            <!-- Title -->
            <div class="mb-5 mb-md-7">
            <h1 class="h2">Welcome back</h1>
            <p>Login to manage your account.</p>
            </div>
            <!-- End Title -->

            <!-- Form Group -->
            <div class="js-form-message form-group">
            <label class="input-label" for="signinSrEmail">Email address</label>
            <input type="email" v-model="v$.login.email.$model" class="form-control" name="email" id="signinSrEmail" tabindex="1" placeholder="Email address" aria-label="Email address" required
                    data-msg="Please enter a valid email address." :class="{ 'is-invalid': v$.login.email.$errors.length }">
                    <div class="input-errors" v-for="error of v$.login.email.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>

            </div>
            <!-- End Form Group -->

            <!-- Form Group -->
            <div class="js-form-message form-group">
            <label class="input-label" for="signinSrPassword" tabindex="0">
                <span class="d-flex justify-content-between align-items-center">
                Password
                <a class="link-underline text-capitalize font-weight-normal" href="page-recover-account.html">Forgot Password?</a>
                </span>
            </label>
            <input type="password" v-model="v$.login.password.$model" class="form-control" name="password" id="signinSrPassword" tabindex="2" placeholder="********" aria-label="********" required
                    data-msg="Your password is invalid. Please try again.">
            </div>
            <!-- End Form Group -->

            <captcha-test @captcha-done="validateCaptcha"></captcha-test>
            <!-- Button -->
            <div class="row align-items-center mb-5">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <span class="font-size-1 text-muted">Don't have an account?</span>
                <router-link class="font-size-1 font-weight-bold" to="/applicant/signup">Signup</router-link>
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

import CoverRow from '../components/ui/auth/CoverRow.vue'
import CaptchaTest from '../components/ui/auth/CaptchaTest.vue'
import AlertError from '../components/ui/AlertError.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, email } from '@vuelidate/validators'

export default {
    
    setup () {
        return { v$: useVuelidate() }
    },
    components:{
        CoverRow,
        CaptchaTest,
        AlertError
    },
    data(){
        return {
            login:{
                email:"",
                password:"",
            },
            captchaResult:null,
            resultError:false,
            resultMessage:"",
        }
    },
    validations(){

        return {
            login:{
                email:{required, email},
                password:{required},
            }
        }
    },

    methods:{
        validateCaptcha(captchaResult){
            this.captchaResult = captchaResult
        },
        async formSubmit(e){

            try {

                if(this.captchaResult){
                    await this.$store.dispatch("login", {email:this.login.email, password:this.login.password})

                    if(this.$store.getters.getRegistrationStep != "registration-complete"){
                        this.$router.replace('/applicant/registration')
                    } else{
                        this.$router.replace('/applicant/dashboard')
                    }
                }

            } catch (error) {
               this.resultError = true;
               this.resultMessage = "Login failed, please check your email and password and try again."
            }

           

        
        }
    },
    created() {
        this.$emit('update:layout', AuthLayout);
    },
}
</script>

<style>

</style>