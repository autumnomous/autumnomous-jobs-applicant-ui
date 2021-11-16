<template>
   
   
    <main id="content" role="main">
    <!-- Step Section -->
    <div class="container space-top-1 space-top-lg-2 space-bottom-2 space-bottom-lg-3">
      <!-- Step Form -->
      <form class="js-step-form" enctype="multipart/form-data">
        <div class="row">
          <div id="stickyBlockStartPoint" class="col-lg-4">
            <!-- Sticky Block -->
            <div class="js-sticky-block">
              <!-- Step -->
              <ul id="postJobStepFormProgress" class="js-step-progress step step-icon-xs step-border-last-0 mt-5">
                <li class="step-item">
                  <div class="step-content-wrapper" href="">
                    <span class="step-icon step-icon-soft-dark">1</span>
                    <div class="step-content">
                      <span class="step-title">Update Password</span>
                      <span class="step-title-description step-text font-size-1">For your security, change your password.</span>
                    </div>
                  </div>
                </li>

                <li class="step-item">
                  <div class="step-content-wrapper" href="">
                    <span class="step-icon step-icon-soft-dark">2</span>
                    <div class="step-content">
                      <span class="step-title">Enter your personal information</span>
                      <span class="step-title-description step-text font-size-1">Enter your email, phone number, etc.</span>
                    </div>
                  </div>
                </li>

                <li class="step-item">
                  <div class="step-content-wrapper" href="">
                    <span class="step-icon step-icon-soft-dark">3</span>
                    <div class="step-content">
                      <span class="step-title">Enter Company Details</span>
                      <span class="step-title-description step-text font-size-1"></span>
                    </div>
                  </div>
                </li>

                <li class="step-item">
                  <div class="step-content-wrapper" href="">
                    <span class="step-icon step-icon-soft-dark">4</span>
                    <div class="step-content">
                      <span class="step-title">Select Payment Method</span>
                      <span class="step-title-description step-text font-size-1"></span>
                    </div>
                  </div>
                </li>

                <li class="step-item" >
                  <div class="step-content-wrapper" href="">
                    <span class="step-icon step-icon-soft-dark">5</span>
                    <div class="step-content">
                      <span class="step-title">Enter Payment Method Details</span>
                      <span class="step-title-description step-text font-size-1"></span>
                    </div>
                  </div>
                </li>

              </ul>
              <!-- End Step -->
            </div>
            <!-- End Sticky Block -->
          </div>

          <div id="formContainer" class="col-lg-8" v-show="!formSubmitted">
            <!-- Content Step Form -->
            <div id="postJobStepFormContent">

                <component :is="activeStep" @next-step="nextStep" :employer="employer" :active="activeStep"></component>

            </div>
            <!-- End Content Step Form -->

            <!-- Sticky Block End Point -->
            <div id="stickyBlockEndPoint"></div>
          </div>
        </div>
        <!-- End Row -->
      </form>
      <!-- End Step Form -->
    </div>
    <!-- End Step Section -->
    </main>
 

</template>

<script>
  import CoverRow from '../components/ui/auth/CoverRow.vue'
  import AlertError from '../components/ui/AlertError.vue'
  import RegistrationLayout from '../layouts/RegistrationLayout.vue'
  import TheCard from '../components/ui/TheCard.vue'

  import ChangePassword from '../components/registration/ChangePassword.vue'
  import PersonalInformation from '../components/registration/PersonalInformation.vue'
  import CompanyDetails from '../components/registration/CompanyDetails.vue'
  import PaymentMethod from '../components/registration/PaymentMethod.vue'
  import PaymentDetails from '../components/registration/PaymentDetails.vue'
  import RegistrationComplete from '../components/registration/RegistrationComplete.vue'

  export default {
      async created() {
          this.$emit('update:layout', RegistrationLayout);

          
          this.token = this.$cookies.get('com.bitjobs');
          
          // this.employer = await fetch(process.env.VUE_APP_BIT_API_PATH + "/applicant/get",
          //   {
          //         method: "GET",
          //         headers: {
          //             "Content-Type": "application/json",
          //             Authorization: "Bearer " + this.token
          //         }
          //     }
          //   ).then(result =>{

          //       if(!result.ok){
          //           console.log(result)
          //           return result
          //       }
          //       return result.json()

          //   })


          // if(this.employer){
          //   this.activeStep = this.$store.getters.getRegistrationStep || this.employer.registrationstep;
          // }

      },
      components:{
          CoverRow,
          AlertError,
          TheCard,
          ChangePassword,
          PersonalInformation,
          CompanyDetails, 
          PaymentMethod,
          PaymentDetails, 
          RegistrationComplete
      }, 
      data(){
          return {
              steps:["change-password","personal-information","company-details","payment-method","payment-details","registration-complete"],
              activeStep:"",
              employer:{},
              token:"",
              errorMessage:"",
              submissionError:false,
              formSubmitted:false,
              
          }
      },
      methods:{
          nextStep(nextStep){

            this.activeStep = this.steps.find(el=> el == nextStep)
          
          },
      },
      
  }
</script>

<style scoped>

</style>