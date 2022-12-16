<template>
  <main id="content" role="main">
    <!-- Step Section -->
    <div
      class="container space-top-1 space-top-lg-2 space-bottom-2 space-bottom-lg-3"
    >
      <!-- Step Form -->
      <form class="js-step-form" enctype="multipart/form-data">
        <div class="row">
          <div id="stickyBlockStartPoint" class="col-lg-4">
            <!-- Sticky Block -->
            <div class="js-sticky-block">
              <!-- Step -->
              <ul
                id="postJobStepFormProgress"
                class="js-step-progress step step-icon-xs step-border-last-0 mt-5"
              >
                <li class="step-item">
                  <div class="step-content-wrapper" href="">
                    <span class="step-icon step-icon-soft-dark">1</span>
                    <div class="step-content">
                      <span class="step-title">Update Password</span>
                      <span class="step-title-description step-text font-size-1"
                        >For your security, change your password.</span
                      >
                    </div>
                  </div>
                </li>

                <li class="step-item">
                  <div class="step-content-wrapper" href="">
                    <span class="step-icon step-icon-soft-dark">2</span>
                    <div class="step-content">
                      <span class="step-title"
                        >Enter your personal information</span
                      >
                      <span class="step-title-description step-text font-size-1"
                        >Enter your email, phone number, etc.</span
                      >
                    </div>
                  </div>
                </li>

                <li class="step-item">
                  <div class="step-content-wrapper" href="">
                    <span class="step-icon step-icon-soft-dark">3</span>
                    <div class="step-content">
                      <span class="step-title">Enter Job Preferences</span>
                      <span
                        class="step-title-description step-text font-size-1"
                      ></span>
                    </div>
                  </div>
                </li>
              </ul>
              <!-- End Step -->
            </div>
            <!-- End Sticky Block -->
          </div>
          
          <div id="formContainer" class="col-lg-8" v-show="!state.formSubmitted">
            <!-- Content Step Form -->
            <div id="postJobStepFormContent">
              <component
                :is="state.stepComponents[state.activeStep]"
                @next-step="nextStep"
                :applicant="state.applicant"
                :active="state.activeStep"
              ></component>
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

<script setup>

import CoverRow from "../components/ui/auth/CoverRow.vue";
import AlertError from "../components/ui/AlertError.vue";
import TheCard from "../components/ui/TheCard.vue";
import ChangePassword from "../components/registration/ChangePassword.vue";
import PersonalInformation from "../components/registration/PersonalInformation.vue";
import JobPreferences from "../components/registration/JobPreferences.vue";
import RegistrationComplete from "../components/registration/RegistrationComplete.vue";
import Cookies from "js-cookie";
import { useAuthStore } from "../stores/auth";
import {reactive, onMounted} from "vue";


const store = useAuthStore();

const state = reactive({
  stepComponents:{
    "change-password":ChangePassword,
    "personal-information":PersonalInformation,
    "job-preferences":JobPreferences,
    "registration-complete":RegistrationComplete
  },
  steps: [
    "change-password",
    "personal-information",
    "job-preferences",
    "registration-complete",
  ],
  activeStep: "",
  applicant: {},
  token: "",
  errorMessage: "",
  submissionError: false,
  formSubmitted: false,
})


onMounted(async ()=>{
  state.token = Cookies.get("com.ajobs.applicant");

  state.applicant = await fetch(
    import.meta.env.VITE_AJ_API_PATH + "/applicant/get",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + state.token,
      },
    }
  ).then((result) => {
    if (!result.ok) {
      return result;
    }
    return result.json();
  });

  if (state.applicant) {
    state.activeStep =
      store.getRegistrationStep ||
      state.applicant.registrationstep;
  }
})

function nextStep(nextStep) {
  state.activeStep = state.steps.find((el) => el == nextStep);
}

</script>


<style scoped></style>
